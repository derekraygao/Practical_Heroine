import React from 'react';

import './PP1Seer.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';

class PP1Seer extends React.Component {

  state = {

    usedPower: false,
    scryTargetName: "Scry ?",

  };


  componentDidMount = () => {


  }; //end componentDidMount




  getSelectionChoices = () => {

    const {playerList} = this.props;

    const allPlayerSelectOptions = playerList.map((pName, index) => {

      return (

        <option value={pName}>{pName}</option>

      ); //end return


    });

    return allPlayerSelectOptions;

  };


  submitScry = () => {

    if (this.state.scryTargetName !== "Scry ?") {

      this.setState({usedPower: true});

      socket.emit("Scry", this.state.scryTargetName);

    };

  }; //end submitScry


  render() {

    if (this.state.usedPower) {

      return (

      <div className="PP1-Seer-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Scry</button>
        </div> 

        <div className="PP1-scry-container">
          You peered into {this.state.scryTargetName}'s identity. 
          Please wait {this.props.timer} seconds for Game 
          Phase 1 to end.
        </div>

      </div>

      ); //end return

    }; //end if usedPower


    return (

      <div className="PP1-Seer-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Scry</button>
        </div> 


        <div className="PP1-scry-container">

          <select 
            className="ui search dropdown"
            value={this.state.scryTargetName}
            onChange={e => this.setState({ scryTargetName: e.target.value })}
          >

            <option value="Scry ?" disabled selected>Scry</option>
            {this.getSelectionChoices()}

          </select>


          <button 
            className="ui yellow button"
            onClick={this.submitScry}
          >
            Scry!
          </button>

        </div>


      </div> //end div Umbra-Lord-Container

    ); //end return


  }; //end render()



}; //end class Seer


const mapStateToProps = (state) => {
  
  return (
         { 
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
(PP1Seer);