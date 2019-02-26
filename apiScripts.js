// *** API SCRIPTS

/**
 * @function -- makes API call to wikipedia
* @inputs -- string search term
* @returns -- promise object with parsed json
*/
function makeWikiAPICall(searchTerm) {
	return fetch(constructURL(searchTerm), {
	    method: 'GET',
	    headers:{
	    	'Content-Type': 'application/json'
	  	}
	})
	.then(response =>{
		return response.json();
	})
	.then(resJson =>{
		return resJson;
	})
	.catch(error => {
		// TODO JOHNNY: Update with more effective error handling.
		console.log(error);
		return error;
	});
};

/**
 * @function -- constructs URL for service call
* @inputs -- string search term
* @returns -- URL object ready for fetch
*/
function constructURL(searchTerms) {
	// Designed for future expansion
	let url = new URL('https://en.wikipedia.org/w/api.php'),
	params = {
		'action': 'query',
		'list':'search',
		'srsearch': searchTerms.searchTerm,
		'srlimit': searchTerms.numResults,
		'format':'json',
		'origin': '*'
	};
	Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
	console.log('URL ', url);
	return url;
};