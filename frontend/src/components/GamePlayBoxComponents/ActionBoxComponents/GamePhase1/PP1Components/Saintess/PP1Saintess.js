import React from 'react';

import './PP1Saintess.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';


class PP1Saintess extends React.Component {

  state = {

    usedPower: false,
    powerSelection: "Power ?",
    powerTarget: "Target ?",
    powerMenuSelection: "Holy Powers",

  };


  componentDidMount = () => {


  }; //end componentDidMount




  getSelectionChoices = () => {

    var holyList = JSON.parse(JSON.stringify(this.props.playerList));

    var q = holyList.indexOf(this.props.myName);

    if (q > -1) {
      holyList.splice(q, 1);
    };


    const allPlayerSelectOptions = holyList.map((pName, index) => {

      return (

        <option value={pName}>{pName}</option>

      ); //end return


    });

    return allPlayerSelectOptions;

  };


  getPlayerSelectionChoices = () => {

    return (

      <select 
        className="ui search dropdown"
        value={this.state.powerTarget}
        onChange={e => this.setState({ powerTarget: e.target.value })}
      >

        <option value="Target ?" disabled selected>Player</option>
        {this.getSelectionChoices()}

      </select>    


    ); //end return

  }; //end getPlayerSelectionChoices


  getHolyPowerSelectionChoices() {

    return (

      <select 
        className="ui search dropdown"
        value={this.state.powerSelection}
        onChange={e => this.setState({ powerSelection: e.target.value })}
      >

        <option value="Power ?" disabled selected>Holy Light</option>
        <option value="Purify">Purify</option>
        <option value="Esuna">Esuna</option>
        <option value="Curaga">Curaga</option>
        <option value="Dispel">Dispel</option>
        <option value="Bless">Bless</option>
        <option value="Safeguard">Safeguard</option>

      </select>

    ); //end return

  }; //end getHolyPowerSelectionChoices()


  getStatusButtonColor = (status) => {

    return (status ? "green" : "red");

  };


  getSenseButtons = () => {

    var senseButtons = this.props.PH["Saintess"].senseArray.map((obj, index) => {

      return (

        <button 
          className={`ui ${this.getStatusButtonColor(obj.isStatusNormal)} button`}
        >
          {obj.name}
        </button>

      );


    });


    return senseButtons;


  }; //end getSenseButtons




  submitHolyPower = () => {

    if (this.state.powerTarget !== "Target ?"
      && this.state.powerSelection !== "Power ?") {

      this.setState({usedPower: true});

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("For Mission " + this.props.missionNumber
            + ", you used '" + this.state.powerSelection + "' on " 
            + this.state.powerTarget + ".")
        }
      ); 

      socket.emit("Use Saintess Holy Powers", 
        {power: this.state.powerSelection, target: this.state.powerTarget}
      );


    }; //end if


  }; //end submitHolyPower


  onPowerMenuClick(menu) {

    this.setState({powerMenuSelection: menu});

  };


  powerMenuColor = (power) => {

    if (power === this.state.powerMenuSelection) {
      return "yellow-color";
    };

    return "";

  };


  whichPowerBoxToShow = () => {

    if (this.props.missionNumber == 1) {

      return (

        <div className="PP1-Saintess-Container">

          <div className="powers-menu-bar-container orange ui buttons">
            <button className="ui button">Holy Powers</button>
          </div> 

          <div className="PP1-holy-powers-container">

            {this.getHolyPowerSelectionChoices()}

            {this.getPlayerSelectionChoices()}

            <button 
              className="ui yellow button"
              onClick={this.submitHolyPower}
            >
              Radiate!
            </button>

          </div> 

        </div> //end div Saintess Container

      ); //end return


    }; //end if missionNumber == 1



    if (this.state.powerMenuSelection == "Holy Powers") {

      return (

        <div className="PP1-Saintess-Container">

          <div className="powers-menu-bar-container orange ui buttons">
            <button className={`ui button ${this.powerMenuColor("Holy Powers")}`} onClick={ () => this.onPowerMenuClick("Holy Powers")}>Holy Powers</button>
            <button className={`ui button ${this.powerMenuColor("Sense")}`} onClick={ () => this.onPowerMenuClick("Sense")}>Sense</button>
          </div> 

          <div className="PP1-holy-powers-container">

            {this.getHolyPowerSelectionChoices()}

            {this.getPlayerSelectionChoices()}

            <button 
              className="ui yellow button"
              onClick={this.submitHolyPower}
            >
              Radiate!
            </button>

          </div> 

        </div> //end div Saintess Container

      ); //end return


    }; //end if state.powerMenuSelection == "Holy Powers"




    if (this.state.powerMenuSelection == "Sense") {

      return (

        <div className="PP1-Saintess-Container">

          <div className="powers-menu-bar-container orange ui buttons">
            <button className={`ui button ${this.powerMenuColor("Holy Powers")}`} onClick={ () => this.onPowerMenuClick("Holy Powers")}>Holy Powers</button>
            <button className={`ui button ${this.powerMenuColor("Sense")}`} onClick={ () => this.onPowerMenuClick("Sense")}>Sense</button>
          </div> 

          <div className="PP1-holy-powers-container">

            {this.getSenseButtons()}

          </div> 

        </div> //end div Saintess Container

      ); //end return


    }; //end if state.powerMenuSelection == "Holy Powers"



  }; //end whichPowerBoxToShow





  render() {

    if (this.state.usedPower) {

      return (

      <div className="PP1-Saintess-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-holy-powers-container">
          Your light magic ({this.state.powerSelection}) imparted 
          the Luces' blessings to {this.state.powerTarget}. Please 
          wait {this.props.timer} seconds for Game Phase 1 
          to end.
        </div>

      </div>

      ); //end return

    }; //end if usedPower


    return (

      this.whichPowerBoxToShow()

    ); //end return


  }; //end render()



}; //end class Seer


const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            PH: state.characterPowersHistory,
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
(PP1Saintess);