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


  readyUnreadyNewGameClick = () => {

    if (!this.state.ready) {

      this.setState({ready: true});
      //socket.emit

    } else {

      this.setState({ready: false});
      //socket.emit

    }; //end else

  }; //end readyUnreadyNewGameClick


  readyForNewGameOrNot = () => {

    if (this.state.ready) {

      return (

        <div className="game-over-ready-for-new-game-container">

          <div className="game-over-ready-text-container">
            When all people in the game room have clicked ready, 
            a new game will start! Remember, new people are able 
            to join from the lobby.
          </div>

          <button 
            className="ui red button"
            onClick={this.readyUnreadyNewGameClick}
          >
            Unready
          </button>

        </div>

      ); //end return

    }; //end if


    return (

      <div className="game-over-not-ready-container">

        <div className="game-over-not-ready-text-container">
          {this.congratulatoryText()}
        </div>

        <button 
          className="ui green button"
          onClick={this.readyUnreadyNewGameClick}
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
            gameEndScenario: state.gameEndScenario
         }
  );

};


export default connect(mapStateToProps, 
  {

  }
)
(GameOverPhase10);