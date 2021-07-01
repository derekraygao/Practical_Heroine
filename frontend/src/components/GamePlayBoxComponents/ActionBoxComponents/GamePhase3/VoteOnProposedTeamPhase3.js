import React from 'react';
import { connect } from 'react-redux';

import './VoteOnProposedTeamPhase3.css';

import socket from 'Socket.js';
import formatArrayIntoString from 'formatArrayIntoString.js';


class VoteOnProposedTeamPhase3 extends React.Component {

  state = {
            haveYouVotedYet: false,
            myVote: "not voted yet"
          };

  
  componentDidMount = () => {

   

  };


  voteYes = () => {
    this.setState({haveYouVotedYet: true, myVote: "Accept"});
    socket.emit("Vote on Team Leader's Proposed Team", "Accept");
  };


  voteNo = () => {
    this.setState({haveYouVotedYet: true, myVote: "Reject"});
    socket.emit("Vote on Team Leader's Proposed Team", "Reject");
  };


  voteAbsoluteYes = () => {

    this.setState({haveYouVotedYet: true});

  };


  voteAbsoluteNo = () => {
    this.setState({haveYouVotedYet: true});

  };


  ifVotedYet() {

    if (this.state.haveYouVotedYet) {

      return (
        <div className="submitted-team-vote-container">
          You voted to '{this.state.myVote}' {this.props.teamLeader}'s 
          &nbsp;team of: {formatArrayIntoString(this.props.missionTeam)}
        </div>
      );

    };

    return (this.ifUmbraLordOrNot());

  }; //end ifVotedYet()



  ifUmbraLordOrNot() {

    var teamString = formatArrayIntoString(this.props.missionTeam);

    if (this.props.role !== "Umbra Lord") {

      return (

        <div className="vote-on-team-container">

          <div className="vote-on-team-instruction">
            {this.props.teamLeader}'s team is: {teamString}
          </div>

          <div className="vote-on-team-button-container">

            <button className="ui green button" onClick={this.voteYes}>
              Accept
            </button>

            <button className="ui red button" onClick={this.voteNo}>
              Reject
            </button>

          </div>

        </div> //div end of vote-on-team-container

      ); //end return


    }; //end if role !== Umbra Lord

    /* You are Umbra Lord */

    return (

        <div className="vote-on-team-container-umbra-lord">

          <div className="vote-on-team-instruction">
            {this.props.teamLeader}'s team is: {teamString} 
          </div>

          <div className="vote-on-team-button-container-ul">

            <button className="ui green button" onClick={this.voteYes}>
              Accept
            </button>

            <button className="ui red button" onClick={this.voteNo}>
              Reject
            </button>

            <div style={{width: "100%"}}></div>

            <button className="ui teal button">Absolute Accept</button>
            <button className="ui orange button">Absolute Reject</button>

          </div>

        </div>


    ); //end return


  };



  render() {

    return (

      this.ifVotedYet()

    ); //end return

  }; //end render()



}; //end class VoteOnProposedTeamPhase3



const mapStateToProps = (state) => {
  
  return (
         { 
            role: state.role,
            teamLeader: state.teamLeader,
            missionTeam: state.missionTeam
         }
  );

};


export default connect(mapStateToProps, {})
(VoteOnProposedTeamPhase3);