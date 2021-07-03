import React from 'react';
import { connect } from 'react-redux';

import './ViewMissionResultsPhase7.css';

import { systemMessages } from 'actions/systemMessages.js';

import socket from 'Socket.js';
import formatArrayIntoString from 'formatArrayIntoString.js';





class ViewMissionResultsPhase7 extends React.Component {

  state = {
            MH: {
                  missionNumber: 0,
                  teamLeader: "none",
                  missionTeam: ["nobody"],
                  positiveTotal: 1,
                  negativeTotal: -1,
                  pointTotal: 0,
                  result: "Draw"
                },

            clickedNextMission: false,

          };


  componentDidMount = () => {

    var _missionHistory = this.props.missionHistory;
    var _currentMissionNo = this.props.missionNumber;

    console.log(_missionHistory);

    var _currentMissionHistory = _missionHistory[_currentMissionNo];

    this.setState({MH: _currentMissionHistory});

  };


  nextMissionClick = () => {

    this.setState({clickedNextMission: true});

    socket.emit("Ready For Next Round/Mission");

  }; //end nextMissionClick


  nextMissionButtonContainerStyle() {

    if (!this.state.clickedNextMission) {
      return {alignItems: "center"};
    };

    return {
              paddingLeft: "5%",
              paddingRight: "3%",
              paddingTop: "20%",
              fontSize: "140%"
           };

  };

  buttonOrText = () => {

    if (!this.state.clickedNextMission) {

      return (

          <button 
            className="ui orange button"
            onClick={this.nextMissionClick}
          >
            Next Mission
          </button>

      ); //end return

    };

    return (
      "Please wait until everyone has finished viewing the mission results."
    ); //end return


  };


  render() {

    return (
      <div className="view-mission-results-container">

        <div className="view-mission-results-table-container">

          <table className="ui celled table">
            <tbody>
              <tr>
                <td data-label="result-heading" className="table-style">Result</td>
                <td data-label="result">{this.state.MH.result}</td>
              </tr>
              <tr>
                <td data-label="total-votes-heading" className="table-style">Total Points</td>
                <td data-label="total-vote">{this.state.MH.pointTotal}</td>
              </tr>
              <tr>
                <td data-label="positive-votes-heading" className="table-style">+ Points</td>
                <td data-label="positive-vote">{this.state.MH.positiveTotal}</td>
              </tr>
              <tr>
                <td data-label="negative-votes-heading" className="table-style">&#8212; Points</td>
                <td data-label="negative-vote">{this.state.MH.negativeTotal}</td>
              </tr>
              <tr>
                <td data-label="team-heading" className="table-style">Mission Team</td>
                <td data-label="team-names">{formatArrayIntoString(this.state.MH.missionTeam)}</td>
              </tr>
              <tr>
                <td data-label="team-leader-heading" className="table-style">Team Leader</td>
                <td data-label="team-leader-name">{this.state.MH.teamLeader}</td>
              </tr>
            </tbody>
          </table>

        </div>

        <div className="next-mission-button-container" style={this.nextMissionButtonContainerStyle()}>
          {this.buttonOrText()}
        </div>

      </div>
    ); //end return

  }; //end render()



}; //end class ViewMissionResultsPhase7



const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            role: state.role,
            missionNumber: state.missionNumber,
            teamLeader: state.teamLeader,
            missionTeam: state.missionTeam,
            missionHistory: state.missionHistory,
            timer: state.timer,
            missionVoteTab: state.missionVoteTab,
         }
  );

};


export default connect(mapStateToProps, 
  {

  }
)
(ViewMissionResultsPhase7);