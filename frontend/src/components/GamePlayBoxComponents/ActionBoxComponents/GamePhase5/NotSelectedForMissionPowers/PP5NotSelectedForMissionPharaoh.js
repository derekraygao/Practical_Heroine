import React from 'react';
import { connect } from 'react-redux';

import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';



class PP5NotSelectedForMissionPharaoh extends React.Component {

  state = {
            usedPower: false,
          };



  submitButtonPower1 = () => {

      this.setState({usedPower: true});

      socket.emit("Forbidden Ritual");

  }; //end submitButtonPower1




  returnWhichActionAreaComponent = () => {

    return (

      <>

        <button
          className="ui button yellow PP5-margin-left"
          onClick={this.submitButtonPower1}
        >
          Perform
        </button>

      </>

    ); //end return


  }; //end returnWhichActionAreaComponent()



  render() {

    if (this.state.usedPower) {

      return (

        <div className="PP5-general-container">

          <div className="PP5-powers-menu-bar-container orange ui buttons">
            <button className="ui button"></button>
          </div> 

          <div className="PP5-general-action-area-container">
            Wait {this.props.timer} seconds 
            until {this.props.teamLeader}'s 
            team ({formatArrayIntoString(this.props.missionTeam)}) 
            completes the mission.
          </div>

        </div>


      ); //end return

    }; //end usedPower



    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          <button className="ui button">Forbidden Ritual</button>
        </div> 


        <div className="PP5-general-action-area-container">

          {this.returnWhichActionAreaComponent()}

        </div>

      </div> //end div PP5-general-container


    ); //end return

  }; //end render()



}; //end class PP5Lottie



const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            playerList: state.playerList,
            teamLeader: state.teamLeader,
            missionTeam: state.missionTeam,
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
(PP5NotSelectedForMissionPharaoh);