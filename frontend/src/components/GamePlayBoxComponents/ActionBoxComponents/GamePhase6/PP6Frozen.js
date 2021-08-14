import React from 'react';
import { connect } from 'react-redux';

import {timer} from 'actions/timer.js';
import { systemMessages } from 'actions/systemMessages.js';

import socket from 'Socket.js';

import NormalMissionVoteButtons from './PowerPhase6Components/NormalMissionVoteButtons.js';




class PP6Frozen extends React.Component {



  render() {

    return (

      <div className="PP6-general-container">

        <div className="PP6-powers-menu-bar-container orange ui buttons">
          <button className="ui button">Vote On Mission (Frozen)</button>
        </div>  


        <div className="PP6-general-action-area-container">

          <NormalMissionVoteButtons voted={this.props.voted} />

        </div>

      </div>

    ); //end return

  }; //end render()



}; //end class MissionVotingPhase6



const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            role: state.role,
            missionNumber: state.missionNumber,
            teamLeader: state.teamLeader,
            missionTeam: state.missionTeam,
            timer: state.timer,
            missionVoteTab: state.missionVoteTab,
         }
  );

};


export default connect(mapStateToProps, 
  {
    updateTimer: timer,
    addSystemMessage: systemMessages
  }
)
(PP6Frozen);

