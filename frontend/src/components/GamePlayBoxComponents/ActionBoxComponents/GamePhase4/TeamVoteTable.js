import React from 'react';
import { connect } from 'react-redux';

import './TeamVoteTable.css';



class TeamVoteTable extends React.Component {

  componentDidMount = () => {

   

  };


  sortVoteArrayAccept = (arr) => {

    var sortedArrayAccept = [];

    for (var i = 0; i < arr.length; i++) {

      if (arr[i].vote === "Accept") {
        sortedArrayAccept.push(arr[i]);
      };

    };

    return sortedArrayAccept;

  }; //end sortVoteArray


  sortVoteArrayReject = (arr) => {

    var sortedArrayReject = [];

    for (var i = 0; i < arr.length; i++) {

      if (arr[i].vote === "Reject") {
        sortedArrayReject.push(arr[i]);
      };

    };

    return sortedArrayReject;

  }; //end sortVoteArray


  styling = (info) => {

    if (info.vote === "Accept") {
      return {backgroundColor: "#99ff99"};
    } else {
      return {backgroundColor: "#ff80b3"};
    };

  }; //end styling()


  tdAccept() {

    var latestInd = (this.props.teamVoteInfo[this.props.missionNo].length - 1);
    var teamVoteInfoArray = this.props.teamVoteInfo[this.props.missionNo][latestInd].votingInfo;
    var sortedArrayAccept = this.sortVoteArrayAccept(teamVoteInfoArray);

    const tdArrayAccept = sortedArrayAccept.map((info, index) => {

      return (

        <tr key={index} style={{backgroundColor: "#99ff99"}}>
          <td data-label={info.vote}>{info.name}</td>
        </tr>

      ); //end return

    }); //end const tDArray =

    return tdArrayAccept;

  }; //end generateTD()


  tdReject() {

    var latestInd = (this.props.teamVoteInfo[this.props.missionNo].length - 1);
    var teamVoteInfoArray = this.props.teamVoteInfo[this.props.missionNo][latestInd].votingInfo;
    var sortedArrayReject = this.sortVoteArrayReject(teamVoteInfoArray);

    const tdArrayReject = sortedArrayReject.map((info, index) => {

      return (

        <tr key={index} style={{backgroundColor: "#ff80b3"}}>
          <td data-label={info.vote}>{info.name}</td>
        </tr>

      ); //end return

    }); //end const tDArray =

    return tdArrayReject;

  }; //end generateTD()




  render() {

    return (
      <>

      <table class="ui celled table team-vote-table-1" style={{display: "inline-table"}}>

        <thead>
          <tr>
            <th>Accept</th>
          </tr>
        </thead>

        <tbody>
          {this.tdAccept()}
        </tbody>

      </table>

      <table class="ui celled table team-vote-table-2" style={{display: "inline-table"}}>

        <thead>
          <tr>
            <th>Reject</th>
          </tr>
        </thead>

        <tbody>
          {this.tdReject()}
        </tbody>

      </table>


      </>
      
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
(TeamVoteTable);