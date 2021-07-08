import React from 'react';

import './PP1Backstabber.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import socket from 'Socket.js';
import PP1NoPower from '../PP1NoPower.js';

class PP1Backstabber extends React.Component {

  state = {

    powerUsed: false,

  };


  componentDidMount = () => {


  }; //end componentDidMount



  submitBackstab = () => {

    this.setState({powerUsed: true});

    this.props.addSystemMessage(
      {
        type: "power",
        message: ("You decided to backstab your villainous teammates!"
        + " Starting Mission " + (this.props.missionNumber + 1)
        + ", you will permanently swap roles with a random hero."
        + " You're a lying, traitorous, P.O.S. who should be run over by a bus."
        + " Yes, winning is nice, but loyalty counts for something."
        + " This is the reason why the world is so terrible these days, " 
        + "because of scumbag backstabbing people like you.") 
      }
    );

    socket.emit("Activate Backstab Switch");

  };



  render() {

    const originalBS = this.props.PH["Backstabber"]["originalBackstabber"];

    if (originalBS !== "nobody") {

      return (

        <div className="PP1-Backstabber-Container">

          <div className="powers-menu-bar-container orange ui buttons">
            <button className="ui button"></button>
          </div> 

          <div className="PP1-backstab-container">
            You are the new backstabber! You swapped roles with 
            &nbsp;{originalBS}. Please wait {this.props.timer} 
            &nbsp;seconds for Game Phase 1 to end.
          </div>

      </div>

      );

    }; //end if !== 'nobody'


    if (this.props.missionNumber > 4) {

      return <PP1NoPower />;

    };


    if (this.state.powerUsed) {

      return (

      <div className="PP1-Backstabber-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-backstab-container">
          You activated backstab! At the start of the next mission, 
          you will switch roles permanently with a random hero. Please 
          wait {this.props.timer} seconds for Game Phase 1 to end.
        </div>

      </div>

      ); //end return

    }; //end if corruption !==


    return (

      <div className="PP1-Backstabber-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Backstab</button>
        </div> 


        <div className="PP1-backstab-container">

          <button 
            className="ui button yellow"
            onClick={this.submitBackstab}
          >
            Backstab!
          </button>

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
(PP1Backstabber);