import React from 'react';

import './PP1Reverser.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import socket from 'Socket.js';
import PP1NoPower from '../PP1NoPower.js';

class PP1Reverser extends React.Component {

  state = {

    powerUsed: false,

  };


  componentDidMount = () => {


  }; //end componentDidMount


  submitMirrorWorldNormal = () => {

    this.setState({powerUsed: true}, () => {

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("For Mission " + this.props.missionNumber 
          + ", you activated Mirror World: Normal")
        }
      );

    });

    this.props.updatePower("Reverser", "mirrorWorldNormal", true);

    socket.emit("Activate Mirror World", "Normal");

  };


  submitMirrorWorldReverse = () => {

    this.setState({powerUsed: true}, () => {

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("For Mission " + this.props.missionNumber 
          + ", you activated Mirror World: Reverse")
        }
      );

    });

    this.props.updatePower("Reverser", "mirrorWorldReverse", true);

    socket.emit("Activate Mirror World", "Reverse");

  };



  getMirrorWorldButtons = () => {

    var mirrorWorldButtons = [];

    if (!this.props.PH["Reverser"]["mirrorWorldNormal"]) {

      mirrorWorldButtons.push(
        <button className="ui yellow button" onClick={this.submitMirrorWorldNormal}>Normal MW</button>
      );

    };

    if (!this.props.PH["Reverser"]["mirrorWorldReverse"]) {
      
      mirrorWorldButtons.push(
        <button className="ui yellow button" onClick={this.submitMirrorWorldReverse}>Reverse MW</button>
      );

    };

    return mirrorWorldButtons;

  };


  render() {

    if (this.props.PH["Reverser"]["mirrorWorldReverse"] &&
      this.props.PH["Reverser"]["mirrorWorldNormal"]) {
      return <PP1NoPower />;
    };


    if (this.state.powerUsed) {

      return (

      <div className="PP1-Reverser-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-mirror-world-container">
          You activated Mirror World! Remember, only you know which type 
          was activated (reversed or normal). Please wait {this.props.timer} 
          &nbsp;seconds for Game Phase 1 to end.
        </div>

      </div>

      ); //end return

    }; //end if corruption !==



    return (

      <div className="PP1-Reverser-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Mirror World</button>
        </div> 


        <div className="PP1-mirror-world-container">

          {this.getMirrorWorldButtons()}

        </div>


      </div> //end div PP1-Reverser-Container

    ); //end return


  }; //end render()



}; //end class PP1Reverser


const mapStateToProps = (state) => {
  
  return (
         {  
            PH: state.characterPowersHistory,
            missionNumber: state.missionNumber,
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
(PP1Reverser);