import React from 'react';
import { connect } from 'react-redux';

import formatArrayIntoString from 'formatArrayIntoString.js';



class PP5NotSelectedForMissionFrozen extends React.Component {

 
  render() {


    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          <button className="ui button">Frozen</button>
        </div> 

        <div className="PP5-general-action-area-container">
          Wait {this.props.timer} seconds 
          until {this.props.teamLeader}'s 
          team ({formatArrayIntoString(this.props.missionTeam)}) 
          completes the mission.
        </div>

      </div>

    ); //end return


  }; //end render()



}; //end class PP5Lottie



const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            playerList: state.playerList,
            missionTeam: state.missionTeam,
            teamLeader: state.teamLeader,
            PH: state.characterPowersHistory,
            missionNumber: state.missionNumber,
            role: state.role,
            timer: state.timer
         }
  );

};


export default connect(mapStateToProps, 
  {

  }
)
(PP5NotSelectedForMissionFrozen);