import React from 'react';

import '../PP1CharacterPowers.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';


class PP1Kaguya extends React.Component {

  state = {

    usedPower: false,
    power1Target: "Power1 ?",

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


  submitPower1 = () => {

    if (this.state.power1Target !== "Power1 ?") {

      this.setState({usedPower: true});

      socket.emit("Dark Destiny", this.state.power1Target);

    };

  }; //end submitPower1


  render() {

    if (this.state.usedPower) {

      return (

      <div className="PP1-General-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-power1-container">
          A dark destiny awaits {this.state.power1Target}. 
          Please wait {this.props.timer} seconds for Game 
          Phase 1 to end.
        </div>

      </div>

      ); //end return

    }; //end if usedPower


    return (

      <div className="PP1-General-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Dark Destiny</button>
        </div> 


        <div className="PP1-power1-container">

          <select 
            className="ui search dropdown"
            value={this.state.power1Target}
            onChange={e => this.setState({ power1Target: e.target.value })}
          >

            <option value="Power1 ?" disabled selected>Dark Destiny</option>
            {this.getSelectionChoices()}

          </select>


          <button 
            className="ui yellow button"
            onClick={this.submitPower1}
          >
            Doom!
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
(PP1Kaguya);