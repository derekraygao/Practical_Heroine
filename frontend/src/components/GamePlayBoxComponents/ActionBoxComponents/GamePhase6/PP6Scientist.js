import React from 'react';
import { connect } from 'react-redux';

import { systemMessages } from 'actions/systemMessages.js';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {calculateNumberofTeamMembers} from 'calculateNumberofTeamMembers.js';

import socket from 'Socket.js';

import NormalMissionVoteButtons from './PowerPhase6Components/NormalMissionVoteButtons.js';
import PP6NoPower from './PP6NoPower.js';



class PP6Scientist extends React.Component {

  state = {
            powerMenuSelection: "Vote",
            voteType: "Vote ?",
            number: "Number ?",
          };



  clickButton = () => {

    if (this.state.voteType !== "Vote ?" &&
      this.state.number !== "Number ?") {

      var hypothesis = {
                          type: this.state.voteType,
                          number: this.state.number
                       };

      socket.emit("Set Hypothesis", hypothesis);

      socket.emit("Vote on Mission", "Power");

      this.props.voted("Power");

    };

  }; //end clickButton


  getNumberChoices = () => {

    var mTeamSize = calculateNumberofTeamMembers(
        this.props.missionNumber, this.props.playerList.length);

    /*even though your B.V.P. for this mission is 0,
    an ability might change that */
    var numberChoices = [];

    //because you want 0 up to number of teammates
    var numlength = mTeamSize + 1;

    for (var i = 0; i < numlength; i++) {

      numberChoices.push(
        <option value={i}>{i}</option>
      );

    };

    return numberChoices;

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
          value={this.state.voteType}
          onChange={e => this.setState({ voteType: e.target.value })}
        >

          <option value="Vote ?" disabled selected>Vote Type</option>
          <option value={1}>+1</option>
          <option value={-1}>-1</option>

        </select>


        <select 
          className="ui search dropdown"
          value={this.state.number}
          onChange={e => this.setState({ number: e.target.value })}
        >

          <option value="Number ?" disabled selected>Number</option>
          {this.getNumberChoices()}

        </select>


        <button 
          className="ui button yellow"
          onClick={this.clickButton}
        >
          Hypothesize!
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
            className={`ui button ${this.powerMenuColor("Hypothesis")}`}
            onClick={ () => this.setState({powerMenuSelection: "Hypothesis"}) }
          >
            Hypothesis
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
(PP6Scientist);

