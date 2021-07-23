import React from 'react';
import { connect } from 'react-redux';

import { systemMessages } from 'actions/systemMessages.js';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';

import socket from 'Socket.js';

import NormalMissionVoteButtons from './PowerPhase6Components/NormalMissionVoteButtons.js';
import PP6NoPower from './PP6NoPower.js';



class PP6LieutenantBlitz extends React.Component {

  state = {
            powerMenuSelection: "Vote",
            smashTarget: "Smash ?",
          };



  clickButton = () => {

    if (this.state.smashTarget !== "Smash ?") {

      socket.emit("United States of Smash", this.state.smashTarget);

      socket.emit("Vote on Mission", "Power");


      this.props.addSystemMessage(
        {
          type: "power",
          message: ("You charged up all your might into a single, "
          + "powerful punch! United States of Smash! "
          + "Starting next round, and for the "
          + "next 2 rounds, " + this.state.smashTarget 
          + " will suffer from the 'Injury' status; his/her "
          + "base voting power will be reduced to 0!") 
        }
      );


      this.props.voted("Power");

    };

  }; //end clickStrike


  getSelectionChoices = () => {

    var playerChoices = JSON.parse(JSON.stringify(this.props.missionTeam));

    var q = playerChoices.indexOf(this.props.myName);

    if (q > -1) {
      playerChoices.splice(q, 1);
    }

    var arrayOfOptions = playerChoices.map( (pName, index) => {

      return (
        <option value={pName} key={index}>{pName}</option>
      );

    });

    return arrayOfOptions;

  }; //end getSelectionChoices()



  powerMenuColor = (power) => {

    if (power === this.state.powerMenuSelection) {
      return "yellow-color";
    };

    return "";

  };




  returnWhichActionAreaComponent = () => {

    if (this.state.powerMenuSelection == "Vote") {

        return (<NormalMissionVoteButtons voted={this.props.voted} />);

    };


    return (
      <>

        <select 
          className="ui search dropdown"
          value={this.state.smashTarget}
          onChange={e => this.setState({ smashTarget: e.target.value })}
        >

          <option value="Smash ?" disabled selected>U.S.S.</option>
          {this.getSelectionChoices()}

        </select>

        <button 
          className="ui button yellow"
          onClick={this.clickButton}
        >
          Smash!
        </button>

      </>

    ); //end return



  }; //end returnWhichActionAreaComponent



  render() {

    return (

      <div className="PP6-general-container">

        <div className="PP6-powers-menu-bar-container orange ui buttons">
          
          <button 
            className={`ui button ${this.powerMenuColor("Vote")}`}
            onClick={ () => this.setState({powerMenuSelection: "Vote"}) }
          >
            Vote
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Smash")}`}
            onClick={ () => this.setState({powerMenuSelection: "Smash"}) }
          >
            United States of Smash
          </button>

        </div> 


        <div className="PP6-general-action-area-container">

          {this.returnWhichActionAreaComponent()}

        </div>

      </div> //end div PP5-general-container

    ); //end return



  }; //end render()



}; //end class MissionVotingPhase6



const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            role: state.role,
            playerList: state.playerList,
            villainList: state.villainList,
            PH: state.characterPowersHistory,
            missionNumber: state.missionNumber,
            teamLeader: state.teamLeader,
            missionTeam: state.missionTeam,
            timer: state.timer,
            missionVoteTab: state.missionVoteTab,
         }
  );

};


export default connect(mapStateToProps, 
  {
    updatePower: updateCharacterPowerHistory,
    addSystemMessage: systemMessages
  }
)
(PP6LieutenantBlitz);

