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

import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {updateCharacterStatus} from 'actions/updateCharacterStatus.js';
import {newCharacterStatus} from 'actions/newCharacterStatus.js';


import {villainChatMessage} from 'actions/villainChatMessage.js';
import {esperChatMessage} from 'actions/esperChatMessage.js';
import {jailerChatMessage} from 'actions/jailerChatMessage.js';


import {crossExamBool} from '../actions/crossExamBool.js';


import {roomInfo} from 'actions/roomInfo.js';

/*for character specific redux store */
import {rangerSenseArray} from '../actions/rangerSenseArray.js';


import {resetForNewGame} from 'actions/resetForNewGame.js';


import './css/App.css';
import TitleBar from './TitleBar.js';
import MenuBar from './MenuBar.js';
import ChatBox from './MenuBarBoxComponents/ChatBox.js';
import NotesBox from './MenuBarBoxComponents/NotesBox.js';
import PlayerAndResultsBox from './MenuBarBoxComponents/PlayerAndResultsBox.js';
import PowersInfoBox from './MenuBarBoxComponents/PowersInfoBox.js';
import JitsiVideoBox from './MenuBarBoxComponents/JitsiVideoBox.js';


import GamePlayBox from './GamePlayBox.js';
import EnterNameBox from './EnterNameBox.js';

import RoomControlBox from './RoomControlComponents/RoomControlBox.js';
import CrossExaminationBox from './CrossExaminationBox.js';

import socket from '../Socket.js';
import formatArrayIntoString from 'formatArrayIntoString.js';
import formatSeerPowerMessage from 'formatSystemMessages/formatSeerPowerMessage.js';
import formatAuraKnightPowerMessage from 'formatSystemMessages/formatAuraKnightPowerMessage.js';


/*sound effects */
var mirrorWorldAudio = new Audio(process.env.PUBLIC_URL + "/sounds/Mirror_World.mp4");
mirrorWorldAudio.volume = 0.1;

var singAudio = new Audio(process.env.PUBLIC_URL + "/sounds/Sing.mp4");
singAudio.volume = 0.2;

var lullabyAudio = new Audio(process.env.PUBLIC_URL + "/sounds/Lullaby.mp4");
lullabyAudio.volume = 0.2;

var perishSongAudio = new Audio(process.env.PUBLIC_URL + "/sounds/Perish_Song.mp3");
perishSongAudio.volume = 0.2;

var psychologistAudio = new Audio(process.env.PUBLIC_URL + "/sounds/Psychologist.mp3");
psychologistAudio.volume = 0.15;

var darkDestinyAudio = new Audio(process.env.PUBLIC_URL + "/sounds/Dark_Destiny.mp3");
darkDestinyAudio.volume = 0.15;

var scientistExposeAudio = new Audio(process.env.PUBLIC_URL + "/sounds/Scientist_Expose.mp3");
scientistExposeAudio.volume = 0.15;

var spyAudio = new Audio(process.env.PUBLIC_URL + "/sounds/Invisible_Spy.mp3");
spyAudio.volume = 0.15;

var starPrismPowerAudio = new Audio(process.env.PUBLIC_URL + "/sounds/Star_Prism_Power.mp3");
starPrismPowerAudio.volume = 0.1;

var bombExplosionAudio = new Audio(process.env.PUBLIC_URL + "/sounds/Explosion.mp3");
bombExplosionAudio.volume = 0.15;

var hurricaneAudio = new Audio(process.env.PUBLIC_URL + "/sounds/Hurricane.mp3");
hurricaneAudio.volume = 0.10;

var absoluteAcceptanceAudio = new Audio(process.env.PUBLIC_URL + "/sounds/Absolute_Acceptance.mp4");
absoluteAcceptanceAudio.volume = 0.10;

var absoluteRejectionAudio = new Audio(process.env.PUBLIC_URL + "/sounds/Absolute_Rejection.mp4");
absoluteRejectionAudio.volume = 0.10;



/*Game Over Music */
var hVictory = new Audio(process.env.PUBLIC_URL + "/sounds/Heroes_Victory.mp4");
hVictory.volume = 0.15;

var vVictoryGeneral = new Audio(process.env.PUBLIC_URL + "/sounds/Villains_Victory_General.mp3");
vVictoryGeneral.volume = 0.02;

var vVictoryDarkDestiny = new Audio(process.env.PUBLIC_URL + "/sounds/Villains_Victory_Dark_Destiny.mp3");
vVictoryDarkDestiny.volume = 0.15;





function playSong(song) {

  switch (song) {

    case "Absolute Acceptance":
      absoluteAcceptanceAudio.play();
      break;

    case "Absolute Rejection":
      absoluteRejectionAudio.play();
      break;

    case "Lullaby":
      lullabyAudio.play();
      break;

    case "Perish Song":
      perishSongAudio.play();
      break;

    case "Dark Destiny":
      darkDestinyAudio.play();
      break;

    case "Scientist Expose":
      scientistExposeAudio.play();
      break;

    case "Invisible Spy":
      spyAudio.play();
      break;

    case "Star Prism Power":
      starPrismPowerAudio.play();
      break;

    case "Bomb Explosion":
      bombExplosionAudio.play();
      break;

    case "Hurricane":
      hurricaneAudio.play();

    default:
      break;

  }; //end switch

}; //end function playSong()


//for power phase 8 (night phase) timer
var P8Interval;




class App extends React.Component {

  state = {
    jitsiKey: 1, /*need this to force jitsi video component to re-render when you get a new room name */
  };

  componentWillUnmount = () => {

    clearInterval(P8Interval);

  }; //end componentWillUnmount


  componentDidMount = () => {


    socket.on("connect", () => {

      console.log("CONNECTED TO SERVER");

    });


    /*this is the function that automatically gets you past 
    gamePhase 0 and starts game without entering names*/

    socket.emit("TESTING ONLY: Ready For New Game");


    socket.on("Add Player Name", (name) => {

      this.props.addPlayerName(name);

    }); //end From Server: Random Name....



    socket.on("Start Game", (obj) => {

      setTimeout(() => this.props.updateGamePhase(1), 1000);
      this.props.addPlayerRole(obj.role);
      this.props.updatePlayerList(obj.listOfPlayers);


      this.props.addSystemMessage(
        {
          type: "intro message",
          message: introMessage
        }
      );


      var sysMessage = ("Hi " + this.props.name + ", your role is '" + 
            obj.role + "' and you are on the " + obj.team + " team.");

      this.props.addSystemMessage(
        {
          type: "urgent",
          message: sysMessage
        }
      );


      /*need timeout so the message appears after telling 
      princess, marcus, villains, etc. other info
      */
      setTimeout(() => this.addSysMess("new mission", "Mission 1"), 1000);
      

      var storedObj = JSON.stringify(
        {roomName: this.props.roomInfo["roomName"], 
          name: this.props.name
        }
      );

      localStorage.setItem("Rejoin Info", storedObj);


    }); //end socket.on("Start Game")


    socket.on("Reveal Villains To Princess", (villainsArr) => {

      var villainString = "Princess, the villains are: " + formatArrayIntoString(villainsArr) + ".";

      this.props.addSystemMessage({type: "urgent", message: villainString});

    });


    socket.on("Reveal Princess Identity To Marcus", (princessArr) => {

      var princessIdentityString = "Marcus, the Princess's identity is: " + 
                      formatArrayIntoString(princessArr) + ".";

      this.props.addSystemMessage({type: "urgent", message: princessIdentityString});
      
    });


    socket.on("Set Villains List For Villains", (villainsArr) => {

      this.props.updateVillainList(villainsArr);

      var villainString = "Villains! Your team is composed of: " + 
                           formatArrayIntoString(this.props.villainList) + ".";

      this.props.addSystemMessage({type: "urgent", message: villainString});
      
    });


    //for very first game phase 1, it's trigged by start game
    socket.on("Start Game Phase 1: Power Phase 1", (newMissionNumber) => {

      setTimeout(() => this.props.updateGamePhase(1), 1000);
      setTimeout(() => this.props.updateMainMenuSelection("video"), 800);

      this.props.updateTimerSeconds(7);

      this.props.updateCharacterStatus("jailed", false);
      this.props.updateCharacterStatus("selectedForTelepathy", false);


      this.props.updateMissionNumber(newMissionNumber);
      
      this.addSysMess("new mission", ("Mission " + newMissionNumber));
      
      /*At beginning of new mission, automatically scroll down
      to the very bottom */
      var scrollElem = document.querySelector('.system-message-box');

      scrollElem.scrollTop = scrollElem.scrollHeight;


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

        this.props.updateTimerSeconds(50);

      };


    }); //end socket.on("Start Game Phase 5")


    socket.on("Start Game Phase 6: Start Mission", () => {

      setTimeout(() => this.props.updateGamePhase(6), 1000);

      this.props.updateTimerSeconds(700);

    }); //end socket.on("Start Game Phase 6")


    socket.on("Update Mission Results", (missionResultsObj) => {

      var currentMissionNo = this.props.missionNumber;

      this.props.updateMissionHistory(missionResultsObj, currentMissionNo);

    });


    socket.on("Start Game Phase 7: Mission Ended", () => {


      setTimeout(() => this.props.updateGamePhase(7), 1000);


    }); //end socket.on("Start Game Phase 6")



    socket.on("Start Game Phase 8: Night Phase", () => {

      setTimeout(() => this.props.updateGamePhase(8), 1000);

      this.props.updateTimerSeconds(16);
     
      /*Auto scroll down to latest mission results */
      setTimeout(() => {

        this.props.updateMainMenuSelection("player & results");

        var scrollElem = document.querySelector('.player-and-results-box-container');

        scrollElem.scrollTop = scrollElem.scrollHeight;
      }, 
      1000);


      setTimeout(() => P8Interval = setInterval(this.powerPhase8TimerCountdown, 1000), 1000);
    

    }); //end socket.on("Start Game Phase 8")



    socket.on("Start Game Phase 9: Heroes Win! Villains' Last Chance.", (vList) => {

      setTimeout(() => this.props.updateGamePhase(9), 1000);
      
      this.props.updateVillainList(vList);

      //need to do this to get last team/mission info to display
      var missionPlusOne = (this.props.missionNumber + 1);
      this.props.updateMissionNumber(missionPlusOne);


      /*Auto scroll down to latest mission results */
      setTimeout(() => {

        this.props.updateMainMenuSelection("player & results");

        var scrollElem = document.querySelector('.player-and-results-box-container');

        scrollElem.scrollTop = scrollElem.scrollHeight;
      }, 
      1000);

    }); //end Start Game Phase 9



    //allInfo = [{name:, role:, team:}, {}]
    socket.on("Start Game Phase 10: Game Over. Heroes Win!", (allInfo) => {

      setTimeout(() => this.props.updateGamePhase(10), 1000);

      this.props.updateGameEndScenario(
        {winners: "heroes", scenario: ""}
      );

      this.props.addSystemMessage({type: "big and orange", message: "The Heroes Win!!!"});
      this.revealAllIdentitiesAndRoles(allInfo);

      hVictory.play();

    });



    //allInfo = [{name:, role:, team:}, {}]
    //4/7 wins
    socket.on("Game Over. Villians Win! Roles & Identities Revealed!", 
      (allInfo) => {

      setTimeout(() => this.props.updateGamePhase(10), 1000);

      this.props.updateGameEndScenario(
        {winners: "villains", scenario: "4/7"}
      );


      this.props.addSystemMessage(
        {
          type: "big and purple", 
          message: "The Villains Win!!! They succeeded in sabotaging 4 missions total!"
        }
      );      


      this.revealAllIdentitiesAndRoles(allInfo);


      vVictoryGeneral.play();

    });



    socket.on( "Game Over. Villains Win 3 Consecutively!", 
      (allInfo) => {

      setTimeout(() => this.props.updateGamePhase(10), 1000);

      this.props.updateGameEndScenario(
        {winners: "villains", scenario: "3xs"}
      );


      this.props.addSystemMessage(
        {
          type: "big and purple", 
          message: "The Villains Win!!! They succeeded in sabotaging 3 consecutive missions!"
        }
      );      


      this.revealAllIdentitiesAndRoles(allInfo);


      vVictoryGeneral.play();

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


      vVictoryGeneral.play();

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

      vVictoryGeneral.play();

    });



    //allInfo = [{name:, role:, team:}, {}]
    socket.on("Start Game Phase 10: Game Over. Dark Destiny Fulfilled!", 
      (data) => {

      setTimeout(() => this.props.updateGamePhase(10), 1000);

      this.props.updateGameEndScenario(
        {winners: "villains", scenario: "dark destiny"}
      );


      this.props.addSystemMessage(
        {
          type: "big and purple", 
          message: ("The Villains Win!!! "
            + data.darkDestinyTarget + "'s Dark Destiny "
            + "was fulfilled!")
        }
      );      


      this.revealAllIdentitiesAndRoles(data.allInfo);


      vVictoryDarkDestiny.play();

    });



    socket.on("Start Game Phase 11: Too Many Players Left Room", (allInfo) => {

      setTimeout(() => this.props.updateGamePhase(11), 1000);

      this.revealAllIdentitiesAndRoles(allInfo);

      this.props.addSystemMessage(
        {
          type: "big and purple", 
          message: ("Sorry! Too many players left. The Villains/Heroes team is too imbalanced. The game has automatically ended!")
        }
      );      


    }); //end socket.on("Start Game Phase 11")



    socket.on("Reset Data For New Game", () => {

      this.props.resetDataForNewGame();

    }); //end Reset Data For New Game



    /*Add System Messages to redux store */

    socket.on("Add System Message", (messageObj) => {

      this.props.addSystemMessage(messageObj);

    });


    socket.on("Add System Message Music", (m) => {

      this.props.addSystemMessage(m.messageObj);

      playSong(m.song);

    });




    socket.on("Update Mission Team", (teamArr) => {

      this.props.updateMissionTeam(teamArr);
      //console.log(this.props.missionTeam);

    });



    socket.on("Update Player List", (newPlayerList) => {

      this.props.updatePlayerList(newPlayerList);

    });
  


    /*Update characterPowersHistory in Redux Store*/
    socket.on("Update Character Powers History", (p) => {

      this.props.updatePowerHistory(p.role, p.power, p.newValue);

    });



    /*Redux Store for Character-specific Power Info */

    socket.on("Receive Saintess Sense Array", (senseArr) => {

      this.props.updatePowerHistory("Saintess", "senseArray", senseArr);

    });



    socket.on("Receive Eo (Princess) Sense Array", (eoSenseArr) => {

      this.props.updatePowerHistory("Princess", "eoSenseArray", eoSenseArr);

    });



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


    socket.on("Display Cross Examination Popup", () => {

      this.props.updateXXNBool(true);

    });



    /* Evil Team */

    socket.on("Mirror World Activated", () => {

      var mwMess = ("The Reverser has activated Mirror World!" +
        " Be careful! Only the Reverser knows if base voting power will "
        + "be reversed or not for this mission round.");

      this.addSysMess("urgent", mwMess);

      mirrorWorldAudio.play();

    });


    /*Backstabber*/

    socket.on("Give Original Backstabber New Role", (newRole) => {

      this.props.addPlayerRole(newRole);

      this.props.updateVillainList([]);

      this.addSysMess("power", 
        "Former backstabber, your new role is " + newRole + ".");

    });


    socket.on("Give New Backstabber New Role", (newBSInfo) => {

      console.log(newBSInfo);

      this.props.addPlayerRole("Backstabber");
      this.props.updateVillainList(newBSInfo.villainList);
      this.props.updatePowerHistory("Backstabber", "originalBackstabber", newBSInfo.originalBSName);

      var vTeammates = newBSInfo.villainList.filter(vName => vName !== this.props.name);

      var bsMess = ( "The backstabber permanently switched roles with you!"
        + " From now until the game's end, you will be on the villain's "
        + "team (" + formatArrayIntoString(vTeammates) + "). Sorry this "
        + "had to happen to you! Bob said something about giving up crime "
        + "and wanting to set a good example for his little brother.... " 
        + "You know, the one with congenital electroplasia - "
        + "very sad story. T_T");

      this.addSysMess("power", bsMess);

    });


    //Persequor
    socket.on("Swap Identities", (newRole) => {

      this.props.addPlayerRole(newRole);

    });


    //Baby Doll
    socket.on("Sing: Player Was Dropped From The Mission Team", 
      (playerDropped) => {

        var singMess = playerDropped + " was lulled asleep by "
          + "Baby Doll's song. He/she will be dropped from " 
          + "the mission team!";

        this.addSysMess("urgent", singMess);

        singAudio.play();

    });



    //Psychologist
    socket.on("Psychologist Message", (messageObj) => {

      this.props.addSystemMessage(messageObj);

      psychologistAudio.play();

    });


    socket.on("Receive Villain Chat Messages", (messageObj) => {

      this.props.addVillainMessage(messageObj);

    });


    socket.on("Receive Esper Chat Messages", (messageObj) => {

      this.props.addEsperMessage(messageObj);

    });


    socket.on("Receive Jailer Chat Messages", (messageObj) => {

      this.props.addJailerMessage(messageObj);

    });



    socket.on("Update Character Status", (s) => {

      this.props.updateCharacterStatus(s.status, s.newValue);

    });


    socket.on("Update Jitsi Room Name", (jName) => {

      this.props.updateRoomInfo(jName, "Jitsi");

      var tempJitsiKey = this.state.jitsiKey + 1;

      this.setState({jitsiKey: tempJitsiKey});

    });



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


  forceJitsiReRender = () => {

    var tempJitsiKey = this.state.jitsiKey + 1;

    this.setState({jitsiKey: tempJitsiKey});

  };


  jitsiVideoBoxStyle = () => {

    if (this.props.mainMenuSelection === "video") {

      if (this.props.gamePhase === 8) {
        return {display: "none", gridArea: "other-menu-box"};
      };

      return {display: "flex", gridArea: "chat-box"};

    }; //end if mainMenuSelection === notes

    return {display: "none"};

  }; //end displayOrNot


  //night phase 8 has different layout - no video chat
  //everything else takes up entire width below the menu bars
  whichGridContainer = () => {

    if (this.props.gamePhase === 8) {
      return "grid-container-main-night";
    };

    if (this.props.characterStatus["frozen"]) {
      return "grid-container-main-frozen";
    };

    return "grid-container-main"

  };  


  gamePlayBoxArea = () => {

    switch (this.props.gamePhase) {

      case 0:
        return <EnterNameBox />;

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
        <PowersInfoBox />
        
        {/*
        <JitsiVideoBox
          key={this.state.jitsiKey} 
          display={this.jitsiVideoBoxStyle()}
          roomName={this.props.roomInfo["jitsiRoomName"]} 
        />
        */}
        
        {this.gamePlayBoxArea()}

        {this.props.showRoomControlBool &&
          <RoomControlBox forceJitsiReRender={this.forceJitsiReRender} />
        }

        {this.props.XXNBool &&
          <CrossExaminationBox />
        }

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
      characterStatus: state.characterStatus,
      gamePhase: state.gamePhase,
      missionNumber: state.missionNumber,
      teamLeader: state.teamLeader,
      missionTeam: state.missionTeam,
      playerList: state.playerList,
      villainList: state.villainList,
      missionHistory: state.missionHistory,
      mainMenuSelection: state.mainMenuSelection,
      gameEndScenario: state.gameEndScenario,
      timer: state.timer,
      roomInfo: state.roomInfo,
      XXNBool: state.crossExamBool,
      showRoomControlBool: state.showRoomControlBool,
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
    updatePowerHistory: updateCharacterPowerHistory,
    updateCharacterStatus: updateCharacterStatus,
    replaceNewCharStatus: newCharacterStatus,
    updateRangerSenseArray: rangerSenseArray,
    addEsperMessage: esperChatMessage,
    addJailerMessage: jailerChatMessage,
    addVillainMessage: villainChatMessage,
    updateXXNBool: crossExamBool,
    updateRoomInfo: roomInfo,
    resetDataForNewGame: resetForNewGame,
  })
(App);



var introMessage = "If you are confused, you can read the game's "
                  + "instructions on what to do by clicking on "
                  + "the yellow 'Instructions' tab located "
                  + "directly above the System Messages box. " 
                  + "You can view your role's powers, "
                  + "access the 'Quick Guide' to view what to do "
                  + "for each game phase, or read the entire "
                  + "instructions through 'Rules'.";
