import React from 'react';
import { connect } from 'react-redux';

import { systemMessages } from 'actions/systemMessages.js';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';

import socket from 'Socket.js';
import getArrayOfOnlyHeroes from 'getArrayOfOnlyHeroes.js';

import NormalMissionVoteButtons from './PowerPhase6Components/NormalMissionVoteButtons.js';
import PP6NoPower from './PP6NoPower.js';




class PP6Pharaoh extends React.Component {

  state = {

            powerMenuSelection: "Vote",
            power1Target: "Power1 ?", 
            power2Target: "Power2 ?",

          };


  //Destiny Draw
  clickPower1 = () => {

    if (this.state.power1Target == "Power1 ?") { return 0; };

    socket.emit("Destiny Draw", this.state.power1Target);

    socket.emit("Vote on Mission", "Power");

    this.props.voted("Power");
 
  }; //end clickPower1




  //Dark Magic Attack
  clickPower2 = () => {

    if (this.state.power2Target == "Power2 ?") { return 0; };

    socket.emit("Dark Magic Attack", this.state.power2Target);

    socket.emit("Vote on Mission", "Power");

    this.props.addSystemMessage(
      {
        type: "power",
        message: ("You summoned your faithful servant, Mahad, to blast " + this.state.power2Target + " with powerful shadow magic! ALL status conditions (good, bad, neutral) on " + this.state.power2Target + " have been neutralized. Energy Pool, however, was not affected and additionally, -3 is added to his/her Energy Pool.")
      }
    );


    this.props.voted("Power");

  }; //end clickPower2



  clickPower3 = () => {

    socket.emit("Obliterate!");

    this.props.voted("Power");

  }; //end clickPower3()



  getSelectionChoices = () => {

    var playerChoices = JSON.parse(JSON.stringify(this.props.missionTeam));

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



    if (this.state.powerMenuSelection == "Destiny Draw") {

      return (

        <>

          <select 
            className="ui search dropdown"
            value={this.state.power1Target}
            onChange={e => this.setState({ power1Target: e.target.value })}
          >

            <option value="Power1 ?" disabled selected>Players</option>
            {this.getSelectionChoices()}

          </select>

          <button 
            className="ui button blue"
            onClick={this.clickPower1}
          >
            Believe!
          </button>

        </>

      ); //end return


    }; //end if == Destiny Draw



    if (this.state.powerMenuSelection == "Dark Magic Attack") {

      return (
        <>

          <select 
            className="ui search dropdown"
            value={this.state.power2Target}
            onChange={e => this.setState({ power2Target: e.target.value })}
          >

            <option value="Power2 ?" disabled selected>Players</option>
            {this.getSelectionChoices()}

          </select>

          <button 
            className="ui button violet"
            onClick={this.clickPower2}
          >
            Cast!
          </button>

        </>

      ); //end return

    }; //end if == D.M.A.



    if (this.state.powerMenuSelection == "Summon") {

      return (

        <button 
          className="ui button orange"
          onClick={this.clickPower3}
        >
          Obliterate!
        </button>

      ); //end return

    }; //end if == Obliterate



  }; //end returnWhichActionAreaComponent




  returnWhichPowerMenuButtons = () => {

    if (this.props.PH["Pharaoh"]["ritualCount"] < 3) {

      return (

        <>

          <button 
            className={`ui button ${this.powerMenuColor("Destiny Draw")}`}
            onClick={ () => this.setState({powerMenuSelection: "Destiny Draw"}) }
          >
            D.D.
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Dark Magic Attack")}`}
            onClick={ () => this.setState({powerMenuSelection: "Dark Magic Attack"}) }
          >
            D.M.A.
          </button>

        </>

      ); //end return

    }; //end if transformed > 3


    return (
      <>

        <button 
          className={`ui button ${this.powerMenuColor("Summon")}`}
          onClick={ () => this.setState({powerMenuSelection: "Summon"}) }
        >
          Summon
        </button>

      </>

    ); //end return


  }; //end returnWhichPowerMenuButtons



  returnWhichActionAreaContainer() {

    if (this.props.PH["Pharaoh"]["ritualCount"] < 3) {

      return (

        <div className="PP6-general-action-area-with-title-container">

          <div className="PP6-Power-Title-Div">
            {this.state.powerMenuSelection}
          </div>

          <div className="PP6-Power-Buttons-Div">
            {this.returnWhichActionAreaComponent()}
          </div>

        </div>

      ); //end return

    }; //end if ritualCount < 3



    //if ritualCount >= 3
    return (

      <div className="PP6-general-action-area-container">

        {this.returnWhichActionAreaComponent()}

      </div>

    ); //end return

  }; //end returnWhichActionAreaContainer()





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

          {this.returnWhichPowerMenuButtons()}

        </div> 


        {this.returnWhichActionAreaContainer()}

      </div> //end div PP6-general-container

    ); //end return



  }; //end render()



}; //end class PP6Kaguya



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
(PP6Pharaoh);

