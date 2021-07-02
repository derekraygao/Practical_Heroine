import React from 'react';
import { connect } from 'react-redux';


import {playerName} from '../actions/playerName.js';
import {playerRole} from '../actions/role.js';
import {gamePhase} from '../actions/gamePhase.js';
import {listOfPlayers} from '../actions/listOfPlayers.js';
import {villainList} from '../actions/villainList.js';
import {systemMessages} from '../actions/systemMessages.js';
import {teamLeader} from '../actions/teamLeader.js';
import {missionTeamList} from '../actions/missionTeamList.js';
import {teamVoteInfo} from '../actions/teamVoteInfo.js';
import {numberOfFailedTeamProposals} from '../actions/numberOfFailedTeamProposals.js';
import {timer} from '../actions/timer.js';


import './css/App.css';
import TitleBar from './TitleBar.js';
import MenuBar from './MenuBar.js';
import GamePlayBox from './GamePlayBox.js';

import socket from '../Socket.js';
import formatArrayIntoString from 'formatArrayIntoString.js';







class App extends React.Component {

  state = {

  };


  componentDidMount = () => {

    socket.emit("TESTING ONLY: Ready For New Game");

    socket.on("From Server: Random Name For Testing", (randomName) => {

      this.props.addPlayerName(randomName);
      console.log(this.props.name);

    }); //end From Server: Random Name....



    socket.on("Start Game", (obj) => {

      setTimeout(() => this.props.updateGamePhase(1), 1000);
      this.props.addPlayerRole(obj.role);
      this.props.updatePlayerList(obj.listOfPlayers);


      var sysMessage = ("Hi " + this.props.name + ", your role is '" + 
            obj.role + "' and you are on the " + obj.team + " team.");

      this.props.addSystemMessage(
        {
          type: "normal",
          message: sysMessage
        }
      );

      this.props.addSystemMessage(
        {
          type: "intro message",
          message: introMessage
        }
      );


    }); //end socket.on("Start Game")


    socket.on("Reveal Villains To Princess", (villainsArr) => {

      var villainString = "Princess, the villains are: " + formatArrayIntoString(villainsArr);

      this.props.addSystemMessage({type: "normal", message: villainString});

    });


    socket.on("Reveal Princess Identity To Marcus", (princessArr) => {

      var princessIdentityString = "Marcus, the princess's identity is: " + 
                      formatArrayIntoString(princessArr);

      this.props.addSystemMessage({type: "normal", message: princessIdentityString});
      
    });


    socket.on("Set Villains List For Villains", (villainsArr) => {

      this.props.updateVillainList(villainsArr);

      var villainString = "Villains! Your team is composed of: " + 
                           formatArrayIntoString(this.props.villainList);

      this.props.addSystemMessage({type: "normal", message: villainString});
      
    });



    socket.on("Start Game Phase 2: Team Leader Choosing A Team", (teamLeaderName) => {

      setTimeout(() => this.props.updateGamePhase(2), 1000);
      this.props.updateTeamLeader(teamLeaderName);
      this.props.updateMissionTeam([]);

      //this.props.missionTeam is cleared in componentDidMount in game phase 2 component

    });


    socket.on("Start Game Phase 3: Set Team Leader's Proposed Team", (teamArr) => {

      setTimeout(() => this.props.updateGamePhase(3), 1000);
      this.props.updateMissionTeam(teamArr);


    });


    socket.on("Start Game Phase 4: Team Was Accepted!", (teamVoteInfo) => {

      setTimeout(() => this.props.updateGamePhase(4), 1000);
      this.props.updateTeamVoteInfo(teamVoteInfo);

    });


    socket.on("Start Game Phase 4: Team Was Rejected!", (obj) => {

      setTimeout(() => this.props.updateGamePhase(4), 1000);
      this.props.updateTeamVoteInfo(obj.teamInfo);
      this.props.updateFailedProposalsNumber(obj.numOfFailedTeamProposals);

    });


    socket.on("Start Game Phase 5: Power Phase 2", () => {

      setTimeout(() => this.props.updateGamePhase(5), 1000);

      var _teamArr = this.props.missionTeam;
      var _name = this.props.name;

      if (_teamArr.includes(_name)) {

        console.log("timer 20 seconds");

        this.props.updateTimerSeconds(2);

      } else {

        console.log("timer 40 seconds");

        this.props.updateTimerSeconds(40);

      };


    }); //end socket.on("Start Game Phase 5")


    socket.on("Start Game Phase 6: Start Mission", () => {

      console.log("Starting Game Phase 6 activated in app");

      setTimeout(() => this.props.updateGamePhase(6), 1000);

      this.props.updateTimerSeconds(20);

    }); //end socket.on("Start Game Phase 6")






  }; //end componentDidMount()


  render() {

    return (

      <div className="grid-container-main">

        <TitleBar />
        <MenuBar />
        <GamePlayBox />



      </div> //end grid-container

    ); //end return


  }; //end render()



}; //end class App


//by convention, keep the function name mapStateToProps, but can be named anything
//state is all of the data within our redux store
//could be called getMyState()
const mapStateToProps = (state) => {
  
  return (
    { 
      name: state.name,
      role: state.role,
      teamLeader: state.teamLeader,
      missionTeam: state.missionTeam,
      playerList: state.playerList,
      villainList: state.villainList
    }
  );

};


export default connect(mapStateToProps, 
  {
    addPlayerName: playerName,
    addPlayerRole: playerRole,
    updateGamePhase: gamePhase,
    addSystemMessage: systemMessages,
    updatePlayerList: listOfPlayers,
    updateVillainList: villainList,
    updateTeamLeader: teamLeader,
    updateMissionTeam: missionTeamList,
    updateTeamVoteInfo: teamVoteInfo,
    updateFailedProposalsNumber: numberOfFailedTeamProposals,
    updateTimerSeconds: timer,
  })
(App);



var introMessage = "Remember, you can read the instructions (what to do) " 
                    + "for each game phase by clicking on the 'Instructions' " 
                    + "button directly above this box. You can also view the "
                    + "entire rules by clicking the 'Rules' button at the " 
                    + "very top right. To just see your character's own " 
                    + "abilities, click the 'Character' button on the " 
                    + "yellow orange menu bar.";