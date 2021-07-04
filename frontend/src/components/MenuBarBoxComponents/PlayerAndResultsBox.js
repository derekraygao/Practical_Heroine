import React from 'react';
import { connect } from 'react-redux';

import socket from 'Socket.js';

import './css/PlayerAndResultsBox.css';

import PlayerListTable from './PlayerAndResultsTables/PlayerListTable.js';
import MissionAndTeamResultsTable from './PlayerAndResultsTables/MissionAndTeamResultsTable.js';

class PlayerAndResultsBox extends React.Component {

  state = {


  };

  componentDidMount = () => {

  }; //end componentDidMount


  prBoxStyle = () => {

    if (this.props.mainMenuSelection === "player & results") {

      if (this.props.gamePhase === 8) {
        return {display: "flex", gridArea: "other-menu-box"};
      };

      return {display: "flex", gridArea: "chat-box"};

    }; //end if mainMenuSelection === notes

    return {display: "none"};

  }; //end displayOrNot


  render() {

    return (

      <div class="player-and-results-box-container" style={this.prBoxStyle()}>

        <PlayerListTable />
        <MissionAndTeamResultsTable />

      </div>

    ); //end return


  }; //end render


}; //end PlayerAndResultsBox()



const mapStateToProps = (state) => {
  
  return (
    { 
      gamePhase: state.gamePhase,
      mainMenuSelection: state.mainMenuSelection
    }
  );

};


export default connect(mapStateToProps, 
  {

  })
(PlayerAndResultsBox);

