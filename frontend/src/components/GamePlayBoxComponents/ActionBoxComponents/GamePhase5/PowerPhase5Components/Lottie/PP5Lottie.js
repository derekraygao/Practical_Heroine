import React from 'react';
import { connect } from 'react-redux';


import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import socket from 'Socket.js';
import formatArrayIntoString from 'formatArrayIntoString.js';

class PP5Lottie extends React.Component {

  state = {
            therapyTarget: "Therapy ?",
            powerMenuSelection: "Therapy",
            usedPower: false,
          };


  submitButtonTherapyClick = () => {

    if (this.state.therapyTarget !== "Therapy ?") {

      this.setState({usedPower: true});

      socket.emit("Add Therapy Target", this.state.therapyTarget);

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("You used therapy on " 
            + this.state.therapyTarget + ", giving him/her " 
            + "+3.5 mission voting power for the "
            + "next round only.")
        }
      ); //end addSystemMessage

    }; //end if

  }; //end submitButtonTherapyClick


  submitButtonGroupHugClick = () => {
  
    this.setState({usedPower: true});

    socket.emit("Use Group Hug");

    var groupHugTeam = JSON.parse(JSON.stringify(this.props.missionTeam));
    var q = groupHugTeam.indexOf(this.props.myName);
    if (q > -1) { groupHugTeam.splice(q, 1); };
    groupHugTeam.push("yourself");

    this.props.addSystemMessage(
      {
        type: "power",
        message: ("The positive energy from your Group Hug " 
        + "gives a +1.25 voting power boost to: " 
        + formatArrayIntoString(groupHugTeam) 
        + " for the next round only.")
      }
    ); //end addSystemMessage


  }; //end submitButtonGroupHugClick



  getSelectionChoices = () => {

    var playerChoices = JSON.parse(JSON.stringify(this.props.missionTeam));

    var q = playerChoices.indexOf(this.props.myName);

    if (q > -1) {
      playerChoices.splice(q, 1);
    };


    const allPlayerSelectOptions = playerChoices.map((pName, index) => {

      return (

        <option value={pName}>{pName}</option>

      ); //end return


    });

    return allPlayerSelectOptions;

  };


  powerMenuColor = (power) => {

    if (power === this.state.powerMenuSelection) {
      return "yellow-color";
    };

    return "";

  };



  returnWhichActionAreaComponent = () => {

    if (this.state.powerMenuSelection == "Therapy") {

      return (

        <>

          <select 
            className="ui search dropdown"
            value={this.state.therapyTarget}
            onChange={e => this.setState({ therapyTarget: e.target.value })}
          >

            <option value="Therapy ?" disabled selected>Therapy</option>
            {this.getSelectionChoices()}

          </select>


          <button
            className="ui button yellow PP5-margin-left"
            onClick={this.submitButtonTherapyClick}
          >
            Therapy!
          </button>


        </>

      ); //end return

    }; //end if powerMenuSelection == "Therapy"

    //Group Hug
    return (

      <>

        <button
          className="ui button yellow PP5-margin-left"
          onClick={this.submitButtonGroupHugClick}
        >
          Group Hug!
        </button>

      </>

    ); //end return

  }; //end returnWhichActionAreaComponent()




  render() {

    if (this.state.usedPower) {

      return (

        <div className="PP5-general-container">

          <div className="PP5-powers-menu-bar-container orange ui buttons">
            <button className="ui button"></button>
          </div> 

          <div className="PP5-general-action-area-container">
            Your pure heart empowers the mission team! 
            Please wait {this.props.timer} seconds for Game 
            Phase 5 to end.
          </div>

        </div>


      ); //end return

    }; //end usedPower



    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          
          <button 
            className={`ui button ${this.powerMenuColor("Therapy")}`}
            onClick={ () => this.setState({powerMenuSelection: "Therapy"}) }
          >
            Therapy
          </button>
          <button 
            className={`ui button ${this.powerMenuColor("Group Hug")}`}
            onClick={ () => this.setState({powerMenuSelection: "Group Hug"}) }
          >
            Group Hug
          </button>

        </div> 


        <div className="PP5-general-action-area-container">

          {this.returnWhichActionAreaComponent()}

        </div>

      </div> //end div PP5-general-container


    ); //end return

  }; //end render()



}; //end class PP5Lottie



const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            playerList: state.playerList,
            missionTeam: state.missionTeam,
            PH: state.characterPowersHistory,
            missionNumber: state.missionNumber,
            role: state.role,
            timer: state.timer
         }
  );

};


export default connect(mapStateToProps, 
  {
    updatePower: updateCharacterPowerHistory,
    addSystemMessage: systemMessages,
  }
)
(PP5Lottie);