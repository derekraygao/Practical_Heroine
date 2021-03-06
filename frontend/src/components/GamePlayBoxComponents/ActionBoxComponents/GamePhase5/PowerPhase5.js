import React from 'react';
import { connect } from 'react-redux';

import './PowerPhase5.css';

import {timer} from 'actions/timer.js';
import socket from 'Socket.js';

import formatArrayIntoString from 'formatArrayIntoString.js';

import PP5NoPower from './PowerPhase5Components/PP5NoPower.js';
import PP5Frozen from './PowerPhase5Components/PP5Frozen.js';


import PP5Marcus from './PowerPhase5Components/Marcus/PP5Marcus.js';
import PP5Lottie from './PowerPhase5Components/Lottie/PP5Lottie.js';
import PP5Lan from './PowerPhase5Components/Lan/PP5Lan.js';
import PP5Balancer from './PowerPhase5Components/Balancer/PP5Balancer.js';
import PP5Pear from './PowerPhase5Components/Pear/PP5Pear.js';
import PP5DetectiveChat from './PowerPhase5Components/DetectiveChat/PP5DetectiveChat.js';
import PP5Ranger from './PowerPhase5Components/Ranger/PP5Ranger.js';
import PP5Scientist from './PowerPhase5Components/Scientist/PP5Scientist.js';
import PP5Sensor from './PowerPhase5Components/Sensor/PP5Sensor.js';


import PP5Noah from './PowerPhase5Components/Noah/PP5Noah.js';
import PP5BabyDoll from './PowerPhase5Components/BabyDoll/PP5BabyDoll.js';
import PP5Spiritualist from './PowerPhase5Components/Spiritualist/PP5Spiritualist.js';
import PP5Reverser from './PowerPhase5Components/Reverser/PP5Reverser.js';
import PP5Toxiturtle from './PowerPhase5Components/Toxiturtle/PP5Toxiturtle.js';
import PP5Psychologist from './PowerPhase5Components/Psychologist/PP5Psychologist.js';


/*Not on Mission Team*/

import PP5NotSelectedForMissionLottie from './NotSelectedForMissionPowers/PP5NotSelectedForMissionLottie.js';
import PP5NotSelectedForMissionPharaoh from './NotSelectedForMissionPowers/PP5NotSelectedForMissionPharaoh.js';

import PP5NotSelectedForMissionPersequor from './NotSelectedForMissionPowers/PP5NotSelectedForMissionPersequor.js';
import PP5NotSelectedForMissionBackstabber from './NotSelectedForMissionPowers/PP5NotSelectedForMissionBackstabber.js';


import PP5NotSelectedForMissionFrozen from './NotSelectedForMissionPowers/PP5NotSelectedForMissionFrozen.js';



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

    if (this.props.characterStatus["frozen"]) {
      return <PP5Frozen />;
    };

    switch (this.props.role) {

      case "Marcus": 
        return <PP5Marcus />;

      case "Lottie":
        return <PP5Lottie />;

      case "Lan":
        return <PP5Lan />;

      case "Pear":
        return <PP5Pear />;

      case "Balancer":
        return <PP5Balancer />;

      case "Detective Chat":
        return <PP5DetectiveChat />;

      case "Ranger":
        return <PP5Ranger />;

      case "Scientist":
        return <PP5Scientist />;

      case "Sensor":
        return <PP5Sensor />;


      case "Noah":
        return <PP5Noah />;

      case "Baby Doll":
        return <PP5BabyDoll />;

      case "Spiritualist":
        return <PP5Spiritualist />;

      case "Toxiturtle":
        return <PP5Toxiturtle />;

      case "Psychologist":
        return <PP5Psychologist />;

      default:
        return <PP5NoPower />;


    }; //end switch

  }; //end whichPowerAndRole




  whichPowerAndRoleNotOnTheTeam = () => {


    if (this.props.characterStatus["frozen"]) {
      return <PP5NotSelectedForMissionFrozen />;
    };



    switch (this.props.role) {

      case "Lottie":
        return <PP5NotSelectedForMissionLottie />;

      case "Pharaoh":
        return <PP5NotSelectedForMissionPharaoh />;


      case "Persequor":
        return <PP5NotSelectedForMissionPersequor />;

      case "Backstabber":
        return <PP5NotSelectedForMissionBackstabber />;



      default:

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

    }; //end switch

  }; //end whichPowerAndRoleNotOnTheTeam




  selectedForMissionTeamOrNot = () => {

    //need to assign to variables. Using includes 
    //directly on props does not work
    var _mTeam = this.props.missionTeam;
    var _name = this.props.myName;

    if (_mTeam.includes(_name)) {

      return this.whichPowerAndRole();

    };


    return this.whichPowerAndRoleNotOnTheTeam();

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
            characterStatus: state.characterStatus,
            teamLeader: state.teamLeader,
            missionTeam: state.missionTeam,
            timer: state.timer
         }
  );

};


export default connect(mapStateToProps, {updateTimer: timer})(PowerPhase5);