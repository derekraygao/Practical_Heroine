import React from 'react';
import { connect } from 'react-redux';
import { systemMessages } from 'actions/systemMessages.js';

import './css/NormalMissionVoteTab.css';

import socket from 'Socket.js';



class NormalMissionVoteTab extends React.Component {


  successClick = () => {

    socket.emit("Vote on Mission", "Success");
    this.props.voted("Success");

  };


  failClick = () => {

    socket.emit("Vote on Mission", "Fail");
    this.props.voted("Fail");

  };



  render() {

    return (

      <div className="normal-mission-vote-container">

        <button 
          className="ui green button"
          onClick={this.successClick}
        >
          Success
        </button>

        <button 
          className="ui red button"
          onClick={this.failClick}
        >
          Failure
        </button>

      </div>      

    ); //end return

  }; //end render()



}; //end class NormalMissionVoteTab



const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            role: state.role,
            teamLeader: state.teamLeader,
            missionTeam: state.missionTeam,
            timer: state.timer
         }
  );

};


export default connect(mapStateToProps, {addSystemMessage: systemMessages})(NormalMissionVoteTab);