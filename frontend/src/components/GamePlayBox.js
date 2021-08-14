import React from 'react';
import './css/GamePlayBox.css';
import { connect } from 'react-redux';

import SystemInstructionsMenu from './GamePlayBoxComponents/SystemInstructionsMenu.js';
import SystemMessageBox from './GamePlayBoxComponents/SystemMessageBox.js';
import InstructionsBox from './GamePlayBoxComponents/InstructionsBox.js';

import PowersMenu from './GamePlayBoxComponents/PowersMenu.js';
import ActionBox from './GamePlayBoxComponents/ActionBox.js';


class GamePlayBox extends React.Component {


  whichGamePlayBoxGridDesign = () => {

    if ([1, 5, 6].includes(this.props.gamePhase)) {

      return "game-play-box";

    };

      return "game-play-box-grid-with-power-menu";
   
  };



	render() {

		return (

			<div className={this.whichGamePlayBoxGridDesign()}>

        <SystemInstructionsMenu />
        <SystemMessageBox />

        <PowersMenu />
        <ActionBox />


      </div> //end div game-play-box

		); //end return



	}; //end render()






}; //end class GamePlayBox




const mapStateToProps = (state) => {
  
  return (
    { 
      gamePhase: state.gamePhase,
    }
  );

};


export default connect(mapStateToProps, 
  {
   
  }
)
(GamePlayBox);


