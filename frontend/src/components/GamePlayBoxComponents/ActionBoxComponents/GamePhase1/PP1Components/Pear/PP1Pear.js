import React from 'react';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';

import PP1NoPower from '../PP1NoPower.js';


class PP1Pear extends React.Component {

  state = {

    powerTarget1: "Power1 ?",
    usedPower: false,

  };


  componentDidMount = () => {


  }; //end componentDidMount



  submitButtonPower1 = () => {

    if (this.state.powerTarget1 == "Power1 ?") { return 0; };
    
    this.setState({ usedPower: true });

    socket.emit("Nature Telepathy", this.state.powerTarget1);

  }; //end submitButtonPower1



  getSelectionChoices = () => {

    var playerChoices = JSON.parse(JSON.stringify(this.props.missionTeam));

    var q = playerChoices.indexOf(this.props.myName);

    if (q > -1) {
      playerChoices.splice(q, 1);
    };


    var arrayOfOptions = playerChoices.map( (pName, index) => {

      return (
        <option value={pName} key={index}>{pName}</option>
      );

    });

    return arrayOfOptions;

  }; //end getSelectionChoices()



  returnWhichActionAreaComponent = () => {

    return (

      <>

          <select 
            className="ui search dropdown"
            value={this.state.powerTarget1}
            onChange={e => this.setState({ powerTarget1: e.target.value })}
          >

            <option value="Power1 ?" disabled selected>Players</option>
            {this.getSelectionChoices()}

          </select>


          <button 
            className="ui yellow button"
            onClick={this.submitButtonPower1}
          >
            Ask!
          </button>


      </>

    ); //end return


  }; //end returnWhichActionAreaComponent()



  render() {

    if (this.props.missionNumber == 1) {
      return <PP1NoPower />;
    };


    if (this.state.usedPower) {

      return (

      <div className="PP1-general-power-container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-action-area-container">
          Have you ever heard the trees sing the song of the storms? 
          Or asked the volsimia why he flew across the Rongtai Oceans? 
          The plants & animals reveal {this.state.powerTarget1}'s 
          secrets! Please wait {this.props.timer} seconds for Game 
          Phase 1 to end.
        </div>

      </div>

      ); //end return

    }; //end if usedPower




    return (

      <div className="PP1-general-power-container">

        <div className="powers-menu-bar-container orange ui buttons">

          <button className="ui button">
            Nature Telepathy
          </button>

        </div> 


        <div className="PP1-action-area-container">

          {this.returnWhichActionAreaComponent()}

        </div>


      </div> //end div Umbra-Lord-Container

    ); //end return


  }; //end render()



}; //end class Pear


const mapStateToProps = (state) => {
  
  return (
         { 
            PH: state.characterPowersHistory,
            myName: state.name,
            playerList: state.playerList,
            missionTeam: state.missionTeam,
            gamePhase: state.gamePhase,
            missionNumber: state.missionNumber,
            timer: state.timer,
         }
  );

};


export default connect(mapStateToProps, 
  {
    updatePower: updateCharacterPowerHistory,
    addSystemMessage: systemMessages,
  }
)
(PP1Pear);