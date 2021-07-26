import React from 'react';

import './PP1DetectiveChat.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import PP1NoPower from '../PP1NoPower.js';

import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';


//remember MissionTeam only gets reset in Phase 2, so it should not
//be reset yet. However, if disconnected and reconnect, for
//Detective Chat role, need to get Mission Team from server again

class PP1DetectiveChat extends React.Component {

  state = {

    usedPower: false,
    investigateTarget: "Investigate ?",
    XXNTarget: "Power2 ?",
    powerMenuSelection: "Investigate"

  };


  componentDidMount = () => {

  }; //end componentDidMount


  getXXNSelectionChoices = () => {

    var playerChoices = JSON.parse(JSON.stringify(this.props.playerList));


    var q = playerChoices.indexOf(this.props.myName);
    if (q > -1) { playerChoices.splice(q, 1); };


    var arrayOfOptions = playerChoices.map( (pName, index) => {

      return (
        <option value={pName} key={index}>{pName}</option>
      );

    });


    return arrayOfOptions;

  }; //end getSelectionChoices()


  submitXXNRequest = () => {

    if (this.state.XXNTarget == "Power2 ?") { return 0; };

    this.setState({usedPower: true});

    socket.emit("Send Cross Examination Request", this.state.XXNTarget);

    this.props.addSystemMessage(
      {
        type: "power",
        message: ("The trial begins! You decided to 'Cross Examine' "
          + this.state.XXNTarget + ". If he/she pleads 'Not Guilty' "
          + "to his/her crimes, then +5 to the mission team's "
          + "vote sum. However, a guilty plea results in -5 to the "
          + "mission vote sum! If " + this.state.XXNTarget
          + " is not selected for the mission team, then this power "
          + "has no effect.")  
      }
    );

  };



  getSelectionChoices = () => {

    const {missionTeam} = this.props;

    var investigateSelectOptionsArray = [];

    for (var i = 0; i < missionTeam.length; i++) {

      //don't want to have yourself as an option
      if (missionTeam[i] === this.props.myName) { continue; };

      investigateSelectOptionsArray.push(

         <option value={missionTeam[i]}>{missionTeam[i]}</option>

      ); //end if

    }; //end for

    return investigateSelectOptionsArray;

  };


  submitInvestigation = () => {

    if (this.state.investigateTarget !== "Investigate ?") {

      this.setState({usedPower: true});

      socket.emit("Investigate", this.state.investigateTarget);

    };

  }; //end submitInvestigation



  powerMenuColor = (power) => {

    if (power === this.state.powerMenuSelection) {
      return "yellow-color";
    };

    return "";

  };


  returnWhichPowerMenuButtons = () => {

    /*You cannot investigate anyone for Mission 1 since nobody has
    any voting history */
    if (this.props.missionNumber == 1) {

      return (

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Cross Examination</button>
        </div> 

      ); //end return

    }; //end if missionNumber == 1


    //nobody chosen is default; XXN can only be used once
    if (this.props.PH["Detective Chat"]
      ["Cross Examination Target"] !== "nobody chosen") {

      return (

        <button className="ui button">Investigate</button>

      ); //end return

    };


    return (

      <>

          <button 
            className={`ui button ${this.powerMenuColor("Investigate")}`}
            onClick={ () => this.setState({powerMenuSelection: "Investigate"}) }
          >
            Investigate
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("XXN")}`}
            onClick={ () => this.setState({powerMenuSelection: "XXN"}) }
          >
            XXN
          </button>

     </>
          
    ); //end return


  }; //end returnWhichPowerMenuButtons


  returnWhichActionAreaComponent = () => {

    if (this.state.powerMenuSelection == "Investigate"
      && this.props.missionNumber != 1) {

      return (

        <>

          <select 
            className="ui search dropdown"
            value={this.state.investigateTarget}
            onChange={e => this.setState({ investigateTarget: e.target.value })}
          >

            <option value="Investigate ?" disabled selected>Investigate</option>
            {this.getSelectionChoices()}

          </select>


          <button 
            className="ui yellow button"
            onClick={this.submitInvestigation}
          >
            Investigate!
          </button>

        </>


      ); //end return

    }; //end if powerMenuSelection == "Investigate"



    return (

      <>

        <select 
          className="ui search dropdown"
          value={this.state.XXNTarget}
          onChange={e => this.setState({ XXNTarget: e.target.value })}
        >

          <option value="Power2 ?" disabled selected>XXN</option>
          {this.getXXNSelectionChoices()}

        </select>


        <button 
          className="ui yellow button"
          onClick={this.submitXXNRequest}
        >
          Cross Exam!
        </button>

      </>

    ); //end return


  }; //end returnWhichActionAreaComponent()





  render() {

    if (this.state.usedPower) {

      return (

      <div className="PP1-Detective-Chat-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-investigate-container">
          You used your analytical and deductive abilities. Paired 
          with the might of the Enlustrian law, you are a powerful 
          foe to evil! Please wait {this.props.timer} seconds 
          for Game Phase 1 to end.
        </div>

      </div>

      ); //end return

    }; //end if usedPower


    return (

      <div className="PP1-Detective-Chat-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          
          {this.returnWhichPowerMenuButtons()}

        </div> 


        <div className="PP1-investigate-container">

          {this.returnWhichActionAreaComponent()}

        </div>


      </div> //end div 

    ); //end return


  }; //end render()



}; //end class Seer


const mapStateToProps = (state) => {
  
  return (
         {  
            PH: state.characterPowersHistory,
            myName: state.name,
            missionTeam: state.missionTeam,
            missionNumber: state.missionNumber,
            playerList: state.playerList,
            gamePhase: state.gamePhase,
            timer: state.timer,
         }
  );

};


export default connect(mapStateToProps, 
  {
    updatePower: updateCharacterPowerHistory,
    addSystemMessage: systemMessages,
  }
)
(PP1DetectiveChat);