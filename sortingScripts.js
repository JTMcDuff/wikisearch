/**
 * @function -- sorts wikiResults by Title
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