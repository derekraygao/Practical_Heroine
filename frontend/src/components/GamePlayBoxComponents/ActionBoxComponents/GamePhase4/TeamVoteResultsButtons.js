import React from 'react';
import { connect } from 'react-redux';

import './TeamVoteResultsButtons.css';

class TeamVoteResultsButtons extends React.Component {

  componentDidMount = () => {

  
  };


  sortVoteArray = (arr) => {

    if (["Absolute Yes", "Absolute No"].includes(arr[0].vote)) 
      { return arr; };

    var sortedArray = [];

    for (let i = 0; i < arr.length; i++) {

      if (arr[i].vote === "Accept") {
        sortedArray.push(arr[i]);
      };

    };


    for (let i = 0; i < arr.length; i++) {

      if (arr[i].vote === "Reject") {
        sortedArray.push(arr[i]);
      };

    };


    return sortedArray;

  }; //end sortVoteArray


  voteButtonColor = (info) => {

    switch (info.vote) {

      case "Accept":
        return "green";

      case "Reject":
        return "red";

      case "Absolute Yes":
        return "teal";

      case "Absolute No":
        return "orange";

      default:
        return "";

    }; //end switch

  }; //end voteButtonColor()


  voteButtonText = (info) => {

    switch (info.vote) {

      case "Accept":
        return (info.name + " (+)");

      case "Reject":
        return (info.name + " (-)");

      case "Absolute Yes":
        return (info.name + " (++)");

      case "Absolute No":
        return (info.name + " (--)");

      default:
        return info.name;

    }; //end switch

  };


  voteButtons() {

    var latestInd = (this.props.teamVoteInfo[this.props.missionNo].length - 1);
    var teamVoteInfoArray = this.props.teamVoteInfo[this.props.missionNo][latestInd].votingInfo;
    
    var sortedArray = this.sortVoteArray(teamVoteInfoArray);
  

    const voteButtonsArr = sortedArray.map((info, index) => {

      return (

         <button
          className={`ui ${this.voteButtonColor(info)} button team-vote-result-button`}
         >
          {this.voteButtonText(info)}
         </button>  

      ); //end return

    }); //end const voteButtonsArr =


    return voteButtonsArr;

  }; //end voteButtons()



  render() {

    return (

      this.voteButtons()
      
    ); //end return

  }; //end render()



}; //end class TeamVoteResultsButtons



const mapStateToProps = (state) => {
  
  return (
         {  
            teamVoteInfo: state.teamVoteInfo,
            missionNo: state.missionNumber,
            teamLeader: state.teamLeader,
            missionTeam: state.missionTeam,
         }
  );

};


export default connect(mapStateToProps, {})
(TeamVoteResultsButtons);