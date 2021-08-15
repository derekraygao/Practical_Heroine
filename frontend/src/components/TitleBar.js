import React from 'react';
import { connect } from 'react-redux';

import {showRoomControlBool} from 'actions/showRoomControlBool.js';
import { homePageRedirect } from 'variablesAndFunctions/homePageRedirect.js';


import './css/TitleBar.css';


class TitleBar extends React.Component {


  titleContent() {

    if ([0, 10, 11].includes(this.props.gamePhase)) {
      return "Practical Hero(ine)";
    };


    return (this.props.name + " : " + this.props.role);

  };



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

      case 9:
        return ("Game Phase 9: If the Villains correctly deduce the identity of the Princess (John), then the Villains win!");

      case 10:
        return ("Game Over! When the room has a minimum of 6 players and everyone has signaled their 'Ready' status, a new game will begin!");

      case 11:
        return ("Whoops! The game ended because too many players left. When you have 6 'Ready' players once again, a new game will start!");

      case 12:
        return ("You rejoined the room! You'll be added back into the game starting next game phase.");

      default:
        return ""; 


    }; //end switch



  }; //end descriptionContent


  clickRoomControl = () => {

    this.props.updateRoomControlBool(true);

  };


  clickExit = () => {

     homePageRedirect();

  };





	render() {

		return (
            <div className="title-bar-container">

                <div className="title-bar-title">
                    <span>
                      {this.titleContent()}
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


