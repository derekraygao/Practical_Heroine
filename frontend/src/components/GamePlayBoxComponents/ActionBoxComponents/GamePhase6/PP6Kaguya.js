import React from 'react';
import { connect } from 'react-redux';

import { systemMessages } from 'actions/systemMessages.js';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';

import socket from 'Socket.js';
import getArrayOfOnlyHeroes from 'getArrayOfOnlyHeroes.js';

import NormalMissionVoteButtons from './PowerPhase6Components/NormalMissionVoteButtons.js';
import PP6NoPower from './PP6NoPower.js';




class PP6Kaguya extends React.Component {

  state = {
            powerMenuSelection: "Vote",
            charmTarget: "Charm ?",
          };



  clickButtonCharm = () => {

    if (this.state.charmTarget !== "Charm ?") {

      socket.emit("Use Sweet Charm", this.state.charmTarget);

      socket.emit("Vote on Mission", "Sweet Charm");

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("Kaguya's celestial appearance entrances "
            + this.state.charmTarget + ". Starting next mission "
            + "round, whenever Kaguya & " + this.state.charmTarget
            + " are on the mission team together, there is a "
            + "67% chance that " + this.state.charmTarget 
            + "'s final voting power will be reversed!")
        }
      );

      this.props.voted("Power");

    };

  }; //end clickButtonCharm



  clickButtonMoonblast = () => {

    socket.emit("Activate Moonblast");

    socket.emit("Vote on Mission", "Power");

    this.props.voted("Power");

  }; //end clickButtonMoonblast


  /* no need to remove yourself, because Kaguya is a villain
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

    if (this.state.powerMenuSelection == "Moonblast") {

      return (

        <button 
          className="ui button pink"
          onClick={this.clickButtonMoonblast}
        >
          Moonblast!
        </button>


      ); //end return

    }; //end if == moonblast


    //powerMenuSelection == "Charm"
    return (
      <>

        <select 
          className="ui search dropdown"
          value={this.state.charmTarget}
          onChange={e => this.setState({ charmTarget: e.target.value })}
        >

          <option value="Charm ?" disabled selected>Sweet Charm</option>
          {this.getSelectionChoices()}

        </select>

        <button 
          className="ui button pink"
          onClick={this.clickButtonCharm}
        >
          Entrance!
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
            className={`ui button ${this.powerMenuColor("Charm")}`}
            onClick={ () => this.setState({powerMenuSelection: "Charm"}) }
          >
            Sweet Charm
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Moonblast")}`}
            onClick={ () => this.setState({powerMenuSelection: "Moonblast"}) }
          >
            Moonblast
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
(PP6Kaguya);

