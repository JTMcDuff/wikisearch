/*
* @function -- Gets search term fron input boxs and clears input.
* @returns -- object of search terms
*/
function getSearchTerms() {
	let searchTerms = {};
	let searchTerm = document.getElementById('search-input').value;
	let numResults = Number(document.getElementById('search-num-items').value);

	// Input Validation
	if (searchTerm === '') {
		alert('Please input a search value');
		return;
	}

	if (isNaN(numResults)) {
		alert('Please input a number of results to return');
		return;
	}


	searchTerms.searchTerm = searchTerm;
	searchTerms.numResults = numResults;


	searchTerm.value = '';
	numResults.value = '';

	return searchTerms;
};

/**
* @function -- formats JSON from wikipedia
* @inputs -- JSON from wikipedia search
* @returns -- array of arrays of javascript object, and html elements
*/
function formatResults(results) {
	let searchInfo = results.query.searchinfo;
	let searchResults = results.query.search;
	let resultsArray = searchResults.map(result =>{
		return [result,formatResult(result)];
	});
	return resultsArray;
};

/**
* @ function -- formats an individual result into html
* @ inputs -- an object of a single search result
* @ returns -- formatted html
*/
function formatResult(result) {
	let resultDiv = document.createElement('div');
	resultDiv.classList.add('result-div');
	let titleSpan = document.createElement('span');

	let wordCount = document.createElement('p');
	wordCount.classList.add('wordcount');
	wordCount.innerHTML = 'Wordcount: ' + result.wordcount;

	let pageLink = document.createElement('a');
	pageLink.setAttribute('href', 'http://en.wikipedia.org/?curid=' + result.pageid);
	pageLink.target = '_blank';
	pageLink.text = result.title;

	let snippet = document.createElement('p');
	snippet.innerHTML = 'Snippet: ' + result.snippet + '...';


	titleSpan.appendChild(pageLink);
	titleSpan.appendChild(wordCount);
	resultDiv.appendChild(titleSpan);
	resultDiv.appendChild(snippet);

	return resultDiv;
};

/**
* @function -- renders results onto DOM
* @inputs -- formatted array
*/
function renderResults(results) {
	
	// TODO JOHNNY: Update to only clear if currently rendered.
	clearResults();
	
	let fragment = document.createDocumentFragment();
	let resultTarget = document.getElementById('results-container');

	results.forEach(result => {
		fragment.appendChild(result[1]);
	});

	resultTarget.appendChild(fragment);
};

/**
* @function -- clear search div and recreate
*/
function clearResults() {
	let parent = document.getElementById('main-search');
	let child = document.getElementById('results-container');
	parent.removeChild(child);

	let resultsDiv = document.createElement('div');
	resultsDiv.id = "results-container";
	resultsDiv.classList.add('results');
	parent.appendChild(resultsDiv);
};