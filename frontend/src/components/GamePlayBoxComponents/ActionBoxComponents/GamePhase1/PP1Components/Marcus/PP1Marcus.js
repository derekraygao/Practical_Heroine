import React from 'react';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';



class PP1Marcus extends React.Component {

  state = {

    powerTarget1: "Power1 ?",
    usedPower: false,

  };


  componentDidMount = () => {


  }; //end componentDidMount



  submitButtonPower1 = () => {

    if (this.state.powerTarget1 == "Power1 ?") { return 0; };
    
    this.setState({ usedPower: true });

    socket.emit("Set Counter Espionage Target", this.state.powerTarget1);

    this.props.addSystemMessage(
      {
        type: "power",
        message: ("Suspecting " + this.state.powerTarget1 
          + " of being a spy in the Enlustrian Army, you decided to "
          + "carefully observe his/her actions. If you are NOT chosen "
          + "for this round's mission team AND " + this.state.powerTarget1 
          + " is chosen for the mission team, you will receive a "
          + "list of his/her entire actions history on all the missions "
          + "he/she has been on, including the current "
          + "mission. However, the list will be in randomized order!")
      }
    );


  }; //end submitButtonPower1



  getSelectionChoices = () => {

    var playerChoices = JSON.parse(JSON.stringify(this.props.playerList));

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



  returnWhichActionAreaComponent = () => {

    return (

      <>

          <select 
            className="ui search dropdown"
            value={this.state.powerTarget1}
            onChange={e => this.setState({ powerTarget1: e.target.value })}
          >

            <option value="Power1 ?" disabled selected>Players</option>
            {this.getSelectionChoices()}

          </select>


          <button 
            className="ui yellow button"
            onClick={this.submitButtonPower1}
          >
            Expose!
          </button>


      </>

    ); //end return


  }; //end returnWhichActionAreaComponent()



  render() {

    if (this.state.usedPower) {

      return (

      <div className="PP1-general-power-container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-action-area-container">
          Could {this.state.powerTarget1} be a terrifying Umbra? 
          Could he/she be a three-eyed cockatrice in disguise? Find 
          out after this round's mission has ended. Please 
          wait {this.props.timer} seconds for Game Phase 1 to end.
        </div>

      </div>

      ); //end return

    }; //end if usedPower




    return (

      <div className="PP1-general-power-container">

        <div className="powers-menu-bar-container orange ui buttons">

          <button className="ui button">
            Counter Espionage
          </button>

        </div> 


        <div className="PP1-action-area-container">

          {this.returnWhichActionAreaComponent()}

        </div>


      </div> //end div Umbra-Lord-Container

    ); //end return


  }; //end render()



}; //end class Seer


const mapStateToProps = (state) => {
  
  return (
         { 
            PH: state.characterPowersHistory,
            myName: state.name,
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
(PP1Marcus);