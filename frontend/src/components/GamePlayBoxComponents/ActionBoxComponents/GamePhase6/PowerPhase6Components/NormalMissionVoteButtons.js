import React from 'react';
import { connect } from 'react-redux';
import { systemMessages } from 'actions/systemMessages.js';

import './css/NormalMissionVoteButtons.css';

import socket from 'Socket.js';



class NormalMissionVoteButtons extends React.Component {


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

        <>

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

        </>   

    ); //end return

  }; //end render()



}; //end class NormalMissionVoteButtons



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


export default connect(mapStateToProps, 
  {addSystemMessage: systemMessages})
(NormalMissionVoteButtons);