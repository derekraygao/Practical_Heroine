import React from 'react';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import './VoteOnProposedTeamPhase3.css';

import socket from 'Socket.js';
import formatArrayIntoString from 'formatArrayIntoString.js';


class VoteOnProposedTeamPhase3 extends React.Component {

  state = {
            haveYouVotedYet: false,
            myVote: "not voted yet"
          };

  
  componentDidMount = () => {

   //socket.emit("Vote on Team Leader's Proposed Team", "Accept");

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

    this.setState({haveYouVotedYet: true, myVote: "Absolutely Accept"});

    /*don't update power history here, let server do it, since server
    checks if you are allowed to use absolute yes or not*/

    this.props.addSystemMessage(
      {
        type: "power",
        message: ("You used your 'Absolute Yes' team vote power to "
          + "forcibly accept the current team! You can only use this "
          + "power once! This power fails if the Villains have won "
          + "2 missions in a row, won 3 missions total, or if Kaguya's "
          + "'Dark Destiny' is one team away from fulfillment.")  
      }
    );

    socket.emit("Absolute Acceptance");
    socket.emit("Vote on Team Leader's Proposed Team", "Accept");

  };


  voteAbsoluteNo = () => {

    this.setState({haveYouVotedYet: true, myVote: "Absolutely Reject"});
    
    this.props.updatePower("Umbra Lord", "absoluteTeamVoteNoUsed", "Used");

    this.props.addSystemMessage(
      {
        type: "power",
        message: ("You used your 'Absolute No' team vote power to "
          + "forcibly reject the current team! You can only use this "
          + "power once per game!")  
      }
    );



    socket.emit("Absolute Rejection");
    socket.emit("Vote on Team Leader's Proposed Team", "Reject");

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

    var absoluteYesUsed = (this.props.PH["Umbra Lord"]["absoluteTeamVoteYesUsed"] == "Used");
    var absoluteNoUsed = (this.props.PH["Umbra Lord"]["absoluteTeamVoteNoUsed"] == "Used");
    var usedAllAbsolutes = (absoluteYesUsed && absoluteNoUsed);

    if (this.props.role !== "Umbra Lord" || usedAllAbsolutes) {

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

          </div>


          <div className="vote-on-team-button-container-absolute">

            {!absoluteYesUsed &&
              <button className="ui teal button" onClick={this.voteAbsoluteYes}>
                Absolute Accept
              </button>
            }


            {!absoluteNoUsed &&
              <button className="ui orange button" onClick={this.voteAbsoluteNo}>
                Absolute Reject
              </button>
            }

          
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
            PH: state.characterPowersHistory,
            role: state.role,
            teamLeader: state.teamLeader,
            missionTeam: state.missionTeam
         }
  );

};


export default connect(mapStateToProps, 
  {
      updatePower: updateCharacterPowerHistory,
      addSystemMessage: systemMessages,
  }
)
(VoteOnProposedTeamPhase3);