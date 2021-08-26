import React from 'react';
import { connect } from 'react-redux';

import './css/PlayerAndResultsBox.css';

import PlayerListTable from './PlayerAndResultsTables/PlayerListTable.js';
import MissionAndTeamResultsTable from './PlayerAndResultsTables/MissionAndTeamResultsTable.js';




class PlayerAndResultsBox extends React.Component {

  state = {


  };

  componentDidMount = () => {

  }; //end componentDidMount



  /*need this since position:fixed inherits width/height of viewport
  and no longer the parent div*/
  rulesAndInfoMenuWidth = () => {

    if (this.props.gamePhase === 8) {
      return {width: "40%"};
    };

    return {width: "60%"};

  };



  prBoxStyle = () => {

    if (this.props.mainMenuSelection === "player & results") {

      if (this.props.gamePhase === 8) {
        return {display: "grid", gridArea: "other-menu-box"};
      };

      return {display: "grid", gridArea: "chat-box"};

    }; //end if mainMenuSelection === notes

    return {display: "none"};

  }; //end displayOrNot


  render() {

    return (

      <div class="player-and-results-box-container" style={this.prBoxStyle()}>

        <div className="player-order-fixed-position-div" style={this.rulesAndInfoMenuWidth()}> 
          <span> <PlayerListTable /> </span>
        </div>

        <div className="results-box-container">
          <MissionAndTeamResultsTable />
        </div>

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

