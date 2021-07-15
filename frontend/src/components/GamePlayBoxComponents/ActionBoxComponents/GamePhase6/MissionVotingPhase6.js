import React from 'react';
import { connect } from 'react-redux';

import './MissionVotingPhase6.css';

import {timer} from 'actions/timer.js';
import { systemMessages } from 'actions/systemMessages.js';

import socket from 'Socket.js';

import NormalMissionVoteButtons from './PowerPhase6Components/NormalMissionVoteButtons.js';
import PP6NoPower from './PP6NoPower.js';
import PP6Ichigo from './PP6Ichigo';


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

      switch (this.props.role) {

        case "Ichigo":
          return <PP6Ichigo voted={this.clearTimerAndSetVote} />;

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