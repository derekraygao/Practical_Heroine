import React from 'react';
import { connect } from 'react-redux';

import './PowerPhase5.css';

import {timer} from 'actions/timer.js';
import socket from 'Socket.js';

import formatArrayIntoString from 'formatArrayIntoString.js';

import PP5NoPower from './PowerPhase5Components/PP5NoPower.js';
import PP5Marcus from './PowerPhase5Components/Marcus/PP5Marcus.js';


var PP5TimerInterval;

class PowerPhase5 extends React.Component {


  componentDidMount = () => {

      PP5TimerInterval = setInterval(this.timerCountdown, 1000);
    
  }; //end componentDidMount


  componentWillUnmount() {

    clearInterval(PP5TimerInterval);

  };


  timerCountdown = () => {

    var newTime = (this.props.timer - 1);

    if (newTime < 0) {

      clearInterval(PP5TimerInterval);

      //need to assign to variables. Using includes 
      //directly on props does not work
      var _mTeam = this.props.missionTeam;
      var _name = this.props.myName;

      //if on the mission team, get ready to start game phase 6
      if (_mTeam.includes(_name)) {
        socket.emit("End Power Phase 2. Start Mission Voting And Game Phase 6");
      };


    } else {

      this.props.updateTimer(newTime);

    };

  }; //end timerCountdown()




  whichPowerAndRole = () => {

    switch (this.props.role) {

      case "Marcus": 
        return <PP5Marcus />;

      default:
        return <PP5NoPower />;


    }; //end switch

  }; //end whichPowerAndRole


  selectedForMissionTeamOrNot = () => {

    //need to assign to variables. Using includes 
    //directly on props does not work
    var _mTeam = this.props.missionTeam;
    var _name = this.props.myName;

    if (_mTeam.includes(_name)) {

      return this.whichPowerAndRole();

    };

    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          <button className="ui button">Wait For Mission Team</button>
        </div> 

        <div className="PP5-general-action-area-container">
          Wait {this.props.timer} seconds until {this.props.teamLeader}'s 
          team ({formatArrayIntoString(this.props.missionTeam)}) 
          completes the mission.
        </div>

      </div>


    ); //end return

  }; //end selectedForMissionTeamOrNot()



  render() {

    return (

      this.selectedForMissionTeamOrNot()

    ); //end return

  }; //end render()



}; //end class PowerPhase5



const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            role: state.role,
            teamLeader: state.teamLeader,
            missionTeam: state.missionTeam,
            timer: state.timer
         }
  );

};


export default connect(mapStateToProps, {updateTimer: timer})(PowerPhase5);