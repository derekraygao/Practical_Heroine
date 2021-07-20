import React from 'react';

import './PP1Esper.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import formatArrayIntoString from 'formatArrayIntoString.js';
import {calculateNumberofTeamMembers} from 'calculateNumberofTeamMembers.js';

import socket from 'Socket.js';
import PP1NoPower from '../PP1NoPower.js';


class PP1Esper extends React.Component {

  state = {

    usedPower: false,
    telepathyArray: [],
    powerMenuSelection: "Telepathy",

  };


  componentDidMount = () => {


  }; //end componentDidMount


  submitTelepathyChoices = () => {

    var maxTelepathySize = (calculateNumberofTeamMembers(
        this.props.missionNumber, this.props.playerList.length) + 1);

    if (this.state.telepathyArray.length >= 2 &&
        this.state.telepathyArray.length <= maxTelepathySize) {

      this.setState({usedPower: true});

      socket.emit("Telepathy Choices", this.state.telepathyArray);

    }; //end if

  }; //end submitTelepathyChoices



  submitHeadacheCharge = () => {

    socket.emit("Headache Charge");

    this.setState({usedPower: true});

  }; //end submitHeadacheCharge



  onTelepathyButtonClick = (_name) => {

    console.log(_name);

    var tArr = this.state.telepathyArray;
    
    var q = tArr.indexOf(_name);

    if (q > -1) {

      tArr.splice(q, 1);

      this.setState({telepathyArray: tArr});

      return 0;

    };

    if (tArr.length >= (calculateNumberofTeamMembers(
      this.props.missionNumber, this.props.playerList.length) + 1)) {

      tArr.shift();

    };


    tArr.push(_name);

    console.log(tArr);

    this.setState({telepathyArray: tArr});

  }; //end onButtonClick



  telepathyButtonColor = (_name) => {

    var tempArr = this.state.telepathyArray;

    if (tempArr.includes(_name)) {

      return "yellow";

    };

    return "teal";

  };


  powerMenuColor = (power) => {

    if (power === this.state.powerMenuSelection) {
      return "yellow-color";
    };

    return "";

  };


  /* Doesn't work, problem passing in variable name to onClick
  getTelepathyChoices = () => {

    var pList = this.props.playerList;
    var telepathyButtonsArr = [];
    var tempName = "";

    for (var i = 0; i < pList.length; i++) {

      if (pList[i] === this.props.myName) { continue; };

      tempName = pList[i];
      telepathyButtonsArr.push(

        <button 
          className={`ui ${this.telepathyButtonColor(tempName)} button`}
          onClick={ () => {this.onTelepathyButtonClick(tempName) } }
        >
          {pList[i]}
        </button>

      ); //end telepathyButtonsArr.push()

    }; //end for


    return telepathyButtonsArr;

  }; //end getTelepathyChoices
  */

  getTelepathyButtonChoices = () => {

    var choicesArr = JSON.parse(JSON.stringify(this.props.playerList));

    //remove yourself; cannot use yourself to 
    var q = choicesArr.indexOf(this.props.myName);
    if (q > -1) { choicesArr.splice(q, 1); };

    var telepathyChoices = choicesArr.map((_name, index) => {

      return (

        <button 
          className={`ui ${this.telepathyButtonColor(_name)} button`}
          onClick={ () => {this.onTelepathyButtonClick(_name)} }
        >
          {_name}
        </button>

      ); //end return


    });

    return telepathyChoices;

  }; //end getTelepathyButtonChoices()









  whichPowerBoxToShow = () => {

    if (this.state.powerMenuSelection === "Telepathy") {

      return (
        <div className="PP1-esper-telepathy-container">

          <div className="PP1-telepath-max-number-text-container">
            Minimum 2, Maximum {(calculateNumberofTeamMembers(this.props.missionNumber, this.props.playerList.length) + 1)} Connections
          </div>

          <div className="PP1-telepath-buttons-container">

            {this.getTelepathyButtonChoices()}

            <button className="ui button blue" onClick={this.submitTelepathyChoices}>Submit</button>
          
          </div>

        </div> //end esper-telepathy-container
      );

    }; //end if

    return (

      <div className="PP1-esper-headache-container">

        <button className="ui button teal" onClick={this.submitHeadacheCharge}>Headache Charge!</button>

      </div>

    ); //end return

  }; //end whichPowerBoxToShow


  render() {

    if (this.props.missionNumber === 7) {
      return <PP1NoPower />;
    };


    if (this.state.usedPower) {

      return (

      <div className="PP1-Esper-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-esper-headache-container">
          You manifested your psychic abilities!  
          Please wait {this.props.timer} seconds for Game 
          Phase 1 to end.
        </div>

      </div>

      ); //end return

    }; //end if usedPower


    return (

      <div className="PP1-Esper-Container">

        <div className="powers-menu-bar-container orange ui buttons">

          <button 
            className={ `ui button ${this.powerMenuColor("Telepathy")}` }
            onClick={ () => { this.setState({powerMenuSelection: "Telepathy"}); } }
          >
            Telepathy
          </button>

          <button 
            className={ `ui button ${this.powerMenuColor("Headache")}` }
            onClick={ () => { this.setState({powerMenuSelection: "Headache"}); } }
          >
            Headache
          </button>

        </div> 


        {this.whichPowerBoxToShow()}

      
      </div> //end div PP1-Esper-Container

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
(PP1Esper);