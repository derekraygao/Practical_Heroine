import React from 'react';

import './PP1Ranger.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import socket from 'Socket.js';
import PP1NoPower from '../PP1NoPower.js';

class PP1Ranger extends React.Component {

  state = {

    senseArray: [],

  };


  componentDidMount = () => {

    //senseArray = [{name: "John", status: either "status" or "no status"}];

  }; //end componentDidMount


  statusButtonColor = (senseObj) => {

    if (senseObj.status == "status") {
      return "red";
    };

    return "";

  };


  statusButtonText = (senseObj) => {

    if (senseObj.status == "status") {
      return (senseObj.name + " (-)");
    };

    return (senseObj.name + " (+)");

  };


  getStatusButtonsForPlayers = () => {

    const senseButtons = this.props.PH["Ranger"]["senseArray"].map((statusObj, index) => {

      return (

        <button 
          className={`ui ${this.statusButtonColor(statusObj)} button`}
          key={index}
        > 
          {this.statusButtonText(statusObj)}
        </button>

      ); //end return

    });
  

    return senseButtons;

  };


  render() {

    if (this.props.missionNumber === 1) {
      return <PP1NoPower />;
    };


    return (

      <div className="PP1-Ranger-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Sense</button>
        </div> 


        <div className="PP1-ranger-sense-container">

          {this.getStatusButtonsForPlayers()}

        </div>


      </div> //end div Umbra-Lord-Container

    ); //end return


  }; //end render()



}; //end class PP1NoPower


const mapStateToProps = (state) => {
  
  return (
         {  
            PH: state.characterPowersHistory,
            myName: state.name,
            missionNumber: state.missionNumber,
            playerList: state.playerList,
            rangerSenseArray: state.rangerSenseArray,
            timer: state.timer,
         }
  );

};


export default connect(mapStateToProps, 
  {
    addSystemMessage: systemMessages,
  }
)
(PP1Ranger);