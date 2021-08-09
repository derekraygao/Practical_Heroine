import React from 'react';
import { connect } from 'react-redux';

import './GameOverPhase10.css';

import { systemMessages } from 'actions/systemMessages.js';

import socket from 'Socket.js';
import formatArrayIntoString from 'formatArrayIntoString.js';



class GameOverPhase10 extends React.Component {

  state = {
            ready: false
          };



  componentDidMount = () => {


  };


  startNewGame = () => {
    socket.emit("Start New Game After First Game");
  };


  clickReady = () => {
    socket.emit("Set Player Ready");
  };


  clickUnready = () => {
    socket.emit("Unready Player");
  };


  /*Roundabout method of checking if ready, but 
  just to make sure server received and set player 
  as ready/unready*/
  amIReady = () => {

    var {playerList} = this.props.roomInfo;

    for (var i = 0; i < playerList.length; i++) {

      if (playerList[i].name == this.props.myName) {
        return (playerList[i].ready);
      };

    }; //end for

    return false;

  }; //end amIReady()



  congratulatoryText = () => {

    var gameScenario = this.props.gameEndScenario;

    if (gameScenario.winners === "heroes") {

      return ("The Heroes win! They successfully defied Sarah's"
      + " prediction! The Cosmic Void is now forever safe. When"
      + " ready for a new game, click the ready button below."
      + " New people can join from the lobby.");

    }; //end if

    switch (gameScenario.scenario) {

      case "3xs":
        return ("The villains win through 3 consecutive missions!"
        + " Darkness covers all of Aezurea! When ready for a new game,"
        + " click the ready button below. New people can join from the"
        + " lobby.");


      case "4/7":
        return ("The villains sabotaged 4 missions! Azurea and"
          + " the entire Cosmic Void move closer to the Nothingness."
          + " When ready for a new game, click the ready button below."
          + " New people can join from the lobby.");

      case "5 failed":
        return ("The Heroe's party falls apart in discord! 5 failed"
          + " team proposals in a single mission! The villains win!"
          + " When ready for a new game, click the ready button below."
          + " New people can join from the lobby.");


      case "correct guess":
        return ("The villains killed Princess Serenity (John)!"
          + " It seems Fate truly cannot be defied. When ready for"
          + " a new game, click the ready button below. New people can"
          + " join from the lobby.");


      case "dark destiny":
        return ("Winged Gryffin: Throughout history, there are those " 
          + "who have called the rule of the Luces to be tyrannical. "
          + "They who believe that man's fate is his own right. But "
          + "this incessant cycle of rebellion is meaningless. Fate is "
          + "not changed so easily. A dark destiny is a very force "
          + "of nature. Can you banish the clouds? Calm the waves? "
          + "Perhaps...it is said that only the legendary Moon "
          + "Princess has the power to change one's fate. "
          + "Unfortunately for you, your destiny was to lose to "
          + "the villains. When ready for a new game, "
          + "click the ready button below. New people can join from the "
          + "lobby.");


    }; //end switch


  }; //end congratulatoryText()




  readyForNewGameOrNot = () => {


    if (this.props.myName == this.props.roomInfo["roomMaster"]) {

      return (

        <div className="game-over-ready-for-new-game-container">

          <div className="game-over-ready-text-container">
            Though this battle has ended, the war continues 
            indefinitely, like the boundless space of the Cosmic 
            Void. New players can join from the lobby. 
            You, {this.props.myName}, the Room Master, can start 
            a new game when there are at least 6 players in the 
            room and everyone has clicked the 'Ready' button.
          </div>

          <button 
            className="ui green button"
            onClick={this.startNewGame}
          >
            Start New Game
          </button>

        </div>

      ); //end return

    }; //end if roomMaster



    if (this.amIReady()) {

      return (

        <div className="game-over-ready-for-new-game-container">

          <div className="game-over-ready-text-container">
            You are ready! 
            The Room Master, {this.props.roomInfo["roomMaster"]}, 
            can start a new game once there are at least 6 players 
            in the room and everyone has clicked the 'Ready' button. 
            Remember, new players can join from the lobby.
          </div>

          <button 
            className="ui red button"
            onClick={this.clickUnready}
          >
            Unready
          </button>

        </div>

      ); //end return

    }; //end if


    /*currently unready*/
    return (

      <div className="game-over-not-ready-container">

        <div className="game-over-not-ready-text-container">
          {this.congratulatoryText()}
        </div>

        <button 
          className="ui green button"
          onClick={this.clickReady}
        >
          Ready
        </button>

      </div>


    ); //end return


  }; //end readyForNewGameOrNot()


  render() {

    return (
      
      this.readyForNewGameOrNot()

    ); //end return

  }; //end render()



}; //end class GameOverPhase10



const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            gameEndScenario: state.gameEndScenario,
            roomInfo: state.roomInfo,
         }
  );

};


export default connect(mapStateToProps, 
  {

  }
)
(GameOverPhase10);