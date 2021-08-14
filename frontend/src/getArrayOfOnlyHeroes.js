
function getArrayOfOnlyHeroes(allPlayersArray, villainsArray) {

	var copyAllPlayersArray = JSON.parse(JSON.stringify(allPlayersArray));

	var q;

	for (var i = 0; i < villainsArray.length; i++) {

		q = copyAllPlayersArray.indexOf(villainsArray[i]);

		if (q > -1) {
			copyAllPlayersArray.splice(q, 1);
		};

	};

	return copyAllPlayersArray;

};


export default getArrayOfOnlyHeroes;