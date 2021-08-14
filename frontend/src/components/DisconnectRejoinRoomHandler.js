import React from 'react';
import { connect } from 'react-redux';


import {playerName} from 'actions/playerName.js';
import {playerRole} from 'actions/role.js';
import {gamePhase} from 'actions/gamePhase.js';
import {teamLeader} from 'actions/teamLeader.js';
import {missionNumber} from 'actions/missionNumber.js';
import {listOfPlayers} from 'actions/listOfPlayers.js';
import {missionTeamList} from 'actions/missionTeamList.js';
import {villainList} from 'actions/villainList.js';

import {roomInfo} from 'actions/roomInfo.js';

import {teamVoteInfo} from 'actions/teamVoteInfo.js';
import {replaceMissionResultsHistory} from 'actions/replaceMissionResultsHistory.js';

import {characterPowerHistory} from 'actions/characterPowerHistory.js';
import {newCharacterStatus} from 'actions/newCharacterStatus.js';


import socket from 'Socket.js';



class DisconnectRejoinRoomHandler extends React.Component {

  state = {


          };



  componentDidMount = () => {

    socket.on("Rejoin The Room", (info) => {

      this.props.updateGamePhase(12);

      this.props.updatePlayerRole(info.role);
      this.props.updatePlayerName(info.name);
      this.props.setPlayerList(info.playerList);
      this.props.setVillainList(info.villainList);
      this.props.addTeamLeader(info.teamLeader);
      this.props.setMissionNumber(info.missionNumber);
      this.props.addMissionTeam(info.missionTeam);

      this.props.setAllRoomInfo(info.roomInfo, "All");


      this.props.addAllTeamVoteInfo(info.teamVoteInfo);
      this.props.replaceMissionResultsHistory(info.missionResultsHistory);

      this.props.addCharacterStatus(info.characterStatus);

      var PH = localStorage.getItem("Character Power History");
      PH = JSON.parse(PH);
      this.props.setPH(PH);


    }); //end socket.on("Rejoin The Room")




    /* gamePhase 2 is handled separately by server (if team leader disconnects)*/
    socket.on("Room Master Check Server If Game Should Proceed Upon Player Disconnect", (gamePhase) => {


      switch (gamePhase) {

        case 1:
          socket.emit("End Power Phase 1");
          break;


        case 3:
          socket.emit("Vote on Team Leader's Proposed Team", "Server Check");
          break;


        case 4:

          if (this.wasTeamAccepted()) {
            socket.emit("Ready To Start Power Phase 2 and Game Phase 5");
          } else {
            socket.emit("Ready For Next Team Leader Proposal After Failed One");
          };

          break;


        case 5:
          socket.emit("End Power Phase 2. Start Mission Voting And Game Phase 6");
          break;


        case 6:
          socket.emit("Vote on Mission", "Server Check");
          break;


        case 7:
          socket.emit("Ready For Next Round/Mission");
          break;


        case 8:
          socket.emit("End Night Phase");
          break;


        case 9:
          socket.emit("Submit Villain Guess On The Princess's Identity", "Server Check");
          break;


        default:
          break;

      }; //end switch



    }); //end socket.on("Room Maser Check Server...")



  }; //end componentDidMount



  componentWillUnmount = () => {


  };



  wasTeamAccepted = () => {

    var {teamInfo, missionNumber} = this.props;

    //most recent teamVoteInfo Index
    var index = (teamInfo[missionNumber].length - 1);
    
    /* since it's gamePhase 4, should always have something, but
    just in case, check if index is not -1 */
    if (index == -1) { return true; };

    if (["Absolute Accepted", "Accepted"].includes(teamInfo[missionNumber][index]["result"])) {

      return true;

    };


    //if rejected
    return false;

  }; //end wasTeamAcceptedOrRejected()



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
            gamePhase: state.gamePhase,
            missionNumber: state.missionNumber,
            teamInfo: state.teamVoteInfo,
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
    setMissionNumber: missionNumber,
    addMissionTeam: missionTeamList,
    setPH: characterPowerHistory,
    addCharacterStatus: newCharacterStatus,
    setAllRoomInfo: roomInfo,
    addAllTeamVoteInfo: teamVoteInfo,
    replaceMissionResultsHistory: replaceMissionResultsHistory,

  })
(DisconnectRejoinRoomHandler);