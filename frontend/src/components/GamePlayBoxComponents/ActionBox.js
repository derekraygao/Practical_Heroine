import React from 'react';
import { connect } from 'react-redux';

import './css/ActionBox.css';

import PowerPhase1 from './ActionBoxComponents/PowerPhase1.js';
import TeamLeaderChoosingTeamPhase2 from './ActionBoxComponents/GamePhase2/TeamLeaderChoosingTeamPhase2.js';
import VoteOnProposedTeamPhase3 from './ActionBoxComponents/GamePhase3/VoteOnProposedTeamPhase3';
import ViewTeamVoteResultsPhase4 from './ActionBoxComponents/GamePhase4/ViewTeamVoteResultsPhase4';
import PowerPhase5 from './ActionBoxComponents/GamePhase5/PowerPhase5.js';
import MissionVotingPhase6 from './ActionBoxComponents/GamePhase6/MissionVotingPhase6.js';

class ActionBox extends React.Component {

  whichActionBoxComponent = () => {

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


      default:
        return <div>Error!</div>;


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