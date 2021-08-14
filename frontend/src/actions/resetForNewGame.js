
/*remember, with combineReducers, actions are passed
to every single reducer */
export const resetForNewGame = () => {

	return (
		{
			type: "RESET_FOR_NEW_GAME"
		}
	);

};