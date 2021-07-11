import React from 'react';
import { connect } from 'react-redux';

import './TeamLeaderChoosingTeamPhase2.css';

import AddTeamMemberButton from './AddTeamMemberButton.js';

import {missionTeamList} from 'actions/missionTeamList.js';
import {calculateNumberofTeamMembers} from 'calculateNumberofTeamMembers.js';
import socket from 'Socket.js';


var testArray10 = ["John", "Lottie", "Marcus", "Noah", 
                   "Pear", "Lan", "Bianca", "Nugo", "Sylvia",
                   "Ogden"];

var testArray8 = ["John", "Lottie", "Marcus", "Noah", 
                   "Pear", "Lan", "Bianca", "Nugo"];



class TeamLeaderChoosingTeamPhase2 extends React.Component {

  state = {
            submittedTeam: false

          };


  componentDidMount = () => {

    this.automateTeamSelection();

  };


  automateTeamSelection() {

    if (this.props.teamLeaderName !== this.props.myName) { return 0; };

    console.log("is automate team selection calling?");

    var teamSize = calculateNumberofTeamMembers(this.props.missionNumber, this.props.playerList.length);
    var teamArr = [];

    for (var i = 0; i < teamSize; i++) {

      teamArr.push(this.props.playerList[i]);

    };

    socket.emit("Team Leader's Proposed Team Submission", teamArr);

  };





  submitTeamMembers = () => {

    var teamSize = calculateNumberofTeamMembers(this.props.missionNumber, this.props.playerList.length);

    if (this.props.missionTeam.length === teamSize) {

      this.setState({submittedTeam: true});
      socket.emit("Team Leader's Proposed Team Submission", this.props.missionTeam);

    }; //end if

  }; //end submitTeamMembers()


  createChooseTeamMemberButtons = () => {

    const buttonsArray = this.props.playerList.map((pName, index) => {

      return (

        <AddTeamMemberButton
          key={index}
          playerName={pName}
        />


      ); //end return

    }); //end const buttonsArray =

    return buttonsArray;

  }; //end createChooseTeamMembersButtons


  areYouTeamLeader = () => {

    if (this.props.myName === this.props.teamLeaderName) {

      if (!this.state.submittedTeam) {

        return (

          <div className="team-leader-choose-team-container">

            <div className="team-leader-message-container">
              {this.props.myName}, choose &nbsp;
              {calculateNumberofTeamMembers(this.props.missionNumber, this.props.playerList.length)} 
              &nbsp; players for mission number {this.props.missionNumber}.
            </div>

            <div className="choose-team-buttons-container">
              {this.createChooseTeamMemberButtons()}

              <button
                className="ui green button submit-team-button"
                onClick={this.submitTeamMembers}
              >
                Submit
              </button>

            </div>

          </div>

        ); //end return

      }; //end if (!this.state.submittedTeam)

      /* have submitted a team */
      return (

        <div className="wait-team-submission"> 
          You have submitted your team! Now everyone will vote on your team.
        </div>

      ); //end return

    }; //end if name == teamLeaderName


    //not team leader
    return (

      <div className="wait-team-submission">
        Please wait while {this.props.teamLeaderName} is choosing his/her 
        team for Mission Number {this.props.missionNumber}
      </div>

    ); //end return

  }; //end whichActionBoxComponent()



  render() {

    return (

      this.areYouTeamLeader()

    ); //end return

  }; //end render()



}; //end class ActionBox



const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            playerList: state.playerList,
            teamLeaderName: state.teamLeader,
            missionNumber: state.missionNumber,
            missionTeam: state.missionTeam
         }
  );

};


export default connect(mapStateToProps, {clearMissionTeam: missionTeamList})(TeamLeaderChoosingTeamPhase2);


