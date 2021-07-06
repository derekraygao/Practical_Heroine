import React from 'react';
import { connect } from 'react-redux';

import './MissionVotingPhase6.css';

import {timer} from 'actions/timer.js';
import { systemMessages } from 'actions/systemMessages.js';

import socket from 'Socket.js';

import NormalMissionVoteTab from './PowerPhase6Components/NormalMissionVoteTab.js';




var phase6TimerInterval;

class MissionVotingPhase6 extends React.Component {

  state = {
            haveYouVoted: "not yet",
          };


  componentDidMount = () => {

      phase6TimerInterval = setInterval(this.timerCountdown, 1000);
    
  }; //end componentDidMount


  componentWillUnmount() {

    clearInterval(phase6TimerInterval);

  };


  clearTimerAndSetVote = (voteType) => {

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


  whichMissionVoteTab() {

    if (this.state.haveYouVoted !== "not yet") {
      return (

        <div className="have-voted-on-mission-container">
          Please wait {this.props.timer} seconds until your
          other teammates complete the mission.
        </div>

      ); //end return

    };

    switch (this.props.missionVoteTab) {

      //normal success/fail vote page
      case "mission":
        return <NormalMissionVoteTab voted={this.clearTimerAndSetVote} />;


      default:
        return <div>Error</div>;

    }; //end switch



  }; //end whichMissionVoteTab()




  render() {

    return (

      this.whichMissionVoteTab()

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