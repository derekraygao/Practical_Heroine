import React from 'react';
import { connect } from 'react-redux';


import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';
import socket from 'Socket.js';


class PP5Scientist extends React.Component {


  state = {
            usedPower: false,
          };


  submitButtonClick = () => {

    this.setState({usedPower: true});

    socket.emit("Scientist Will Expose Everyone's Votes");

  };



  render() {

    if (this.state.usedPower) {

      return (

        <div className="PP5-general-container">

          <div className="PP5-powers-menu-bar-container orange ui buttons">
            <button className="ui button"></button>
          </div> 

          <div className="PP5-general-action-area-container">
            You have chosen to expose the individualized, 
            anonymized final voting power of every member on the 
            mission team! Please wait {this.props.timer} seconds 
            for Game Phase 5 to end.
          </div>

        </div>


      ); //end return

    }; //end if usedPower



    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          <button className="ui button">Dissertation Defense</button>
        </div> 

        <div className="PP5-general-action-area-container">

          <button
            className="ui button yellow"
            onClick={this.submitButtonClick}
          >
            Expose!
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
(PP5Scientist);