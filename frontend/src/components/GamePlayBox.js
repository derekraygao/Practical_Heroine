import React from 'react';
import './css/GamePlayBox.css';

import SystemInstructionsMenu from './GamePlayBoxComponents/SystemInstructionsMenu.js';
import SystemMessageBox from './GamePlayBoxComponents/SystemMessageBox.js';
import InstructionsBox from './GamePlayBoxComponents/InstructionsBox.js';


class GamePlayBox extends React.Component {


	render() {

		return (

			<div className="game-play-box">

        <SystemInstructionsMenu />
        <SystemMessageBox />

      </div> //end div game-play-box

		); //end return



	}; //end render()






}; //end class MenuBar

export default GamePlayBox;