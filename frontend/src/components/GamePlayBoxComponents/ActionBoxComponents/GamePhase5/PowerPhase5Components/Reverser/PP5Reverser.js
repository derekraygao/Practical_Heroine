import React from 'react';
import { connect } from 'react-redux';


import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import socket from 'Socket.js';
import formatArrayIntoString from 'formatArrayIntoString.js';




class PP5Reverser extends React.Component {

  state = {
            reverseTarget: "Reverse ?",
            usedPower: false,
          };


  submitButtonClick = () => {

    if (this.state.reverseTarget !== "Reverse ?") {

      this.setState({usedPower: true});

      socket.emit("Reverse Vote", this.state.reverseTarget);

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("For this mission only, " 
          + this.state.reverseTarget 
          + "'s end voting power will be reversed!")
        }
      ); //end addSystemMessage

    }; //end if

  }; //end submitButtonClick()



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




  render() {

    if (this.state.usedPower) {

      return (

        <div className="PP5-general-container">

          <div className="PP5-powers-menu-bar-container orange ui buttons">
            <button className="ui button"></button>
          </div> 

          <div className="PP5-general-action-area-container">
            You will reverse {this.state.reverseTarget}'s end voting 
            power! Please wait {this.props.timer} seconds for 
            Game Phase 5 to end.
          </div>

        </div>


      ); //end return

    }; //end usedPower



    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          <button className="ui button">
            Reverse Vote
          </button>
        </div> 


        <div className="PP5-general-action-area-container">

          <select 
            className="ui search dropdown"
            value={this.state.reverseTarget}
            onChange={e => this.setState({ reverseTarget: e.target.value })}
          >

            <option value="Reverse ?" disabled selected>Reverse</option>
            {this.getSelectionChoices()}

          </select>


          <button
            className="ui button yellow PP5-margin-left"
            onClick={this.submitButtonClick}
          >
            Reverse!
          </button>


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
(PP5Reverser);