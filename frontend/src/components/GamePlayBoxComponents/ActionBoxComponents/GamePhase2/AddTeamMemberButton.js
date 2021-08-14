import React from 'react';
import { connect } from 'react-redux';

import './AddTeamMemberButton.css';

import {proposedMissionTeamMember} from 'actions/proposedMissionTeamMember.js';
import {calculateNumberofTeamMembers} from 'calculateNumberofTeamMembers.js';




class AddTeamMemberButton extends React.Component {

  clickedButton = () => {

    var teamSize = calculateNumberofTeamMembers(
      this.props.missionNumber, this.props.playerList.length);

    this.props.addMissionMember(this.props.playerName, teamSize);

  };

  buttonColor = () => {

    if (this.props.missionTeam.includes(this.props.playerName)) {
      return "yellow";
    } else {
      return "";
    };

  };


  render() {

    return (

      <button 
        className={`ui ${this.buttonColor()} button add-team-member-class`}
        onClick={this.clickedButton}
      >
        {this.props.playerName}
      </button>
      

    ); //end return

  }; //end render()



}; //end class ActionBox



const mapStateToProps = (state) => {
  
  return (
         {  
            missionTeam: state.missionTeam,
            missionNumber: state.missionNumber,
            playerList: state.playerList
         }
  );

};


export default connect(mapStateToProps, 
  {addMissionMember: proposedMissionTeamMember})
(AddTeamMemberButton);