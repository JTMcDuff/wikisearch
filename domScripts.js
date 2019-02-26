/*
* @function -- Gets search term fron input boxs and clears input.
* @returns -- object of search terms
*/
function getSearchTerms() {
	let searchTerms = {};
	let searchTerm = document.getElementById('search-input');
	let numResults = document.getElementById('search-num-items');

	searchTerms.searchTerm = searchTerm.value;
	searchTerms.numResults = Number(numResults.value);

	searchTerm.value = '';
	numResults.value = '';

	console.log(searchTerms);
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
	console.log('resultsArray ', resultsArray);
	return resultsArray;
};

/**
 * @ function -- formats an individual result into html
 * @ inputs -- an object of a single search result
 * @ returns -- formatted html
*/
function formatResult(result) {
	let resultDiv = document.createElement('div');
	let titleSpan = document.createElement('span');

	let wordCount = document.createElement('p');
	wordCount.innerHTML = 'Wordcount: ' + result.wordcount;

	let pageLink = document.createElement('a');
	pageLink.setAttribute('href', 'http://en.wikipedia.org/?curid=' + result.pageid);
	pageLink.target = '_blank';
	pageLink.text = result.title;

	let snippet = document.createElement('p');
	snippet.innerHTML = 'Snippet: ' + result.snippet;

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
	parent.appendChild(resultsDiv);
};