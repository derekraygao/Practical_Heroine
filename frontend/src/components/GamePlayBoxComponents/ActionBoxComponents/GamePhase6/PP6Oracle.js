import React from 'react';
import { connect } from 'react-redux';

import { systemMessages } from 'actions/systemMessages.js';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {calculateNumberofTeamMembers} from 'calculateNumberofTeamMembers.js';

import socket from 'Socket.js';

import NormalMissionVoteButtons from './PowerPhase6Components/NormalMissionVoteButtons.js';
import PP6NoPower from './PP6NoPower.js';



class PP6Oracle extends React.Component {

  state = {
            powerMenuSelection: "Vote",
            powerTarget1: "Power1 ?",
            powerTarget2: "Power2 ?",
            message: "",
          };



  clickButtonPower1 = () => {

    if (this.state.powerTarget1 == "Power1 ?") { return 0; };

    socket.emit("Oracle: Lucinite Guess Number", this.state.powerTarget1);

    socket.emit("Vote on Mission", "Power");


    this.props.addSystemMessage(
      {
        type: "power",
        message: ("Luces: You guessed that the current mission team contains " + this.state.powerTarget1 + " Lucinites (Heroes).")
      }
    );


    this.props.voted("Power");

  }; //end clickButtonPower1


  onSendClick = () => {

    if (this.state.message == "" 
      || this.state.powerTarget2 == "Power2 ?") { return 0; };

    var messageObj = {
                      receiver: this.state.powerTarget2,
                      message: this.state.message
                     };

    socket.emit("Oracle: Deliver Private Message", messageObj);
    socket.emit("Vote on Mission", "Power (-1)");

    this.props.voted("Power");


  };


  inputOnChange = (e) => {

    var mess = e.target.value;

    if (mess.length > 499) { 

      mess = mess.slice(0, 500)
    
    };

    this.setState({ message: mess });
      
  }; //end inputOnChange



  getSelectionChoices = () => {

    var playerChoices = JSON.parse(JSON.stringify(this.props.playerList));


    var q = playerChoices.indexOf(this.props.myName);
    if (q > -1) { playerChoices.splice(q, 1); };


    var arrayOfOptions = playerChoices.map( (pName, index) => {

      return (
        <option value={pName} key={index}>{pName}</option>
      );

    });


    return arrayOfOptions;

  }; //end getSelectionChoices()



  getNumberChoices = () => {

    var mTeamSize = calculateNumberofTeamMembers(
        this.props.missionNumber, this.props.playerList.length);

    var numberChoices = [];

    //because you want 1 up to number of teammates
    //you include yourself as a hero, that's why you minimum is 1
    var numlength = mTeamSize + 1;

    for (var i = 1; i < numlength; i++) {

      numberChoices.push(
        <option value={i}>{i}</option>
      );

    };

    return numberChoices;

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


    if (this.state.powerMenuSelection == "Ascertain") {

      return (
        <>

          <select 
            className="ui search dropdown"
            value={this.state.powerTarget1}
            onChange={e => this.setState({ powerTarget1: e.target.value })}
          >

            <option value="Power1 ?" disabled selected>Lucinites #</option>
            {this.getNumberChoices()}

          </select>

          <button 
            className="ui button yellow"
            onClick={this.clickButtonPower1}
          >
            Ascertain!
          </button>

        </>

      ); //end return

    }; //end if this.state.powerMenuSelection == "Ascertain"


    return (

      <>

        <select 
          className="ui search dropdown"
          value={this.state.powerTarget2}
          onChange={e => this.setState({ powerTarget2: e.target.value })}
        >

          <option value="Power2 ?" disabled selected>Recipient</option>
          {this.getSelectionChoices()}

        </select>

        <div className="full-width-empty-div"></div>

        <div className="ui input text-area-container">        

          <textarea
           className="inside-input-fields" //used to prevent keydown events 
           onChange={e => this.inputOnChange(e)}
           type="text" placeholder="Send a private message!"
           value={this.state.message}
          />

          <button onClick={this.onSendClick} className="ui button yellow">
            <span>Send!</span>
          </button>

        </div>

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
            className={`ui button ${this.powerMenuColor("Ascertain")}`}
            onClick={ () => this.setState({powerMenuSelection: "Ascertain"}) }
          >
            Ascertain
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Message")}`}
            onClick={ () => this.setState({powerMenuSelection: "Message"}) }
          >
            Message
          </button>

        </div> 


        <div className="PP6-general-action-area-container">

          {this.returnWhichActionAreaComponent()}

        </div>

      </div> //end div PP5-general-container

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
(PP6Oracle);

