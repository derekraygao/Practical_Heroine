import React from 'react';

import '../PP1CharacterPowers.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';



class PP1Delayer extends React.Component {

  state = {

    usedPower: false,
    power1Target: "Power1 ?",

  };


  componentDidMount = () => {


  }; //end componentDidMount




  getSelectionChoices = () => {

    var playerChoices = JSON.parse(JSON.stringify(this.props.playerList));


    //cannot choose same person twice in a row
    if (this.props.missionNumber > 1) {

      var prevSlowTarget = this.props.PH["Delayer"][(this.props.missionNumber -1)].slowTarget;

      var q = playerChoices.indexOf(prevSlowTarget);

      if (q > -1) {
        playerChoices.splice(q, 1);
      };

    }; //end if missionNumber > 1


    const allPlayerSelectOptions = playerChoices.map((pName, index) => {

      return (

        <option value={pName}>{pName}</option>

      ); //end return


    });

    return allPlayerSelectOptions;

  };


  submitPower1 = () => {

    if (this.state.power1Target !== "Power1 ?") {

      this.setState({usedPower: true});

      socket.emit("Stall A Player's Vote", this.state.power1Target);

      this.props.updatePower(
                             "Delayer", 
                             this.props.missionNumber, 
                             {"slowTarget": this.state.power1Target}
                            );

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("Your stall spell inflicts "
          + "the 'slow' status upon " + this.state.power1Target
          + ". Slow will only last for the current mission round.")
        }
      );

    }; //end this.state.power1Target !== "Power1 ?"

  }; //end submitPower1



  render() {

    if (this.state.usedPower) {

      return (

      <div className="PP1-General-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-power1-container">
          You've only delayed the inevitable! For this 
          turn only, {this.state.power1Target} is afflicted 
          with the "slow" status. Please 
          wait {this.props.timer} seconds for Game 
          Phase 1 to end.
        </div>

      </div>

      ); //end return

    }; //end if usedPower


    return (

      <div className="PP1-General-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Stall</button>
        </div> 


        <div className="PP1-power1-container">

          <select 
            className="ui search dropdown"
            value={this.state.power1Target}
            onChange={e => this.setState({ power1Target: e.target.value })}
          >

            <option value="Power1 ?" disabled selected>Stall</option>
            {this.getSelectionChoices()}

          </select>


          <button 
            className="ui yellow button"
            onClick={this.submitPower1}
          >
            Slow!
          </button>

        </div>


      </div> //end div PP1-General-Container

    ); //end return


  }; //end render()



}; //end class Delayer


const mapStateToProps = (state) => {
  
  return (
         { 
            PH: state.characterPowersHistory,
            missionNumber: state.missionNumber,
            playerList: state.playerList,
            gamePhase: state.gamePhase,
            timer: state.timer,
         }
  );

};


export default connect(mapStateToProps, 
  {
    updatePower: updateCharacterPowerHistory,
    addSystemMessage: systemMessages,
  }
)
(PP1Delayer);