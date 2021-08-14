import React from 'react';
import { connect } from 'react-redux';

import './TooFewPlayersPhase11.css';

import { systemMessages } from 'actions/systemMessages.js';

import socket from 'Socket.js';
import formatArrayIntoString from 'formatArrayIntoString.js';



class TooFewPlayersPhase11 extends React.Component {

  state = {
            ready: false
          };



  componentDidMount = () => {


  };



  clickReady = () => {

    socket.emit("Set Player Ready");

  };


  clickUnready = () => {

    socket.emit("Unready Player");

  };


  clickStartNewGame = () => {

    socket.emit("Start New Game After First Game");

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



  tooFewPlayersText = () => {

    /*For Room Master */
    if (this.props.myName === this.props.roomInfo["roomMaster"]) {

      return (
        <>
          Unfortunately, too many people have left the game room. 
          New people can join from the lobby. When there is at 
          least 6 people in the room and everyone has clicked the 
          'Ready' button, you, the Room Master, can start a new 
          game.
        </>
      );

    }; //end if roomMaster


    /* Not Room Master */

    //current not ready
    if (!this.amIReady()) {

      return (
        <>  
          Unfortunately, too many people have left the game room. 
          New players can join from the lobby. When you are ready to 
          play a new game, click the ready button. When there is at 
          least 6 people in the room and everyone has clicked the 
          'Ready' button below, the Room 
          Master, {this.props.roomInfo["roomMaster"]}, can start a 
          new game.
        </>
      ); //end return 

    }; //end if ready text


    //ready
    return (
      <>
        You are ready for a new game! Once the room has at least 6 
        players and everyone has signaled their 'Ready' status, 
        the Room Master, {this.props.roomInfo["roomMaster"]}, can 
        start a new game.
      </>
    ); //end return for "not ready" text


  }; //end tooFewPlayersText()



  tooFewPlayersButton = () => {

    /*For Room Master */
    if (this.props.myName === this.props.roomInfo["roomMaster"]) {

      return (

        <button
          className="ui button green"
          onClick={this.clickStartNewGame}
        >
          Start New Game
        </button>


      );

    }; //end if roomMaster


    /*Not Room Master*/

    /*Am currently ready*/
    if (this.amIReady()) {

      return (

        <button
          className="ui button red"
          onClick={this.clickUnready}
        >
          Unready
        </button>

      ); //end return

    }; //end if ready


    /*Not Ready */
    return (

      <button
        className="ui button green"
        onClick={this.clickReady}
      >
        Ready
      </button>

    ); //end return


  }; //end tooFewPlayersButton()





  render() {

    return (
      
      <div className="too-few-players-action-container">

        <div className="too-few-players-action-text-container">
          <span>
            {this.tooFewPlayersText()}
          </span>
        </div>

        {this.tooFewPlayersButton()}

      </div>

    ); //end return

  }; //end render()



}; //end class GameOverPhase10



const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            roomInfo: state.roomInfo
         }
  );

};


export default connect(mapStateToProps, 
  {

  }
)
(TooFewPlayersPhase11);