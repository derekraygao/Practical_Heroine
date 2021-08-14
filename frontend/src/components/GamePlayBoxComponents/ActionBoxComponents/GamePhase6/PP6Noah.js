import React from 'react';
import { connect } from 'react-redux';

import { systemMessages } from 'actions/systemMessages.js';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';

import socket from 'Socket.js';
import getArrayOfOnlyHeroes from 'getArrayOfOnlyHeroes.js';

import NormalMissionVoteButtons from './PowerPhase6Components/NormalMissionVoteButtons.js';
import PP6NoPower from './PP6NoPower.js';



class PP6Noah extends React.Component {

  state = {
            powerMenuSelection: "Vote",
            nightmareTarget: "Nightmare ?",
          };



  clickButton = () => {

    if (this.state.nightmareTarget !== "Nightmare ?") {

      socket.emit("Cast Nightmare Syndrome", this.state.nightmareTarget);

      socket.emit("Vote on Mission", "Nightmare Syndrome");

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("During Mission " + this.props.missionNumber 
            + ", your Nightmare Syndrome infected " 
            + this.state.nightmareTarget 
            + ", turning him/her into a zombie! His/her "
            + "base mission voting power will be reversed "
            + "until he/she is healed from the 'Zombie' status.")
        }
      );

      this.props.voted("Power");


    };

  }; //end clickStrike


  /*don't need to remove self because it array only includes
  heroes and Noah is a villain
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


    return (
      <>

        <select 
          className="ui search dropdown"
          value={this.state.nightmareTarget}
          onChange={e => this.setState({ nightmareTarget: e.target.value })}
        >

          <option value="Nightmare ?" disabled selected>Nightmare Syndrome</option>
          {this.getSelectionChoices()}

        </select>

        <button 
          className="ui button yellow"
          onClick={this.clickButton}
        >
          Zombify!
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
            className={`ui button ${this.powerMenuColor("Nightmare Syndrome")}`}
            onClick={ () => this.setState({powerMenuSelection: "Nightmare Syndrome"}) }
          >
            Nightmare Syndrome
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
(PP6Noah);

