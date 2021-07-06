import React from 'react';
import { connect } from 'react-redux';
import {mainMenuSelection} from 'actions/mainMenuSelection.js';

import './css/MenuBar.css';

class MenuBar extends React.Component {

    showVideoAndChatMenuButtonOrNot() {

        if (this.props.gamePhase === 8) {
            return {display: "none"};
        };

        return {};

    };


    menuBarColor() {

      if (this.props.gamePhase === 8) {
        return "violet";
      };

      return "yellow";

    }; //end menuBarColor


    videoClick = () => {
      this.props.updateMenuSelection("video");
    };

    chatClick = () => {
      this.props.updateMenuSelection("chat");
    };

    prClick = () => {
      this.props.updateMenuSelection("player & results");
    };

    notesClick = () => {
      this.props.updateMenuSelection("notes");
    };

    powersClick = () => {
      this.props.updateMenuSelection("powers");
    };



	render() {

		return (

			<div className={`menu-bar-container ${this.menuBarColor()} ui buttons`}>

        <button 
          class="ui button menu-button1"
          onClick={this.videoClick} 
          style={this.showVideoAndChatMenuButtonOrNot()}>Video
        </button>

        <button 
          class="ui button menu-button2"
          onClick={this.chatClick}  
          style={this.showVideoAndChatMenuButtonOrNot()}>Chat
        </button>

        <button 
          class="ui button menu-button3"
          onClick={this.prClick}>Players & Results
        </button>

        <button 
          class="ui button menu-button4"
          onClick={this.notesClick}>Notes
        </button>

        <button 
          class="ui button"
          onClick={this.powersClick}>Powers
        </button>

      </div> //end div menu-bar-container

		); //end return



	}; //end render()






}; //end class MenuBar



const mapStateToProps = (state) => {
  
  return (
    { 
      gamePhase: state.gamePhase,
    }
  ); //end return

};


export default connect(mapStateToProps, 
  {
    updateMenuSelection: mainMenuSelection
  })
(MenuBar);



