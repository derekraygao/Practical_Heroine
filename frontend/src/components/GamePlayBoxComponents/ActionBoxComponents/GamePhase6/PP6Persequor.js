import React from 'react';
import { connect } from 'react-redux';

import { systemMessages } from 'actions/systemMessages.js';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';

import socket from 'Socket.js';

import NormalMissionVoteButtons from './PowerPhase6Components/NormalMissionVoteButtons.js';
import PP6NoPower from './PP6NoPower.js';



class PP6Persequor extends React.Component {

  state = {
            powerMenuSelection: "Vote",
            copycatTarget: "Copycat ?",
          };



  clickButtonCopycat = () => {

    if (this.state.copycatTarget !== "Copycat ?") {

      socket.emit("Copycat a Vote", this.state.copycatTarget);

      socket.emit("Vote on Mission", "Power");

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("Stop right there, copycat! For Mission " 
            + this.props.missionNumber + ", your final voting "
            + "power will be equal to " + this.state.copycatTarget
            + "'s final voting power, except guaranteed negative.")
        }
      );

      this.props.voted("Power");

    };

  }; //end clickButtonCopycat



  clickButtonIdentityTheft = () => {

    socket.emit("Activate Identity Theft");

    socket.emit("Vote on Mission", "Power");

    this.props.addSystemMessage(
        {
          type: "power",
          message: ("You will steal the identity of "
            + "a random hero for Mission " + 
            (this.props.missionNumber + 1) + ".")
        }
      );


    this.props.voted("Power");

  }; //end clickButtonIdentityTheft



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

    if (this.state.powerMenuSelection == "Identity Theft") {

      return (

        <button 
          className="ui button yellow"
          onClick={this.clickButtonIdentityTheft}
        >
          Steal Identity!
        </button>


      ); //end return

    }; //end if == identity theft


    return (
      <>

        <select 
          className="ui search dropdown"
          value={this.state.copycatTarget}
          onChange={e => this.setState({ copycatTarget: e.target.value })}
        >

          <option value="Copycat ?" disabled selected>Copycat</option>
          {this.getSelectionChoices()}

        </select>

        <button 
          className="ui button yellow"
          onClick={this.clickButtonCopycat}
        >
          Copy!
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
            className={`ui button ${this.powerMenuColor("Copycat")}`}
            onClick={ () => this.setState({powerMenuSelection: "Copycat"}) }
          >
            Copycat
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Identity Theft")}`}
            onClick={ () => this.setState({powerMenuSelection: "Identity Theft"}) }
          >
            Identity Theft
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
(PP6Persequor);

