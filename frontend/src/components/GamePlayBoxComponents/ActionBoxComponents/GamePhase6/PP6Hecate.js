import React from 'react';
import { connect } from 'react-redux';

import { systemMessages } from 'actions/systemMessages.js';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';

import socket from 'Socket.js';

import NormalMissionVoteButtons from './PowerPhase6Components/NormalMissionVoteButtons.js';
import PP6NoPower from './PP6NoPower.js';



class PP6Hecate extends React.Component {

  state = {
            powerMenuSelection: "Vote",
            powerTarget1: "Power1 ?",
            powerTarget2: "Power2 ?",
          };



  clickButtonPower1 = () => {

    if (this.state.powerTarget1 == "Power1 ?") { return 0; };

      socket.emit("Multiplication Magic", this.state.powerTarget1);

      socket.emit("Vote on Mission", "Power");

      this.props.voted("Power");

  }; //end clickButtonPower1


  clickButtonPower2 = () => {

    if (this.state.powerTarget2 == "Power2 ?") { return 0; };

      socket.emit("Spell Boost", this.state.powerTarget2);

      socket.emit("Vote on Mission", "Power");

      this.props.voted("Power");

  };


  getSelectionChoices = () => {

    var playerChoices = JSON.parse(JSON.stringify(this.props.playerList));

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


    if (this.state.powerMenuSelection == "Multiplication") {

      return (

        <>

          <select 
            className="ui search dropdown"
            value={this.state.powerTarget1}
            onChange={e => this.setState({ powerTarget1: e.target.value })}
          >

            <option value="Power1 ?" disabled selected>Multiply</option>
            {this.getSelectionChoices()}

          </select>

          <button 
            className="ui button yellow"
            onClick={this.clickButtonPower1}
          >
            Multiply!
          </button>

        </>

      ); //end return

    }; //end if (this.state.powerMenuSelection == "Multiplication")



    return (

        <>

          <select 
            className="ui search dropdown"
            value={this.state.powerTarget2}
            onChange={e => this.setState({ powerTarget2: e.target.value })}
          >

            <option value="Power2 ?" disabled selected>Boost</option>
            {this.getSelectionChoices()}

          </select>

          <button 
            className="ui button yellow"
            onClick={this.clickButtonPower2}
          >
            Boost!
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
            className={`ui button ${this.powerMenuColor("Multiplication")}`}
            onClick={ () => this.setState({powerMenuSelection: "Multiplication"}) }
          >
            Multiplication
          </button>


          <button 
            className={`ui button ${this.powerMenuColor("Boost")}`}
            onClick={ () => this.setState({powerMenuSelection: "Boost"}) }
          >
            Spell Boost
          </button>

        </div> 


        <div className="PP6-general-action-area-container">

          {this.returnWhichActionAreaComponent()}

        </div>

      </div> //end div PP6-general-container

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
(PP6Hecate);

