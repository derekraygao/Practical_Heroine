import React from 'react';
import { connect } from 'react-redux';

import './MissionVotingPhase6.css';

import {timer} from 'actions/timer.js';
import { systemMessages } from 'actions/systemMessages.js';

import socket from 'Socket.js';

import NormalMissionVoteButtons from './PowerPhase6Components/NormalMissionVoteButtons.js';
import PP6NoPower from './PP6NoPower.js';
import PP6Frozen from './PP6Frozen.js';

import PP6Princess from './PP6Princess.js';
import PP6Ichigo from './PP6Ichigo.js';
import PP6Lan from './PP6Lan.js';
import PP6Pharaoh from './PP6Pharaoh.js';
import PP6Esper from './PP6Esper.js';
import PP6Sensor from './PP6Sensor.js';
import PP6Scientist from './PP6Scientist.js';
import PP6Jailer from './PP6Jailer.js';
import PP6Seer from './PP6Seer.js';
import PP6AuraKnight from './PP6AuraKnight.js';
import PP6Oracle from './PP6Oracle.js';

import PP6UmbraLord from './PP6UmbraLord.js';
import PP6Hecate from './PP6Hecate.js';
import PP6Bomberman from './PP6Bomberman.js';
import PP6Noah from './PP6Noah.js';
import PP6Backstabber from './PP6Backstabber.js';
import PP6LieutenantBlitz from './PP6LieutenantBlitz.js';
import PP6Persequor from './PP6Persequor.js';
import PP6BabyDoll from './PP6BabyDoll.js';
import PP6Reverser from './PP6Reverser.js';
import PP6Kaguya from './PP6Kaguya.js';



var phase6TimerInterval;

class MissionVotingPhase6 extends React.Component {

  state = {
            haveYouVoted: "not yet",
            tabSelection: "vote"
          };


  componentDidMount = () => {

      phase6TimerInterval = setInterval(this.timerCountdown, 1000);

      //automateVoteOnMission();
    
  }; //end componentDidMount


  componentWillUnmount() {

    clearInterval(phase6TimerInterval);

  };


  clearTimerAndSetVote = (voteType) => {

    /*You don't clear timer, cause otherwise the timer shown to user
    will stop working. instead, do conditional socket.emit inside
    timerCountdown */

    this.setState({haveYouVoted: voteType});

    this.props.addSystemMessage({type: "normal", message: this.voteText(voteType) });

  };



  timerCountdown = () => {

    var newTime = (this.props.timer - 1);

    if (newTime < 0) {

      clearInterval(phase6TimerInterval);

      if (this.state.haveYouVoted === "not yet") {

        this.setState({haveYouVoted: "Success"});

        socket.emit("Vote on Mission", "Success");

        this.props.addSystemMessage({type: "normal", message: this.voteText(this.state.haveYouVoted) });
      
      };


    } else {

      this.props.updateTimer(newTime);

    };

  }; //end timerCountdown()


  voteText = (vote) => {

    switch (vote) {

      case "Success":
        return ("For Mission " + this.props.missionNumber + ", you voted for mission success!");

      case "Fail":
        return ("For Mission " + this.props.missionNumber + ", you voted for mission failure!");

      case "Power":
        return ("For Mission " + this.props.missionNumber + ", you used your powers!");

      default:
        return "Error! MissionVotingPhase6 voteText() error!";

    }; //end switch

  }; //end voteText


  whichMissionVoteComponent = () => {

    if (this.state.haveYouVoted !== "not yet") {

      return (

      <div className="PP6-general-container">

        <div className="PP6-powers-menu-bar-container orange ui buttons">
          <button className="ui button">PP6: Wait For Mission Team</button>
        </div> 

        <div className="PP6-general-action-area-container">
          {this.voteText(this.state.haveYouVoted)} Please 
          wait {this.props.timer} seconds until the rest of the 
          team completes the mission.
        </div>

      </div>

      ); //end return

    };


    if (this.state.tabSelection == "vote") {


      if (this.props.characterStatus["frozen"]) {
        return <PP6Frozen voted={this.clearTimerAndSetVote} />;
      };


      switch (this.props.role) {

        case "Princess":
          return <PP6Princess voted={this.clearTimerAndSetVote} />;

        case "Seer":
          return <PP6Seer voted={this.clearTimerAndSetVote} />;          

        case "Ichigo":
          return <PP6Ichigo voted={this.clearTimerAndSetVote} />;

        case "Esper":
          return <PP6Esper voted={this.clearTimerAndSetVote} />;

        case "Lan":
          return <PP6Lan voted={this.clearTimerAndSetVote} />;

        case "Pharaoh":
          return <PP6Pharaoh voted={this.clearTimerAndSetVote} />;

        case "Sensor":
          return <PP6Sensor voted={this.clearTimerAndSetVote} />;

        case "Scientist":
          return <PP6Scientist voted={this.clearTimerAndSetVote} />;

        case "Jailer":
          return <PP6Jailer voted={this.clearTimerAndSetVote} />;

        case "Aura Knight":
          return <PP6AuraKnight voted={this.clearTimerAndSetVote} />; 

        case "Oracle":
          return <PP6Oracle voted={this.clearTimerAndSetVote} />;          

        case "Umbra Lord":
          return <PP6UmbraLord voted={this.clearTimerAndSetVote} />; 
          
        case "Hecate":
          return <PP6Hecate voted={this.clearTimerAndSetVote} />;  

        case "Bomberman":
          return <PP6Bomberman voted={this.clearTimerAndSetVote} />;

        case "Noah":
          return <PP6Noah voted={this.clearTimerAndSetVote} />;

        case "Backstabber":
          return <PP6Backstabber voted={this.clearTimerAndSetVote} />;

        case "Lieutenant Blitz":
          return <PP6LieutenantBlitz voted={this.clearTimerAndSetVote} />;

        case "Persequor":
          return <PP6Persequor voted={this.clearTimerAndSetVote} />;

        case "Baby Doll":
          return <PP6BabyDoll voted={this.clearTimerAndSetVote} />;

        case "Reverser":
          return <PP6Reverser voted={this.clearTimerAndSetVote} />;

        case "Kaguya":
          return <PP6Kaguya voted={this.clearTimerAndSetVote} />;

        default:
          return <PP6NoPower voted={this.clearTimerAndSetVote} />;

      }; //end switch


    }; //end if (this.state.tabSelection == "vote")

 


  }; //end whichMissionVoteTab()




  render() {

    return (

      this.whichMissionVoteComponent()

    ); //end return

  }; //end render()



}; //end class MissionVotingPhase6



const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            role: state.role,
            characterStatus: state.characterStatus,
            missionNumber: state.missionNumber,
            teamLeader: state.teamLeader,
            missionTeam: state.missionTeam,
            timer: state.timer,
            missionVoteTab: state.missionVoteTab,
         }
  );

};


export default connect(mapStateToProps, 
  {
    updateTimer: timer,
    addSystemMessage: systemMessages
  }
)
(MissionVotingPhase6);



function automateVoteOnMission() {

  //other players are still in phase 5
  //if (!this.props.missionTeam.includes(this.props.myName)) { return 0; };

  socket.emit("Vote on Mission", "Success");
  clearInterval(phase6TimerInterval);

};