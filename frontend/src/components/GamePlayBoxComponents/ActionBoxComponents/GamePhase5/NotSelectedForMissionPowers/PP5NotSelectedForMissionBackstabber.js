import React from 'react';
import { connect } from 'react-redux';

import {systemMessages} from 'actions/systemMessages.js';

import socket from 'Socket.js';

import formatArrayIntoString from 'formatArrayIntoString.js';




class PP5NotSelectedForMissionBackstabber extends React.Component {

  state = {
            usedPower: false,
          };



  submitButtonPower1 = () => {

    this.setState({usedPower: true});

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

  }; //end submitButtonPower1




  returnWhichActionAreaComponent = () => {

    return (

      <>

        <button
          className="ui button red PP5-margin-left"
          onClick={this.submitButtonPower1}
        >
          Betray!
        </button>

      </>

    ); //end return


  }; //end returnWhichActionAreaComponent()



  render() {


    const originalBS = this.props.PH["Backstabber"]["originalBackstabber"];


    if (this.state.usedPower || this.props.missionNumber > 4 
      || originalBS !== "nobody chosen") {

      return (

        <div className="PP5-general-container">

          <div className="PP5-powers-menu-bar-container orange ui buttons">
            <button className="ui button">Wait For Mission Team</button>
          </div> 

          <div className="PP5-general-action-area-container">
            Wait {this.props.timer} seconds 
            until {this.props.teamLeader}'s 
            team ({formatArrayIntoString(this.props.missionTeam)}) completes 
            the mission.
          </div>

        </div>


      ); //end return

    }; //end usedPower



    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          <button className="ui button">Backstab</button>
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
    addSystemMessage: systemMessages,
  }
)
(PP5NotSelectedForMissionBackstabber);