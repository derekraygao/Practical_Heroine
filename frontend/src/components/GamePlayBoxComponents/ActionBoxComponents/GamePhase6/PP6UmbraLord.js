import React from 'react';
import { connect } from 'react-redux';

import { systemMessages } from 'actions/systemMessages.js';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';

import socket from 'Socket.js';

import NormalMissionVoteButtons from './PowerPhase6Components/NormalMissionVoteButtons.js';
import PP6NoPower from './PP6NoPower.js';



class PP6UmbraLord extends React.Component {

  state = {
            powerMenuSelection: "Vote",
            usedBide: false,
            usedMeteor: false,
          };


  clickBide = () => {

    this.props.voted("Power");

    socket.emit("Charge Up Bide");

    socket.emit("Vote on Mission", "Bide");

  }; //end clickBide()


  clickMeteor = () => {

    this.setState({usedMeteor: true});

    socket.emit("Meteor Blast");

    this.props.addSystemMessage(

      {
        type: "power",
        message: "You summoned a terrifying meteor to "
        + "crash upon Azurea! Bide power reset to 0."
      }

    ); //end addSystemMessage


  }; //end clickMeteor


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

    if (!this.state.usedBide && !this.state.usedMeteor) {

      return (

        <>
          <button 
            className={`ui button ${this.powerMenuColor("Vote")}`}
            onClick={ () => this.setState({powerMenuSelection: "Vote"}) }
          >
            Vote
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Bide")}`}
            onClick={ () => this.setState({powerMenuSelection: "Bide"}) }
          >
            Bide
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Meteor")}`}
            onClick={ () => this.setState({powerMenuSelection: "Meteor"}) }
          >
            Meteor
          </button>  

        </>

      ); //end return

    }; //end if !usedBide && !usedMeteor


    if (this.state.usedMeteor) {

      return (

        <>

          <button 
            className={`ui button ${this.powerMenuColor("Vote")}`}
            onClick={ () => this.setState({powerMenuSelection: "Vote"}) }
          >
            Vote
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Meteor")}`}
            onClick={ () => this.setState({powerMenuSelection: "Meteor"}) }
          >
            Meteor
          </button>  

        </>
      

      ); //end return

    }; //end if this.state.usedMeteor


  }; //end returnPowerMenuButtons





  returnWhichActionAreaComponent = () => {

    if (this.state.powerMenuSelection == "Vote") {

        return (<NormalMissionVoteButtons voted={this.props.voted} />);

    };


    if (this.state.powerMenuSelection == "Meteor") {

      if (!this.state.usedMeteor) {

        return (

          <button 
            className="ui button red"
            onClick={this.clickMeteor}
          >
            Meteor
          </button>

        ); //end return
      
      }; //end if !this.state.usedMeteor


      return (

        <>  
          You've decided to unleash the overwhelming 
          dark mana you've been biding! Vote normally 
          with your new terrifying base voting power. 
          Bide count drops back to 0 after this round.
        </>

      ); //end return

    }; //end ifthis.state.powerMenuSelection == "Meteor" 


    /*If bide is used, then this entire function won't
    even be called, so no need to check if state.bide
    is true/false */
    if (this.state.powerMenuSelection == "Bide") {

      return (

        <button 
          className="ui button black"
          onClick={this.clickBide}
        >
          Bide
        </button>

      );

    };




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
(PP6UmbraLord);

