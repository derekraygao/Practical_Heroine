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
    usedPower: false,

  };


  componentDidMount = () => {


    socket.on("Luces' Message To Oracle", (oArray) => {

      var lucesMess = ("Luces: For '" + this.state.whichPowerSelection
        + "' : " + formatArrayIntoString(oArray));

      this.props.addSystemMessage({type: "power", message: lucesMess});

    });


  }; //end componentDidMount



  submitMessage = () => {


    if (this.state.whichPowerSelection !== "messages ?") {

      this.setState({ usedPower: true });

      this.props.updatePower(
        "Oracle", this.state.whichPowerSelection, true);

      socket.emit("Oracle Message", this.state.whichPowerSelection);

    };


  }; //end submitMessage


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



    if (!pH["Roles"]) {

      oracleSelectionArr.push(
        <option value="Roles">Roles</option>
      );

    }; //end if


    return oracleSelectionArr;

  };



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
          <button className="ui button">Luces' Messenger</button>
        </div> 


        <div className="PP1-luces-messenger-container">

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

        </div>


      </div> //end div Umbra-Lord-Container

    ); //end return


  }; //end render()



}; //end class Seer


const mapStateToProps = (state) => {
  
  return (
         { 
            PH: state.characterPowersHistory,
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