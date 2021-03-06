import React from 'react';

import './PP1Oracle.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';

class PP1Oracle extends React.Component {

  state = {

    whichPowerSelection: "messages ?",
    LDTarget: "Player ?",
    powerMenuSelection: "Luces' Messages",
    usedPower: false,

  };


  componentDidMount = () => {


  }; //end componentDidMount



  submitMessage = () => {


    if (this.state.whichPowerSelection !== "messages ?") {

      this.setState({ usedPower: true });

      this.props.updatePower(
        "Oracle", this.state.whichPowerSelection, true);

      socket.emit("Oracle Message", this.state.whichPowerSelection);

    };


  }; //end submitMessage


  submitPlayerForLD = () => {

    if (this.state.LDTarget == "Player ?") { return 0; };

    this.setState({usedPower: true});

    socket.emit("Oracle: Light and Dark Power", this.state.LDTarget);


    var usedPHArray = this.props.PH["Oracle"]["LightAndDarkUsedArray"];
    usedPHArray.push(this.state.LDTarget);

    this.props.updatePower("Oracle", "LightAndDarkUsedArray", usedPHArray);

  }; //end submitPlayerForLD



  getOracleSelectionChoices = () => {

    var pH = this.props.PH["Oracle"];

    var oracleSelectionArr = [];

    //false means not used, true means used already
    if (!pH["1 and 1"]) {

      oracleSelectionArr.push(
        <option value="1 and 1">1 and 1</option>
      );

    }; //end if


    if (!pH["At Least 1 Good"]) {

      oracleSelectionArr.push(
        <option value="At Least 1 Good">At Least 1 Good</option>
      );

    }; //end if



    if (!pH["At Least 1 Evil and Good"]) {

      oracleSelectionArr.push(
        <option value="At Least 1 Evil and Good">
          At Least 1 Evil and Good
        </option>
      );

    }; //end if



    if (!pH["Princess"]) {

      oracleSelectionArr.push(
        <option value="Princess">Princess</option>
      );

    }; //end if


    /* this power was replaced with light & dark
    if (!pH["Roles"]) {

      oracleSelectionArr.push(
        <option value="Roles">Roles</option>
      );

    }; //end if
    */

    return oracleSelectionArr;

  };


  getSelectionChoices = () => {

    var playerChoices = JSON.parse(JSON.stringify(this.props.playerList));

    var q = playerChoices.indexOf(this.props.myName);

    if (q > -1) {
      playerChoices.splice(q, 1);
    };

    //cannot check person twice
    var ldArr = this.props.PH["Oracle"]["LightAndDarkUsedArray"];

    for (var i = 0; i < ldArr.length; i++) {

      q = playerChoices.indexOf(ldArr[i]);

      if (q > -1) { playerChoices.splice(q, 1); };

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

    if (this.state.powerMenuSelection == "Luces' Messages") {

      return (

        <>

          <select 
            className="ui search dropdown"
            value={this.state.whichPowerSelection}
            onChange={e => this.setState({ whichPowerSelection: e.target.value })}
          >

            <option value="messages ?" disabled selected>Messages</option>
            {this.getOracleSelectionChoices()}

          </select>


          <button 
            className="ui yellow button"
            onClick={this.submitMessage}
          >
            Message!
          </button>

        </>

      ); //end return

    }; //end if powerMenuSelection == "Luces' Messages"



    return (

      <>

          <select 
            className="ui search dropdown"
            value={this.state.LDTarget}
            onChange={e => this.setState({ LDTarget: e.target.value })}
          >

            <option value="Player ?" disabled selected>Players</option>
            {this.getSelectionChoices()}

          </select>


          <button 
            className="ui yellow button"
            onClick={this.submitPlayerForLD}
          >
            Vaticinate!
          </button>


      </>

    ); //end return


  }; //end returnWhichActionAreaComponent()



  render() {

    if (this.state.usedPower) {

      return (

      <div className="PP1-Oracle-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-luces-messenger-container">
          The Luces answered your prayers! May the Aether be with you. 
          Please wait {this.props.timer} seconds for Game 
          Phase 1 to end.
        </div>

      </div>

      ); //end return

    }; //end if usedPower




    return (

      <div className="PP1-Oracle-Container">

        <div className="powers-menu-bar-container orange ui buttons">

          <button 
            className={`ui button ${this.powerMenuColor("Luces' Messages")}`}
            onClick={ () => this.setState({powerMenuSelection: "Luces' Messages"}) }
          >
            Luces' Messenger
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Light & Dark")}`}
            onClick={ () => this.setState({powerMenuSelection: "Light & Dark"}) }
          >
            Light & Dark
          </button>

        </div> 


        <div className="PP1-luces-messenger-container">

          {this.returnWhichActionAreaComponent()}

        </div>


      </div> //end div Umbra-Lord-Container

    ); //end return


  }; //end render()



}; //end class Seer


const mapStateToProps = (state) => {
  
  return (
         { 
            PH: state.characterPowersHistory,
            myName: state.name,
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
(PP1Oracle);