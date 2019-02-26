/**
* @function -- sorts wikiResults by Title and rerenders
*/
function sortByTitle() {
	if (wikiResults.length < 1) {
		console.log('No data to sort ');
		return;
	}

	alphaSort = !alphaSort;

	wikiResults.sort((a,b)=> {
		aTitle = a[0].title;
		bTitle = b[0].title;
		if (alphaSort) {
			if (aTitle < bTitle) {
				return 1;
			}
			return -1;
		} else {
			if (aTitle < bTitle) {
				return -1;
			}
			return 1;
		}
	});

	renderResults(wikiResults);
};

/**
* @function -- sorts wikiResults by Title and rerenders
*/
function sortByWordCount() {
	if (wikiResults.length < 1) {
		console.log('No data to sort ');
		return;
	}

	wordCountSort = !wordCountSort;

	wikiResults.sort((a,b)=> {
		aCount = a[0].wordcount;
		bCount = b[0].wordcount;
		if (wordCountSort) {
			if (aCount < bCount) {
				return 1;
			}
			return -1;
		} else {
			if (aCount < bCount) {
				return -1;
			}
			return 1;
		}
	});

	renderResults(wikiResults);
};