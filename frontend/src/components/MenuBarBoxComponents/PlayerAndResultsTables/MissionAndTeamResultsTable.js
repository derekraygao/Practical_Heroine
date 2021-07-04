import React from 'react';
import { connect } from 'react-redux';

import formatArrayIntoString from 'formatArrayIntoString.js';

import './css/MissionAndTeamResultsTable.css';


class MissionAndTeamResultsTable extends React.Component {

  state = {


  };

  componentDidMount = () => {

  }; //end componentDidMount



  //approve arr is format: [{name: "Derek", vote: "Accept/Reject/Absolute Yes/Absolute No"}, {name: , vote: }]
  getStringOfTeamApprovers = (approveArr) => {

    var arrOfApprovers = [];

    for (let z = 0; z < approveArr.length; z++) {

      if (["Accept", "Absolute Yes"].includes(approveArr[z].vote)) {
        arrOfApprovers.push(approveArr[z].name);
      };

    };

    return formatArrayIntoString(arrOfApprovers);

  };


  getStringOfTeamRejecters = (rejectArr) => {

    var arrOfRejecters = [];

    for (let z = 0; z < rejectArr.length; z++) {

      if (["Reject", "Absolute No"].includes(rejectArr[z].vote)) {
        arrOfRejecters.push(rejectArr[z].name);
      };

    };

    return formatArrayIntoString(arrOfRejecters);

  };


  //arr is array of team info objects for that mission number
  teamHistoryTRGenerator = (arr) => {

    var thArray = [];

    for (let q = 0; q < arr.length; q++) {

      thArray.push(
        <tr>
          <td>{arr[q].teamLeader}</td>
          <td>{formatArrayIntoString(arr[q].teamArray)}</td>
          <td>{this.getStringOfTeamApprovers(arr[q].votingInfo)}</td>
          <td>{this.getStringOfTeamRejecters(arr[q].votingInfo)}</td>
          <td>{arr[q].result}</td>
        </tr>
      ); //end push

    }; //end for

    return thArray;

  }; //end teamHistoryTRGenerator


  teamAndMissionResults = () => {

    const displayResults = [];
    var i = 1; //start at mission number 1
    var mN = this.props.missionNo;
    var TI = this.props.teamInfo;
    var MH = this.props.missionHistory;


    //should never display mission 7 information
    for (i; i < mN; i++) {
     
      displayResults.push(

        <>

          <table class="ui table">

            <thead>
              <tr>
                <th style={{backgroundColor:"#f2711d", color: "white"}}>
                  Mission {i} Team Proposal History
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td style={{backgroundColor: "#fbbd05", color: "white"}}>Leader</td>
                <td style={{backgroundColor: "#fbbd05", color: "white"}}>Team</td>
                <td style={{backgroundColor: "#fbbd05", color: "white"}}>Approvers</td>
                <td style={{backgroundColor: "#fbbd05", color: "white"}}>Rejecters</td>
                <td style={{backgroundColor: "#fbbd05", color: "white"}}>Result</td>
              </tr>

              {this.teamHistoryTRGenerator(TI[i])}
            </tbody>

          </table>         

          <table class="ui table" style={{marginBottom: "70px"}}>

            <thead>
              <tr>
                <th style={{backgroundColor:"#dc2829", color: "white"}}>
                  Mission {i} Results
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td style={{backgroundColor: "#fbbd05", color: "white"}}>Result</td>
                <td style={{backgroundColor: "#fbbd05", color: "white"}}>Point Total</td>
                <td style={{backgroundColor: "#fbbd05", color: "white"}}>+ Points</td>
                <td style={{backgroundColor: "#fbbd05", color: "white"}}>&#8212; Points</td>
             </tr>

             <tr>
                <td>{MH[i].result}</td>
                <td>{MH[i].pointTotal}</td>
                <td>{MH[i].positiveTotal}</td>
                <td>{MH[i].negativeTotal}</td>
             </tr>
  

            </tbody>

          </table>  

      </>

        
      ); //end push

      


    }; //end for


    return displayResults;
  };



  render() {

    return (

      <div className="mission-team-results-container">

        {this.teamAndMissionResults()}

      </div>

    ); //end return


  }; //end render


}; //end MissionAndTeamResultsTable



const mapStateToProps = (state) => {
  
  return (
    { 
      missionHistory: state.missionHistory,
      teamInfo: state.teamVoteInfo,
      missionNo: state.missionNumber
    }
  );

};


export default connect(mapStateToProps, 
  {

  })
(MissionAndTeamResultsTable);

