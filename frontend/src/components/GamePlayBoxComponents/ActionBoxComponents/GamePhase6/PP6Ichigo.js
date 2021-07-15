import React from 'react';
import { connect } from 'react-redux';

import { systemMessages } from 'actions/systemMessages.js';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';

import socket from 'Socket.js';

import NormalMissionVoteButtons from './PowerPhase6Components/NormalMissionVoteButtons.js';
import PP6NoPower from './PP6NoPower.js';



class PP6Ichigo extends React.Component {

  state = {
            powerMenuSelection: "Vote",
          };


  clickShield = () => {
    //for now, shield is unlimited use
    //this.props.updatePower("Ichigo", "shield", true);

    this.props.voted("Power");

    socket.emit("Activate Hylian Shield");

    socket.emit("Vote on Mission", "Power");

  }; //end clickShield()


  clickStrike = () => {

    this.props.updatePower("Ichigo", "strike", true);

    this.props.voted("Power");

    socket.emit("Activate Holy Strike");

    socket.emit("Vote on Mission", "Power");

    this.props.addSystemMessage(

      {
        type: "power",
        message: "You attacked with the holy daggers: "
        + "Protekis & Sanctis. For this turn only, "
        + "your end vote power will always be +4, "
        + "disregarding all other status effects."
      }

    ); //end addSystemMessage



  }; //end clickStrike


  powerMenuColor = (power) => {

    if (power === this.state.powerMenuSelection) {
      return "yellow-color";
    };

    return "";

  };


  /*if both shield & strike are used, this function won't activate
  because PP6NoPower will be returned
  */
  returnPowerMenuButtons = () => {

    var shield = this.props.PH["Ichigo"].shield;
    var strike = this.props.PH["Ichigo"].strike;


    if (!shield && !strike) {

      return (

        <>
          <button 
            className={`ui button ${this.powerMenuColor("Vote")}`}
            onClick={ () => this.setState({powerMenuSelection: "Vote"}) }
          >
            Vote
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Holy Strike")}`}
            onClick={ () => this.setState({powerMenuSelection: "Holy Strike"}) }
          >
            Holy Strike
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Hylian Shield")}`}
            onClick={ () => this.setState({powerMenuSelection: "Hylian Shield"}) }
          >
            Hylian Shield
          </button>  

        </>

      ); //end return

    }; //end if !shield && !strike

    //strike used, shield not yet
    if (!shield && strike) {

      return (

        <>
          <button 
            className={`ui button ${this.powerMenuColor("Vote")}`}
            onClick={ () => this.setState({powerMenuSelection: "Vote"}) }
          >
            Vote
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Hylian Shield")}`}
            onClick={ () => this.setState({powerMenuSelection: "Hylian Shield"}) }
          >
            Hylian Shield
          </button>  

        </>

      );

    }; //end if !shield && strike


    return (

        <>
          <button 
            className={`ui button ${this.powerMenuColor("Vote")}`}
            onClick={ () => this.setState({powerMenuSelection: "Vote"}) }
          >
            Vote
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Holy Strike")}`}
            onClick={ () => this.setState({powerMenuSelection: "Holy Strike"}) }
          >
            Holy Strike
          </button>

        </>

    ); //end return


  }; //end returnPowerMenuButtons





  returnWhichActionAreaComponent = () => {

    if (this.state.powerMenuSelection == "Vote") {

        return (<NormalMissionVoteButtons voted={this.props.voted} />);

    };


    if (this.state.powerMenuSelection == "Holy Strike"
      && !this.props.PH["Ichigo"].strike) {

      return (

        <button 
          className="ui button green"
          onClick={this.clickStrike}
        >
          Holy Strike!
        </button>

      );

    };



    return (

      <button 
        className="ui button green"
        onClick={this.clickShield}
      >
        Hylian Shield
      </button>

    );


  }; //end returnWhichActionAreaComponent



  render() {

    var shield = this.props.PH["Ichigo"].shield;
    var strike = this.props.PH["Ichigo"].strike;

    if (shield && strike) {
      return <PP6NoPower voted={this.props.voted} />;
    };


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
(PP6Ichigo);

