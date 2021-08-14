import React from 'react';
import { connect } from 'react-redux';

import { systemMessages } from 'actions/systemMessages.js';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';

import socket from 'Socket.js';
import getArrayOfOnlyHeroes from 'getArrayOfOnlyHeroes.js';

import NormalMissionVoteButtons from './PowerPhase6Components/NormalMissionVoteButtons.js';
import PP6NoPower from './PP6NoPower.js';




class PP6Princess extends React.Component {

  state = {

            powerMenuSelection: "Vote",
            power1Target: "Power1 ?", 
            power2Target: "Power2 ?",
            power3Target: "Power3 ?",
            power4Target: "Power4 ?",

          };


  //star prism power
  clickPower1 = () => {

    socket.emit("Star Prism Power");

    socket.emit("Vote on Mission", "Star Prism Power");

    this.props.addSystemMessage(
      {
        type: "power",
        message: ("Star Prism Power! Your transformation into "
          + "Star Practical will last for 3 rounds, starting next "
          + "round.")
      }
    );


    this.props.voted("Power");

 
  }; //end clickPower1




  healingMessage = (target) => {

    if (target == this.props.myName) {
      return (
        "The light energy from the Love Scepter purified all "
        + "negative status conditions affecting you!"
      );
    };

    return (
      "You shouted 'Star Healing Activation'! A powerful burst of "
      + "light energy emanates from the Love Scepter and purified "
      + "all negative status conditions affecting " + target
      + ". He/she was notified that he/she was refreshed!"
    );

  }; //end healingMessage(target)


  //Star Healing Activation
  clickPower2 = () => {

    if (this.state.power2Target == "Power2 ?") { return 0; };

    socket.emit("Star Healing Activation", this.state.power2Target);

    socket.emit("Vote on Mission", "Power");

    this.props.addSystemMessage(
      {
        type: "power",
        message: this.healingMessage(this.state.power2Target)
      }
    );


    this.props.voted("Power");

  }; //end clickPower2




  //Starlight Shuriken
  clickPower3 = () => {

    socket.emit("Vote on Mission", "Starlight Shuriken");

    this.props.addSystemMessage(
      {
        type: "power",
        message: ("You used your Starlight Shuriken to launch "
          + "a powerful attack with a B.V.P. of +3. "
          + "No kill rule for heroes? That's stupid "
          + "and impractical! Die, villains!!!")
      }
    );


    this.props.voted("Power");

 
  }; //end clickPower3



  heartacheDefenseMessage = (target) => {

    if (target == this.props.myName) {

      return (
        "Starlight Love Heartache Defense! You summoned a giant, "
        + "glowing pink heart to defend against evil! For the next "
        + "mission round ONLY, if you are chosen for the mission team, "
        + "+5 will be added to your voting power."
      );

    };


    return (
      "Starlight Love Heartache Defense! You summoned a powerful "
      + "heart shield made of love energy to defend against evil "
      + "influences. For the next mission round ONLY, this shield "
      + "will add +5 to " + target + "'s voting power!"
    ); //end return

  }; //end heartacheDefenseMessage


  //Heartache Defense
  clickPower4 = () => {

    if (this.state.power4Target == "Power4 ?") { return 0; };

    socket.emit("Heartache Defense", this.state.power4Target);

    socket.emit("Vote on Mission", "Power");

    this.props.addSystemMessage(
      {
        type: "power",
        message: this.heartacheDefenseMessage(this.state.power4Target)
      }
    );


    this.props.voted("Power");

  }; //end clickPower3




  getSelectionChoices = () => {

    var playerChoices = JSON.parse(JSON.stringify(this.props.playerList));

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

    if (this.state.powerMenuSelection == "Starlight Shuriken") {

      return (


        <button 
          className="ui button pink"
          onClick={this.clickPower3}
        >
          Throw!
        </button>


      ); //end return

    }; //end if == S.S.


    if (this.state.powerMenuSelection == "Star Healing Activation") {

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
            className="ui button pink"
            onClick={this.clickPower2}
          >
            Heal!
          </button>

        </>

      ); //end return

    }; //end if == S.H.A.



    if (this.state.powerMenuSelection == "Prism Power") {

      return (

        <button 
          className="ui button pink"
          onClick={this.clickPower1}
        >
          Transform!
        </button>


      ); //end return

    }; //end if == Prism Power



    //powerMenuSelection == H.D.
    return (
      <>

        <select 
          className="ui search dropdown"
          value={this.state.power4Target}
          onChange={e => this.setState({ power4Target: e.target.value })}
        >

          <option value="Power4 ?" disabled selected>Players</option>
          {this.getSelectionChoices()}

        </select>

        <button 
          className="ui button pink"
          onClick={this.clickPower4}
        >
          Defend!
        </button>

      </>

    ); //end return



  }; //end returnWhichActionAreaComponent


  returnWhichPowerMenuButtons = () => {

    if (this.props.PH["Princess"]["transformed"] > 0) {

      return (

        <>

          <button 
            className={`ui button ${this.powerMenuColor("Starlight Shuriken")}`}
            onClick={ () => this.setState({powerMenuSelection: "Starlight Shuriken"}) }
          >
            S.S.
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Star Healing Activation")}`}
            onClick={ () => this.setState({powerMenuSelection: "Star Healing Activation"}) }
          >
            S.H.A.
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Heartache Defense")}`}
            onClick={ () => this.setState({powerMenuSelection: "Heartache Defense"}) }
          >
            H.D.
          </button>

        </>

      ); //end return

    }; //end if transformed > 3


    return (

      <button 
        className={`ui button ${this.powerMenuColor("Prism Power")}`}
        onClick={ () => this.setState({powerMenuSelection: "Prism Power"}) }
      >
        Star Prism Power
      </button>

    ); //end return


  }; //end returnWhichPowerMenuButtons



  returnWhichActionAreaContainer() {

    if (this.props.PH["Princess"]["transformed"] > 0) {

      return (

        <div className="PP6-Princess-general-action-area-container">

          <div className="PP6-Princess-Power-Title-Div">
            {this.state.powerMenuSelection}
          </div>

          <div className="PP6-Princess-Power-Buttons-Div">
            {this.returnWhichActionAreaComponent()}
          </div>

        </div>

      ); //end return

    }; //end if transformed



    //if not transformed
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
(PP6Princess);

