import React from 'react';
import { connect } from 'react-redux';


import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import socket from 'Socket.js';
import formatArrayIntoString from 'formatArrayIntoString.js';



class PP5NotSelectedForMissionPersequor extends React.Component {

  state = {
            usedPower: false,
          };



  submitButtonPower1 = () => {

      this.setState({usedPower: true});

      socket.emit("Activate Identity Theft");

      this.props.addSystemMessage(
        {
         type: "power",
         message: "No matter how real, eventually the dream must end. Like a reflection - outwardly the same as reality, but in its truest nature, an illusion. You will steal the identity of a random hero for the next mission round only!"
        }
      );

  }; //end submitButtonPower1




  returnWhichActionAreaComponent = () => {

    return (

      <>

        <button
          className="ui button yellow PP5-margin-left"
          onClick={this.submitButtonPower1}
        >
          Steal Identity!
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
            Wait {this.props.timer} seconds 
            until {this.props.teamLeader}'s 
            team ({formatArrayIntoString(this.props.missionTeam)}) 
            completes the mission.
          </div>

        </div>


      ); //end return

    }; //end usedPower



    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          <button className="ui button">Identity Theft</button>
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
            teamLeader: state.teamLeader,
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
(PP5NotSelectedForMissionPersequor);