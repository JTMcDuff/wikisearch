/*
* @function -- Gets search term fron input box and clears input.
* @returns -- string from search input
*/
function getSearchTerm() {
	var searchTerm = document.getElementById('search-input').value;
	document.getElementById('search-input').value = '';
	
	return searchTerm;
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
	var resultTarget = document.getElementById('search-results');
	results.forEach(result => {
		resultTarget.appendChild(result);
	})	
};