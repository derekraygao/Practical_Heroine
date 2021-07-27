import React from 'react';
import { connect } from 'react-redux';


import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import socket from 'Socket.js';
import formatArrayIntoString from 'formatArrayIntoString.js';



class PP5NotSelectedForMissionLottie extends React.Component {

  state = {
            powerTarget1: "Power1 ?",
            powerMenuSelection: "Therapy",
            usedPower: false,
          };



  submitButtonPower1 = () => {

    if (this.state.powerTarget1 == "Power1 ?") { return 0; };

      this.setState({usedPower: true});

      socket.emit("Gossip", this.state.powerTarget1);

  }; //end submitButtonPower1


  /*players who are NOT on the mission team */
  getSelectionChoices = () => {

    var playerChoices = JSON.parse(JSON.stringify(this.props.playerList));
    var missionTeamArr = this.props.missionTeam;
    var nonMissionPlayers = [];

    for (var i = 0; i < playerChoices.length; i++) {

      if (playerChoices[i] == this.props.myName) { continue; };
      if (missionTeamArr.includes(playerChoices[i])) { continue; };

      nonMissionPlayers.push(playerChoices[i]);

    };


    const allPlayerSelectOptions = nonMissionPlayers.map((pName, index) => {

      return (

        <option value={pName}>{pName}</option>

      ); //end return


    });

    return allPlayerSelectOptions;

  };




  returnWhichActionAreaComponent = () => {

    return (

      <>

        <select 
          className="ui search dropdown"
          value={this.state.powerTarget1}
          onChange={e => this.setState({ powerTarget1: e.target.value })}
        >

          <option value="Power1 ?" disabled selected>N.D.A.</option>
          {this.getSelectionChoices()}

        </select>


        <button
          className="ui button yellow PP5-margin-left"
          onClick={this.submitButtonPower1}
        >
          Gossip
        </button>

      </>

    ); //end return


  }; //end returnWhichActionAreaComponent()




  render() {

    if (this.state.usedPower || this.props.missionNumber == 1) {

      return (

        <div className="PP5-general-container">

          <div className="PP5-powers-menu-bar-container orange ui buttons">
            <button className="ui button"></button>
          </div> 

          <div className="PP5-general-action-area-container">
            Wait {this.props.timer} seconds 
            until {this.props.teamLeader}'s 
            team ({formatArrayIntoString(this.props.missionTeam)}) 
            completes the mission.
          </div>

        </div>


      ); //end return

    }; //end usedPower



    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          <button className="ui button">Gossip</button>
        </div> 


        <div className="PP5-general-action-area-container">

          {this.returnWhichActionAreaComponent()}

        </div>

      </div> //end div PP5-general-container


    ); //end return

  }; //end render()



}; //end class PP5Lottie



const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            playerList: state.playerList,
            missionTeam: state.missionTeam,
            PH: state.characterPowersHistory,
            missionNumber: state.missionNumber,
            role: state.role,
            timer: state.timer
         }
  );

};


export default connect(mapStateToProps, 
  {
    updatePower: updateCharacterPowerHistory,
    addSystemMessage: systemMessages,
  }
)
(PP5NotSelectedForMissionLottie);