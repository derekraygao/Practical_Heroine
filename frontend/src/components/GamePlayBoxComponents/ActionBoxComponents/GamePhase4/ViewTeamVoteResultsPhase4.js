import React from 'react';
import { connect } from 'react-redux';

//import TeamVoteTable from './TeamVoteTable.js'; //not used, table too big
import TeamVoteResultsButtons from './TeamVoteResultsButtons.js';

import './ViewTeamVoteResultsPhase4.css';

import socket from 'Socket.js';
import formatArrayIntoString from 'formatArrayIntoString.js';


class ViewTeamVoteResultsPhase4 extends React.Component {

  state = {
            doneViewingResults: false
          };
  

  doneViewingOnClick = () => {

    this.setState({doneViewingResults: true});

    if (this.wasTeamAccepted) {

      socket.emit("Ready To Start Power Phase 2 and Game Phase 5");

      return 0;

    };

    socket.emit("Ready For Next Team Leader Proposal After Failed One");

  }; //end doneViewingOnClick()


  doneViewingButtonOrText() {

    if (this.state.doneViewingResults) {
      return "Please wait until everyone is finished viewing the results.";
    };

    return (

      <button 
        className="ui button"
        onClick={this.doneViewingOnClick}
      >
        Done Viewing
      </button>

    ); //end return

  }; //end doneViewingButtonOrText()


  wasTeamAccepted = () => {

    var latestInd = (this.props.teamVoteInfo[this.props.missionNo].length - 1);
    var result = this.props.teamVoteInfo[this.props.missionNo][latestInd].result;

    return (result === "Accepted" ? true : false);

  }; //end wasTeamApproved()


  teamAcceptedText = () => {
   
    var latestInd = (this.props.teamVoteInfo[this.props.missionNo].length - 1);
    var result = this.props.teamVoteInfo[this.props.missionNo][latestInd].result;

    return (result === "Accepted" ? "Accepted" : "Rejected");

  };



  render() {

    return (

      <div className="view-team-vote-results-container">


        <div className="team-vote-results-text-container">
          {this.props.teamLeader}'s team of: {formatArrayIntoString(this.props.missionTeam)}
          &nbsp; was '{this.teamAcceptedText()}'! 
        </div>


        <div className="team-vote-visual-display-container">
          <TeamVoteResultsButtons />
        </div>


        <div className="team-vote-done-viewing-button-container">
          {this.doneViewingButtonOrText()}
        </div>


      </div> //end view-team-vote-results-container
      

    ); //end return

  }; //end render()



}; //end class ViewTeamVoteResultsPhase4



const mapStateToProps = (state) => {
  
  return (
         {  
            teamVoteInfo: state.teamVoteInfo,
            missionNo: state.missionNumber,
            teamLeader: state.teamLeader,
            missionTeam: state.missionTeam
         }
  );

};


export default connect(mapStateToProps, {})
(ViewTeamVoteResultsPhase4);