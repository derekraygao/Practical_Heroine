import React from 'react';

import './PP1AuraKnight.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';


import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';

class AuraKnight extends React.Component {

  state = {

    auraTarget: "nobody selected",
    powerUsed: false

  };


  componentDidMount = () => {


  }; //end componentDidMount


  getAuraInfoOnClick = (_name) => {

    this.setState({auraTarget: _name, powerUsed: true});
    socket.emit("Sense Aura", _name);

  };


  getPlayerButtonChoices = () => {

    var choicesArr = this.props.playerList;

    var auraChoices = choicesArr.map((_name, index) => {

      return (

        <button 
          className={`ui yellow button`}
          onClick={ () => {this.getAuraInfoOnClick(_name)} }
        >
          {_name}
        </button>

      ); //end return


    });

    return auraChoices;

  };


  render() {

    if (this.state.powerUsed) {

      return (

      <div className="PP1-AuraKnight-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-aura-sense-container">
          You read {this.state.auraTarget}'s aura.
          Please wait {this.props.timer} seconds for Game Phase 1 
          to end.
        </div>

      </div>

      ); //end return

    }; //end if corruption !==



    return (

      <div className="PP1-AuraKnight-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Aura Sense</button>
        </div> 


        <div className="PP1-aura-sense-container">

          {this.getPlayerButtonChoices()}

        </div>


      </div> //end div Umbra-Lord-Container

    ); //end return


  }; //end render()



}; //end class PP1NoPower


const mapStateToProps = (state) => {
  
  return (
         { 
            myName: state.name,
            playerList: state.playerList,
            timer: state.timer,
         }
  );

};


export default connect(mapStateToProps, 
  {
    addSystemMessage: systemMessages,
  }
)
(AuraKnight);