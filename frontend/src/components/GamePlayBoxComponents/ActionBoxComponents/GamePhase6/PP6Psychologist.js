import React from 'react';
import { connect } from 'react-redux';

import { systemMessages } from 'actions/systemMessages.js';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';

import socket from 'Socket.js';

import NormalMissionVoteButtons from './PowerPhase6Components/NormalMissionVoteButtons.js';



class PP6Psychologist extends React.Component {

  state = {
            powerMenuSelection: "Vote",
            usedPower1: false,
          };


  clickTruthBomb= () => {

    this.setState({usedPower1: true});

    socket.emit("Use Truth Bomb");

  }; //end clickBide()



  powerMenuColor = (power) => {

    if (power === this.state.powerMenuSelection) {
      return "yellow-color";
    };

    return "";

  };


  /*no need for what happens if usedBide because this function
  does not activate since bide is same as having voted
  */
  returnPowerMenuButtons = () => {

    if (!this.state.usedPower1) {

      return (

        <>
          <button 
            className={`ui button ${this.powerMenuColor("Vote")}`}
            onClick={ () => this.setState({powerMenuSelection: "Vote"}) }
          >
            Vote
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Truth Bomb")}`}
            onClick={ () => this.setState({powerMenuSelection: "Truth Bomb"}) }
          >
            Truth Bomb
          </button>

        </>

      ); //end return

    }; //end if !usedBide && !usedMeteor



    /*activated truth bomb */
    return (

        <button className="ui button">Vote</button>

    ); //end return



  }; //end returnPowerMenuButtons





  returnWhichActionAreaComponent = () => {

    if (this.state.powerMenuSelection == "Vote" || this.state.usedPower1) {

        return (<NormalMissionVoteButtons voted={this.props.voted} />);

    };


    return (

      <button 
        className="ui button yellow"
        onClick={this.clickTruthBomb}
      >
        Free!
      </button>

    );


  }; //end returnWhichActionAreaComponent



  render() {

    return (

      <div className="PP6-general-container">

        <div className="PP6-powers-menu-bar-container orange ui buttons">
          
          {this.returnPowerMenuButtons()}

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
(PP6Psychologist);

