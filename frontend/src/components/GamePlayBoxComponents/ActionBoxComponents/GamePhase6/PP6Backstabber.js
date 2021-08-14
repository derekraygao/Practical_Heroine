import React from 'react';
import { connect } from 'react-redux';

import { systemMessages } from 'actions/systemMessages.js';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';

import socket from 'Socket.js';
import getArrayOfOnlyHeroes from 'getArrayOfOnlyHeroes.js';

import NormalMissionVoteButtons from './PowerPhase6Components/NormalMissionVoteButtons.js';
import PP6NoPower from './PP6NoPower.js';




class PP6Backstabber extends React.Component {

  state = {
            powerMenuSelection: "Vote",
            power1Target: "Power1 ?",
            power2Target: "Power2 ?",
          };



  clickButtonPower1 = () => {

    if (this.state.power1Target !== "Power1 ?") {

      socket.emit("Mark A Man", this.state.power1Target);

      socket.emit("Vote on Mission", "Power");

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("You put a bounty on " + 
            this.state.power1Target + ". "
            + "He/she is a marked man! If you "
            + "successfully assassinate him/her on "
            + "another mission, -5 to that mission's "
            + "vote sum.")
        }
      );

      this.props.voted("Power");

    };

  }; //end clickButtonPower1



  clickButtonPower2 = () => {

    if (this.state.power2Target !== "Power2 ?") {

      socket.emit("Assassinate!", this.state.power2Target);

      socket.emit("Vote on Mission", "Power");

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("You readied your shadow blades to "
            + "assassinate " + this.state.power2Target 
            + ". You will be notified if the assassination was "
            + "unsucessful. Otherwise, -5 to the mission team's "
            + "vote total/sum.")
        }
      );

      this.props.voted("Power");

    };

  }; //end clickButtonPower2


  /* no need to remove yourself, because Backstabber is a villain
  and thus won't appear in the hero list
  */
  getSelectionChoices = () => {

    var heroesList = getArrayOfOnlyHeroes(this.props.playerList, 
                                          this.props.villainList
                                         );

    var heroesOnTheMissionList = [];

    for (var i = 0; i < heroesList.length; i++) {

      if (this.props.missionTeam.includes(heroesList[i])) {
        heroesOnTheMissionList.push(heroesList[i]);
      };

    }; //end for

    var heroOptions = heroesOnTheMissionList.map( (pName, index) => {

      return (
        <option value={pName} key={index}>{pName}</option>
      );

    });


    return heroOptions;


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

    if (this.state.powerMenuSelection == "Mark") {

      return (

        <>

          <select 
            className="ui search dropdown"
            value={this.state.power1Target}
            onChange={e => this.setState({ power1Target: e.target.value })}
          >

            <option value="Power1 ?" disabled selected>Bounty</option>
            {this.getSelectionChoices()}

          </select>


          <button 
            className="ui button black"
            onClick={this.clickButtonPower1}
          >
            Mark!
          </button>

        </>

      ); //end return

    }; //end if == moonblast


    //powerMenuSelection == "Assassinate"
    return (
      <>

        <select 
          className="ui search dropdown"
          value={this.state.power2Target}
          onChange={e => this.setState({ power2Target: e.target.value })}
        >

          <option value="Power2 ?" disabled selected>Assassinate</option>
          {this.getSelectionChoices()}

        </select>

        <button 
          className="ui button red"
          onClick={this.clickButtonPower2}
        >
          Assassinate!
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
            className={`ui button ${this.powerMenuColor("Mark")}`}
            onClick={ () => this.setState({powerMenuSelection: "Mark"}) }
          >
            Bounty
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Assassinate")}`}
            onClick={ () => this.setState({powerMenuSelection: "Assassinate"}) }
          >
            Assassinate
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
(PP6Backstabber);

