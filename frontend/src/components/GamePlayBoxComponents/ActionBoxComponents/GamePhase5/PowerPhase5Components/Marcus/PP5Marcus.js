import React from 'react';
import { connect } from 'react-redux';


import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';
import socket from 'Socket.js';


class PP5Marcus extends React.Component {



  submitButtonClick = () => {

    this.props.updatePower("Marcus", 
                           "berserkMissionNo", 
                           this.props.missionNumber
                          );

    socket.emit("Activate Berserk");

    this.props.addSystemMessage(
      {
        type: "power",
        message: ("You activated Berserk during Mission "
        + this.props.missionNumber + ".")
      }
    );
    

  };




  render() {

    if (this.props.PH["Marcus"].berserkMissionNo !== 0) {

      return (

        <div className="PP5-general-container">

          <div className="PP5-powers-menu-bar-container orange ui buttons">
            <button className="ui button"></button>
          </div> 

          <div className="PP5-general-action-area-container">
            You used the one-time terrifying Dark elemental 
            ability of "Berserk" during Mission  
            &nbsp;{this.props.PH["Marcus"].berserkMissionNo}. 
            Please wait {this.props.timer} seconds for Game 
            Phase 5 to end.
          </div>

        </div>


      ); //end return

    }; //end if PH.berserk = true



    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          <button className="ui button">Berserk</button>
        </div> 

        <div className="PP5-general-action-area-container">

          <button
            className="ui button yellow"
            onClick={this.submitButtonClick}
          >
            Berserk!
          </button>

        </div>

      </div>


    ); //end return

  }; //end render()



}; //end class PP5Marcus



const mapStateToProps = (state) => {
  
  return (
         {  
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
(PP5Marcus);