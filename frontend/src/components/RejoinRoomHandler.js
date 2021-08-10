import React from 'react';
import { connect } from 'react-redux';


import {playerName} from 'actions/playerName.js';
import {playerRole} from 'actions/role.js';
import {gamePhase} from 'actions/gamePhase.js';
import {teamLeader} from 'actions/teamLeader.js';
import {listOfPlayers} from 'actions/listOfPlayers.js';
import {missionTeamList} from 'actions/missionTeamList.js';
import {villainList} from 'actions/villainList.js';
import {teamVoteInfo} from 'actions/teamVoteInfo.js';
import {replaceMissionResultsHistory} from 'actions/replaceMissionResultsHistory.js';

import {characterPowerHistory} from 'actions/characterPowerHistory.js';
import {newCharacterStatus} from 'actions/newCharacterStatus.js';


import socket from 'Socket.js';



class RejoinRoomHandler extends React.Component {

  state = {


          };


  handleGamePhase = (gamePhase) => {

    switch (gamePhase) {

      case 2:
        this.props.updateGamePhase(2);
        break;

      case 3:
        this.props.updateGamePhase(3);
        break;


      default:
        this.props.updateGamePhase(12);
        break;

    }; //end switch


  }; //end handleGamePhase



  componentDidMount = () => {

    socket.on("Rejoin The Room", (info) => {

      this.props.updateGamePhase(12);

      this.props.updatePlayerRole(info.role);
      this.props.updatePlayerName(info.name);
      this.props.setPlayerList(info.playerList);
      this.props.setVillainList(info.villainList);
      this.props.addTeamLeader(info.teamLeader);
      this.props.addMissionTeam(info.missionTeam);


      this.props.addAllTeamVoteInfo(info.teamVoteInfo);
      this.props.replaceMissionResultsHistory(info.missionResultsHistory);

      this.props.addCharacterStatus(info.characterStatus);

      var PH = localStorage.getItem("Character Power History");
      PH = JSON.parse(PH);
      this.props.setPH(PH);


    }); //end socket.on("Rejoin The Room")



  }; //end componentDidMount


  componentWillUnmount = () => {


  };




  render() {

    return (

      <div style={{display: "none"}}></div>

    );

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


export default connect(mapStateToProps, 
  {
    updateGamePhase: gamePhase,
    updatePlayerName: playerName,
    updatePlayerRole: playerRole,
    setVillainList: villainList,
    setPlayerList: listOfPlayers,
    addTeamLeader: teamLeader,
    addMissionTeam: missionTeamList,
    setPH: characterPowerHistory,
    addCharacterStatus: newCharacterStatus,
    addAllTeamVoteInfo: teamVoteInfo,
    replaceMissionResultsHistory: replaceMissionResultsHistory,

  })
(RejoinRoomHandler);