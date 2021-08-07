import React from 'react';
import { connect } from 'react-redux';

import {showRoomControlBool} from 'actions/showRoomControlBool.js';

import './css/TitleBar.css';


class TitleBar extends React.Component {


  descriptionContent() {

    switch(this.props.gamePhase) {

      case 0: 
        return ("When the room has a minimum of 6 players and everyone has indicated they're ready, the game will begin!");

      case 1:
        return ("Game Phase 1 (Time Left): " + this.props.timer);

      case 2:
        return ("Game Phase 2: Team Leader Choosing Team");

      case 3:
        return ("Game Phase 3: Vote On The Proposed Team");

      case 4:
        return ("Game Phase 4: View Team Voting Results");

      case 5:

        if (this.props.missionTeam.includes(this.props.name)) {
          return ("Game Phase 5 (Time Left): " + this.props.timer);
        } else {
          return ("Game Phase 5 + 6 (Time Left): " + this.props.timer);
        };

      case 6:
        return ("Game Phase 6 (Time Left): " + this.props.timer);

      case 7:
        return ("Game Phase 7: View Mission Results");

      case 8:
        return ("Night Phase 8 (Time Left): " + this.props.timer);

      default:
        return ""; 


    }; //end switch



  }; //end descriptionContent


  clickRoomControl = () => {

    this.props.updateRoomControlBool(true);

  };

  clickExit = () => {

     window.location.replace("http://localhost:3000");

  };





	render() {

		return (
            <div className="title-bar-container">

                <div className="title-bar-title">
                    <span>
                      {this.props.name + " : " + this.props.role}
                    </span>
                </div>


                <div className="title-bar-description">
                  <span>{this.descriptionContent()}</span>
                </div>


                <div className="title-bar-buttons">

                  <button className="ui orange button" onClick={this.clickRoomControl}>
                    Room Control
                  </button>

                  <button className="ui red button" onClick={this.clickExit}>
                    Exit
                  </button>

                </div>


            </div>

		); //end return



	}; //end render()






}; //end class TitleBar


const mapStateToProps = (state) => {
  
  return (
    { 
      name: state.name,
      role: state.role,
      gamePhase: state.gamePhase,
      missionTeam: state.missionTeam,
      timer: state.timer
    }
  );

};


export default connect(mapStateToProps, 
  {
    updateRoomControlBool: showRoomControlBool,
  }
) 
(TitleBar);


