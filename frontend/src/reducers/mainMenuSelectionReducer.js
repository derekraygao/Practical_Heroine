
const mainMenuSelectionReducer = (menuSelection = "video", action) => {

	switch (action.type) {

		case "MAIN_MENU_SELECTION":
			return action.payload;

		default:
			return menuSelection


	}; //end switch


};


export default mainMenuSelectionReducer;