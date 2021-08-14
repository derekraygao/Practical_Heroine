import React from 'react';
import { connect } from 'react-redux';


import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import socket from 'Socket.js';
import formatArrayIntoString from 'formatArrayIntoString.js';




class PP5BabyDoll extends React.Component {

  state = {
            usedPower: false,
          };


  submitButtonClick = () => {

      this.setState({usedPower: true});

      socket.emit("Activate Lullaby");

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("The power of your lullaby " 
            + "saps the strength from Mission " 
            + this.props.missionNumber 
            + "'s team.")
        }
      ); //end addSystemMessage


  }; //end submitButtonClick




  render() {

    if (this.state.usedPower) {

      return (

        <div className="PP5-general-container">

          <div className="PP5-powers-menu-bar-container orange ui buttons">
            <button className="ui button"></button>
          </div> 

          <div className="PP5-general-action-area-container">
            Your sweet lullaby tires out the mission team! 
            Please wait {this.props.timer} seconds for Game 
            Phase 5 to end.
          </div>

        </div>


      ); //end return

    }; //end usedPower



    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          
          <button className="ui button">Lullaby</button>

        </div> 


        <div className="PP5-general-action-area-container">

          <button
            className="ui button yellow PP5-margin-left"
            onClick={this.submitButtonClick}
          >
            Lullaby!
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
(PP5BabyDoll);