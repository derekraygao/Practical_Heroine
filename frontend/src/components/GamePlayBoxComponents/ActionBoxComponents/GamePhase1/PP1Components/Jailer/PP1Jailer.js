import React from 'react';

import './PP1Jailer.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';


class PP1Jailer extends React.Component {

  state = {

    usedPower: false,
    jailTargetName: "Jail ?",

  };


  componentDidMount = () => {


  }; //end componentDidMount




  getSelectionChoices = () => {

    const jailPlayerList = JSON.parse(JSON.stringify(this.props.playerList));

    var q = jailPlayerList.indexOf(this.props.myName);

    if (q > -1) { jailPlayerList.splice(q, 1) };

    const jailPlayerSelectOptions = jailPlayerList.map((pName, index) => {

      return (

        <option value={pName}>{pName}</option>

      ); //end return


    });

    return jailPlayerSelectOptions;

  };


  submitJail = () => {

    if (this.state.jailTargetName !== "Jail ?") {

      this.setState({usedPower: true});

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("You jailed " + this.state.jailTargetName + ".")
        }
      );

      socket.emit("Jail A Player", this.state.jailTargetName);

    };

  }; //end submitScry


  render() {

    if (this.state.usedPower) {

      return (

      <div className="PP1-Jailer-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-jail-container">
          You jailed {this.state.jailTargetName} for today 
          and tonight. Please wait {this.props.timer} seconds 
          for Game Phase 1 to end.
        </div>

      </div>

      ); //end return

    }; //end if usedPower


    return (

      <div className="PP1-Jailer-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Jail</button>
        </div> 


        <div className="PP1-jail-container">

          <select 
            className="ui search dropdown"
            value={this.state.jailTargetName}
            onChange={e => this.setState({ jailTargetName: e.target.value })}
          >

            <option value="Jail ?" disabled selected>Jail</option>
            {this.getSelectionChoices()}

          </select>


          <button 
            className="ui yellow button"
            onClick={this.submitJail}
          >
            Jail!
          </button>

        </div>


      </div> //end div Umbra-Lord-Container

    ); //end return


  }; //end render()



}; //end class Seer


const mapStateToProps = (state) => {
  
  return (
         { 
            myName: state.name,
            PH: state.characterPowersHistory,
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
(PP1Jailer);