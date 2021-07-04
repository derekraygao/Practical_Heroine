
function getArrayOfOnlyHeroes(allPlayersArray, villainsArray) {

	var q;

	for (var i = 0; i < villainsArray.length; i++) {

		q = allPlayersArray.indexOf(villainsArray[i]);

		if (q > -1) {
			allPlayersArray.splice(q, 1);
		};

	};

	return allPlayersArray;

};


export default getArrayOfOnlyHeroes;