import React from 'react';
import { connect } from 'react-redux';

import './css/ActionBox.css';
import './css/powerMenuYellowColorClass.css';

import PowerPhase1 from './ActionBoxComponents/GamePhase1/PowerPhase1.js';
import TeamLeaderChoosingTeamPhase2 from './ActionBoxComponents/GamePhase2/TeamLeaderChoosingTeamPhase2.js';
import VoteOnProposedTeamPhase3 from './ActionBoxComponents/GamePhase3/VoteOnProposedTeamPhase3';
import ViewTeamVoteResultsPhase4 from './ActionBoxComponents/GamePhase4/ViewTeamVoteResultsPhase4';
import PowerPhase5 from './ActionBoxComponents/GamePhase5/PowerPhase5.js';
import MissionVotingPhase6 from './ActionBoxComponents/GamePhase6/MissionVotingPhase6.js';
import ViewMissionResultsPhase7 from './ActionBoxComponents/GamePhase7/ViewMissionResultsPhase7.js';
import VillainsGuessPrincessIdentityPhase9 from './ActionBoxComponents/GamePhase9/VillainsGuessPrincessIdentityPhase9.js';
import GameOverPhase10 from './ActionBoxComponents/GamePhase10/GameOverPhase10.js';
import TooFewPlayersPhase11 from './ActionBoxComponents/GamePhase11/TooFewPlayersPhase11.js';
import RejoinedTheGamePhase12 from './ActionBoxComponents/GamePhase12/RejoinedTheGamePhase12.js';




class ActionBox extends React.Component {

  whichActionBoxComponent = () => {

    console.log("inside ActionBox, gamePhase is: " + this.props.gamePhase);

    switch (this.props.gamePhase) {

      case 0: 

        return <div></div>;

      case 1:

        return <PowerPhase1 />;

      case 2:

        return <TeamLeaderChoosingTeamPhase2 />;

      case 3:

        return <VoteOnProposedTeamPhase3 />;

      case 4:

        return <ViewTeamVoteResultsPhase4 />;

      case 5:

        return <PowerPhase5 />;

      case 6:

        return <MissionVotingPhase6 />;

      case 7:

        return <ViewMissionResultsPhase7 />;

      case 9:
        
        return <VillainsGuessPrincessIdentityPhase9 />;

      case 10:

        return <GameOverPhase10 />;

      case 11:
        return <TooFewPlayersPhase11 />;

      case 12:
        return <RejoinedTheGamePhase12 />;


      default:
        return <div>Error! Inside ActionBox.js</div>;


    }; //end switch



  }; //end whichActionBoxComponent()



  render() {

    return (

      <div className="action-box-container">
      
        {this.whichActionBoxComponent()}

      </div>


    ); //end return

  }; //end render()



}; //end class ActionBox



const mapStateToProps = (state) => {
  
  return (
         { 
            role: state.role,
            gamePhase: state.gamePhase
         }
  );

};


export default connect(mapStateToProps, {})(ActionBox);