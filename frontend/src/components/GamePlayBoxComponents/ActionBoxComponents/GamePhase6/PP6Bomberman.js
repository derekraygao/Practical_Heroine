import React from 'react';
import { connect } from 'react-redux';

import { systemMessages } from 'actions/systemMessages.js';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';

import socket from 'Socket.js';

import NormalMissionVoteButtons from './PowerPhase6Components/NormalMissionVoteButtons.js';
import PP6NoPower from './PP6NoPower.js';



class PP6Bomberman extends React.Component {

  state = {
            powerMenuSelection: "Vote",
            bombTarget: "Bomb ?",
            punchTarget: "Punch ?"
          };



  clickButtonBomb = () => {

    if (this.state.bombTarget !== "Bomb ?") {

      socket.emit("Plant Flame Seal Bomb", this.state.bombTarget);

      socket.emit("Vote on Mission", "Power");

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("You planted a flame seal bomb on "
          + this.state.bombTarget + ". The next mission "
          + "he/she votes for mission success, subtract "
          + "3 from his/her voting power. BOOM!")
        }
      );


      this.props.voted("Power");

    }; //end if this.state.bombTarget !== Bomb ?

  }; //end clickButtonBomb



  clickButtonPunch = () => {

    if (this.state.punchTarget !== "Punch ?") {

      socket.emit("Fire Punch A Player", this.state.punchTarget);

      socket.emit("Vote on Mission", "Power");

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("You punched " + this.state.punchTarget 
            + " with a fist of fire! Starting Mission " 
            + (this.props.missionNumber + 1) 
            + ", he/she will have the burn status, which "
            + "decreases his/her voting power by "
            + "0.75 x burn counter. The burn counter "
            + "increases by 1 every mission round until "
            + "healed.")
        }
      );


      this.props.voted("Power");
      
    }; //end if this.state.punchTarget !== Punch ?

  }; //end clickButtonPunch


  getSelectionChoices = () => {

    var playerChoices = JSON.parse(JSON.stringify(this.props.missionTeam));

    var q = playerChoices.indexOf(this.props.myName);

    if (q > -1) {
      playerChoices.splice(q, 1);
    };

    var arrayOfOptions = playerChoices.map( (pName, index) => {

      return (
        <option value={pName} key={index}>{pName}</option>
      );

    });

    return arrayOfOptions;

  }; //end getSelectionChoices()



  powerMenuColor = (power) => {

    if (power === this.state.powerMenuSelection) {
      return "yellow-color";
    };

    return "";

  };




  returnWhichActionAreaComponent = () => {

    if (this.state.powerMenuSelection == "Vote") {

        return (<NormalMissionVoteButtons voted={this.props.voted} />);

    };

    if (this.state.powerMenuSelection == "Bomb") {

      return (
        <>

          <select 
            className="ui search dropdown"
            value={this.state.bombTarget}
            onChange={e => this.setState({ bombTarget: e.target.value })}
          >

            <option value="Bomb ?" disabled selected>F.S. Bomb</option>
            {this.getSelectionChoices()}

          </select>

          <button 
            className="ui button red"
            onClick={this.clickButtonBomb}
          >
            Plant Bomb!
          </button>

        </>

      ); //end return

    }; //end if powerMenuSelection == Bomb


    return (

      <>

        <select 
          className="ui search dropdown"
          value={this.state.punchTarget}
          onChange={e => this.setState({ punchTarget: e.target.value })}
        >

          <option value="Punch ?" disabled selected>Fire Punch</option>
          {this.getSelectionChoices()}

        </select>

        <button 
          className="ui button red"
          onClick={this.clickButtonPunch}
        >
          Punch!
        </button>

      </>

    ); //end return 



  }; //end returnWhichActionAreaComponent



  render() {

    return (

      <div className="PP6-general-container">

        <div className="PP6-powers-menu-bar-container orange ui buttons">
          
          <button 
            className={`ui button ${this.powerMenuColor("Vote")}`}
            onClick={ () => this.setState({powerMenuSelection: "Vote"}) }
          >
            Vote
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Bomb")}`}
            onClick={ () => this.setState({powerMenuSelection: "Bomb"}) }
          >
            Flame Seal Bomb
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Punch")}`}
            onClick={ () => this.setState({powerMenuSelection: "Punch"}) }
          >
            Fire Punch
          </button>

        </div> 


        <div className="PP6-general-action-area-container">

          {this.returnWhichActionAreaComponent()}

        </div>

      </div> //end div PP6-general-container

    ); //end return



  }; //end render()



}; //end class MissionVotingPhase6



const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            role: state.role,
            playerList: state.playerList,
            villainList: state.villainList,
            PH: state.characterPowersHistory,
            missionNumber: state.missionNumber,
            teamLeader: state.teamLeader,
            missionTeam: state.missionTeam,
            timer: state.timer,
            missionVoteTab: state.missionVoteTab,
         }
  );

};


export default connect(mapStateToProps, 
  {
    updatePower: updateCharacterPowerHistory,
    addSystemMessage: systemMessages
  }
)
(PP6Bomberman);

