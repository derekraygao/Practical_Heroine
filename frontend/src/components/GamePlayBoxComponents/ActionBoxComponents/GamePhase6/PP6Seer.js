import React from 'react';
import { connect } from 'react-redux';

import { systemMessages } from 'actions/systemMessages.js';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';

import socket from 'Socket.js';
import getArrayOfOnlyHeroes from 'getArrayOfOnlyHeroes.js';

import NormalMissionVoteButtons from './PowerPhase6Components/NormalMissionVoteButtons.js';
import PP6NoPower from './PP6NoPower.js';




class PP6Seer extends React.Component {

  state = {
            powerMenuSelection: "Vote",
            power1Target: "Power1 ?",
          };



  clickButtonPower1 = () => {

    if (this.state.power1Target == "Power1 ?") { return 0; };

    socket.emit("Flash", this.state.power1Target);
    socket.emit("Vote on Mission", "Power (-1)");


    this.props.addSystemMessage(
      {
        type: "power",
        message: ("You unleashed the 'Sight' upon " 
          + this.state.power1Target 
          + ", blinding & confusing him/her with a flash of light! For the "
          + "current mission, there is a 75% chance his/her "
          + "base mission voting power will be reversed! " 
          + "He/she was notified that he/she was affected by "
          + "'Flash'!")
      }
    );


    this.props.voted("Power");

  }; //end clickButtonPower1



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


    return (

      <>

        <select 
          className="ui search dropdown"
          value={this.state.power1Target}
          onChange={e => this.setState({ power1Target: e.target.value })}
        >

          <option value="Power1 ?" disabled selected>Confuse</option>
          {this.getSelectionChoices()}

        </select>


        <button 
          className="ui button yellow"
          onClick={this.clickButtonPower1}
        >
          Flash!
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
            className={`ui button ${this.powerMenuColor("Flash")}`}
            onClick={ () => this.setState({powerMenuSelection: "Flash"}) }
          >
            Flash
          </button>

        </div> 


        <div className="PP6-general-action-area-container">

          {this.returnWhichActionAreaComponent()}

        </div>

      </div> //end div PP6-general-container

    ); //end return



  }; //end render()



}; //end class PP6Kaguya



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
(PP6Seer);

