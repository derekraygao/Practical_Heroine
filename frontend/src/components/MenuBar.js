import React from 'react';

import { connect } from 'react-redux';
import { mainMenuSelection } from 'actions/mainMenuSelection.js';
import { newChatNotification } from 'actions/newChatNotification.js';

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


    /*this is for individual buttons in menu-bar,
    when active, needs to be a different color */
    menuButtonColor(menu) {

      var {menuSelection, gamePhase} = this.props;

      if (menuSelection !== menu) {
        return "";
      }; //end if (menuSelection !== menu)


      if (gamePhase !== 8) {

        return "menu-orange";

      };

      return "menu-purple";

    }; //end menuButtonColor


    menuButtonColorForChat = () => {

      var {menuSelection, gamePhase, newChatNotification} = this.props;


      if (menuSelection !== "chat" 
        && newChatNotification
        && gamePhase !== 8) {
        return "menu-red";
      };


      if (menuSelection !== "chat") {
        return "";
      };

      
      /*if menu selection IS chat */

      //for day
      if (gamePhase !== 8) {

        return "menu-orange";

      };

      //for night
      return "menu-purple";


    }; //end menuButtonColorForChat



    videoClick = () => {
      this.props.updateMenuSelection("video");
    };

    chatClick = () => {

      this.props.updateMenuSelection("chat");
      this.props.updateNewChatNotification(false);

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
          class={`ui button menu-button ${this.menuButtonColor("video")}`}
          onClick={this.videoClick} 
          style={this.showVideoAndChatMenuButtonOrNot()}>Video
        </button>

        <button 
          class={`ui button menu-button ${this.menuButtonColorForChat()}`}
          onClick={this.chatClick}  
          style={this.showVideoAndChatMenuButtonOrNot()}>Chat
        </button>

        <button 
          class={`ui button menu-button ${this.menuButtonColor("player & results")}`}
          onClick={this.prClick}>Players & Results
        </button>

        <button 
          class={`ui button menu-button ${this.menuButtonColor("notes")}`}
          onClick={this.notesClick}>Notes
        </button>

        <button 
          class={`ui button menu-button ${this.menuButtonColor("powers")}`}
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
      menuSelection: state.mainMenuSelection,
      newChatNotification: state.newChatNotification,
    }
  ); //end return

};


export default connect(mapStateToProps, 
  {
    updateMenuSelection: mainMenuSelection,
    updateNewChatNotification: newChatNotification,
  })
(MenuBar);



