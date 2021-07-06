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
import {missionNumber} from '../actions/missionNumber.js';
import {missionResultsHistory} from '../actions/missionResultsHistory.js';
import {mainMenuSelection} from '../actions/mainMenuSelection.js';
import {gameEndScenario} from '../actions/gameEndScenario.js';
import {timer} from '../actions/timer.js';

/*for character specific redux store */
import {rangerSenseArray} from '../actions/rangerSenseArray.js';


import './css/App.css';
import TitleBar from './TitleBar.js';
import MenuBar from './MenuBar.js';
import ChatBox from './MenuBarBoxComponents/ChatBox.js';
import NotesBox from './MenuBarBoxComponents/NotesBox.js';
import PlayerAndResultsBox from './MenuBarBoxComponents/PlayerAndResultsBox.js';
import GamePlayBox from './GamePlayBox.js';



import socket from '../Socket.js';
import formatArrayIntoString from 'formatArrayIntoString.js';
import formatSeerPowerMessage from 'formatSystemMessages/formatSeerPowerMessage.js';
import formatAuraKnightPowerMessage from 'formatSystemMessages/formatAuraKnightPowerMessage.js';



//for power phase 8 (night phase) timer
var P8Interval;

class App extends React.Component {

  state = {

  };

  componentWillUnmount = () => {

    clearInterval(P8Interval);

  }; //end componentWillUnmount


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

    //for very first game phase 1, it's trigged by start game
    socket.on("Start Game Phase 1: Power Phase 1", () => {

      setTimeout(() => this.props.updateGamePhase(1), 1000);
      setTimeout(() => this.props.updateMainMenuSelection("video"), 800);

      this.props.updateTimerSeconds(600);

    }); //end socket.on(Start Game Phase 1)


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
      console.log(teamVoteInfo);

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

        this.props.updateTimerSeconds(2);

      } else {

        this.props.updateTimerSeconds(40);

      };


    }); //end socket.on("Start Game Phase 5")


    socket.on("Start Game Phase 6: Start Mission", () => {

      setTimeout(() => this.props.updateGamePhase(6), 1000);

      this.props.updateTimerSeconds(20);

    }); //end socket.on("Start Game Phase 6")


    socket.on("Update Mission Results", (missionResultsObj) => {

      var currentMissionNo = this.props.missionNumber;

      this.props.updateMissionHistory(missionResultsObj, currentMissionNo);

    });


    socket.on("Start Game Phase 7: Mission Ended", () => {

      console.log("Starting Game Phase 7 activated in app");
      console.log("App.js mission history game phase 7");
      console.log(this.props.missionHistory);

      setTimeout(() => this.props.updateGamePhase(7), 1000);


    }); //end socket.on("Start Game Phase 6")



    socket.on("Start Game Phase 8: Night Phase", (_missionNo) => {

      setTimeout(() => this.props.updateGamePhase(8), 1000);
      this.props.updateMissionNumber(_missionNo);
      this.props.updateTimerSeconds(2);
      this.props.updateMainMenuSelection("player & results");

      //setTimeout(() => console.log("phase 8 timer is: " + this.props.timer), 1000);

      setTimeout(() => P8Interval = setInterval(this.powerPhase8TimerCountdown, 1000), 1000);
    
    }); //end socket.on("Start Game Phase 8")



    socket.on("Start Game Phase 9: Heroes Win! Villains' Last Chance.", (vList) => {

      setTimeout(() => this.props.updateGamePhase(9), 1000);
      
      this.props.updateVillainList(vList);

      //need to do this to get last team/mission info to display
      var missionPlusOne = (this.props.missionNumber + 1);
      this.props.updateMissionNumber(missionPlusOne);

    });



    //allInfo = [{name:, role:, team:}, {}]
    socket.on("Start Game Phase 10: Game Over. Heroes Win!", (allInfo) => {

      setTimeout(() => this.props.updateGamePhase(10), 1000);

      this.props.updateGameEndScenario(
        {winners: "heroes", scenario: ""}
      );

      this.props.addSystemMessage({type: "big and orange", message: "The Heroes Win!!!"});
      this.revealAllIdentitiesAndRoles(allInfo);

    });


    //allInfo = [{name:, role:, team:}, {}]
    socket.on("Start Game Phase 10: Game Over. Villains Win! Correctly Guessed Princess Identity!", 
      (allInfo) => {

      setTimeout(() => this.props.updateGamePhase(10), 1000);

      this.props.updateGameEndScenario(
        {winners: "villains", scenario: "correct guess"}
      );

      this.props.addSystemMessage(
        {
          type: "big and purple", 
          message: "The Villains Win!!! Successfully killed the Princess!"
        }
      );      

      this.revealAllIdentitiesAndRoles(allInfo);

    });


    //allInfo = [{name:, role:, team:}, {}]
    socket.on("Start Game Phase 10: Game Over. Villains Win! 5 Failed Team Proposals!", 
      (allInfo) => {

      setTimeout(() => this.props.updateGamePhase(10), 1000);

      this.props.updateGameEndScenario(
        {winners: "villains", scenario: "5 failed"}
      );


      this.props.addSystemMessage(
        {
          type: "big and purple", 
          message: "The Villains Win!!! 5 Failed Team Proposals!"
        }
      );  

      this.revealAllIdentitiesAndRoles(allInfo);

    });



    /*Add System Messages to redux store */

    socket.on("Add System Message", (messageObj) => {

      this.props.addSystemMessage(messageObj);

    });




    /*Redux Store for Character-specific Power Info */

    socket.on("Receive Ranger Sense Array", (senseArr) => {

      this.props.updateRangerSenseArray(senseArr);

    });


    socket.on("Scry Info From Server", (scryInfo) => {

      var scryMess = formatSeerPowerMessage(scryInfo, this.props.missionNumber);
      
      this.addSysMess("power", scryMess);

    }); //end socket.on("Scry Info From Server")



    socket.on("Aura Sense Result", (auraInfo) => {

      var auraMess = formatAuraKnightPowerMessage(auraInfo);
      this.addSysMess("power", auraMess);

    }); //end socket.on("Aura Sense Result")


  }; //end componentDidMount()


  //allInfo = [{name:, role:, team:}, {}]
  revealAllIdentitiesAndRoles = (allInfo) => {

    var heroesArr = [];
    var villainsArr = [];

    //do this so heroes & villains are separated
    for (var i = 0; i < allInfo.length; i++) {

      if (allInfo[i].team === "heroes") {
        heroesArr.push(allInfo[i]);
      } else {
        villainsArr.push(allInfo[i]);
      };

    }; //end for


    this.props.addSystemMessage(
      {
        type: "big font",
        message: "Identities & Roles are all revealed!"
      }
    );


    for (i = 0; i < heroesArr.length; i++) {

      this.props.addSystemMessage(
        {
          type: "normal",
          message: (heroesArr[i].name + ": " + heroesArr[i].role)
        }
      );

    }; //end for 


    for (i = 0; i < villainsArr.length; i++) {

      this.props.addSystemMessage(
        {
          type: "normal",
          message: (villainsArr[i].name + ": " + villainsArr[i].role)
        }
      );

    }; //end for 


  }; //end revealAllIdentitiesAndRoles()



  powerPhase8TimerCountdown = () => {

    var newTime = (this.props.timer - 1);

    if (newTime < 0) {

      clearInterval(P8Interval);

      socket.emit("End Night Phase");

    } else {

      this.props.updateTimerSeconds(newTime);

    };

  }; //end timerCountdown()



  addSysMess = (_type, _message) => {

    this.props.addSystemMessage({type: _type, message: _message})

  };


  //night phase 8 has different layout - no video chat
  //everything else takes up entire width below the menu bars
  whichGridContainer = () => {

    if (this.props.gamePhase === 8) {
      return "grid-container-main-night";
    };

    return "grid-container-main"

  };  


  gamePlayBoxArea = () => {

    switch (this.props.gamePhase) {

      case 0:
        return <div></div>;

      default:
        return <GamePlayBox />;

    }; //end switch

  }; //end gamePlayBoxArea


  render() {

    return (

      <div className={this.whichGridContainer()}>

        <TitleBar />
        <MenuBar />

        <ChatBox />
        <NotesBox />
        <PlayerAndResultsBox />
        
        {this.gamePlayBoxArea()}



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
      gamePhase: state.gamePhase,
      missionNumber: state.missionNumber,
      teamLeader: state.teamLeader,
      missionTeam: state.missionTeam,
      playerList: state.playerList,
      villainList: state.villainList,
      missionHistory: state.missionHistory,
      mainMenuSelection: state.mainMenuSelection,
      gameEndScenario: state.gameEndScenario,
      timer: state.timer
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
    updateMissionNumber: missionNumber,
    updateMissionHistory: missionResultsHistory,
    updateMainMenuSelection: mainMenuSelection,
    updateGameEndScenario: gameEndScenario,
    updateTimerSeconds: timer,
    updateRangerSenseArray: rangerSenseArray,
  })
(App);



var introMessage = "Remember, you can read the instructions (what to do) " 
                    + "for each game phase by clicking on the 'Instructions' " 
                    + "button directly above this box. You can also view the "
                    + "entire rules by clicking the 'Rules' button at the " 
                    + "very top right. To just see your character's own " 
                    + "abilities, click the 'Character' button on the " 
                    + "yellow orange menu bar.";