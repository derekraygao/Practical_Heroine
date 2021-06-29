import React from 'react';
import './css/MenuBar.css';


class MenuBar extends React.Component {


	render() {

		return (

			<div className="menu-bar-container yellow ui buttons">

        <button class="ui button menu-button1">Video</button>
        <button class="ui button menu-button2">Chat</button>
        <button class="ui button menu-button3">Results</button>
        <button class="ui button menu-button4">Notes</button>
        <button class="ui button">Rules</button>

      </div> //end div menu-bar-container

		); //end return



	}; //end render()






}; //end class MenuBar

export default MenuBar;