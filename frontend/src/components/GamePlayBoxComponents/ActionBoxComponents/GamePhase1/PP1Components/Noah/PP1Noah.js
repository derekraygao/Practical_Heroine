import React from 'react';

import './PP1Noah.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';

import PP1NoPower from '../PP1NoPower.js';



class PP1Noah extends React.Component {


  componentDidMount = () => {


  }; //end componentDidMount



  submitHurricane = () => {

      this.props.updatePower("Noah", "hurricane", this.props.missionNumber);

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("You summoned the wind elementals " 
            + "to generate a hurricane! At the end of "
            + "Mission " + this.props.missionNumber 
            + ", the player order will be permanently"
            + " shuffled.")
        }
      );

      socket.emit("Activate Hurricane");

  }; //end submitScry


  render() {

    var hurricaneMissionNo = this.props.PH["Noah"].hurricane;

    //not 0 means its' been used
    if (hurricaneMissionNo !== 0) {

      return <PP1NoPower />;

    };


    return (

      <div className="PP1-Noah-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Hurricane</button>
        </div> 


        <div className="PP1-hurricane-container">


          <button 
            className="ui yellow button"
            onClick={this.submitHurricane}
          >
            Blow!
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
(PP1Noah);