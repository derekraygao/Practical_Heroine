import React from 'react';
import { connect } from 'react-redux';

import './css/ActionBox.css';

import PowerPhase1 from './ActionBoxComponents/PowerPhase1.js';
import TeamLeaderChoosingTeamPhase2 from './ActionBoxComponents/GamePhase2/TeamLeaderChoosingTeamPhase2.js';





class ActionBox extends React.Component {

  whichActionBoxComponent = () => {

    switch (this.props.gamePhase) {

      case 0: 

        return <div></div>;

      case 1:

        return <PowerPhase1 />;

      case 2:

        return <TeamLeaderChoosingTeamPhase2/>;


      default:
        return <div></div>;


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