import React from 'react';
import { connect } from 'react-redux';

import './PP5Balancer.css';

import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';


class PP5Balancer extends React.Component {

  state = {
            usedPower: false,
            equilibriumArray: [],
          };



  updateEquilibriumArr = (_name) => {

    var eArr = this.state.equilibriumArray;

    var q = eArr.indexOf(_name);
  
    if (q > -1) {

      eArr.splice(q, 1);

      this.setState({equilibriumArray: eArr});

      return 0;

    }; 


    eArr.push(_name);


    if (eArr.length > 2) { 

      eArr.shift();

    };


    this.setState({equilibriumArray: eArr});


  }; //end updateEquilibriumArr



  equilibriumButtonColor = (_name) => {

    if (this.state.equilibriumArray.includes(_name)) {
        return "green";
    };

    return "yellow";

  };


  getPlayerButtonChoices = () => {


    var equilibriumChoices = this.props.missionTeam.map((_name, index) => {

      return (

        <button 
          className={`ui ${this.equilibriumButtonColor(_name)} button`}
          onClick={ () => {this.updateEquilibriumArr(_name)} }
        >
          {_name}
        </button>

      ); //end return


    });

    return equilibriumChoices;

  };


  submitButtonClick = () => {

    if (this.state.equilibriumArray.length == 2) {

      this.setState({usedPower: true});

      socket.emit("Equilibrium", this.state.equilibriumArray);

    };


  }; //end submitButtonClick




  render() {

    if (this.state.usedPower) {

      return (

        <div className="PP5-general-container">

          <div className="PP5-powers-menu-bar-container orange ui buttons">
            <button className="ui button"></button>
          </div> 

          <div className="PP5-general-action-area-container">
            The equilibrium of the world tilts towards Darkness. 
            You used the power of equilibrium to test the balance 
            between: {formatArrayIntoString(this.state.equilibriumArray)}.
          </div>

        </div>


      ); //end return

    }; //end if PH.berserk = true


    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          <button className="ui button">Equilibrium</button>
        </div> 

        <div className="PP5-general-action-area-container">

          {this.getPlayerButtonChoices()}

          <button
            className="ui button orange equilibrium-submit-button"
            onClick={this.submitButtonClick}
          >
            Equalize!
          </button>

        </div>

      </div>


    ); //end return

  }; //end render()



}; //end class PP5Marcus



const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            playerList: state.playerList,
            missionTeam: state.missionTeam,
            PH: state.characterPowersHistory,
            missionNumber: state.missionNumber,
            role: state.role,
            timer: state.timer
         }
  );

};


export default connect(mapStateToProps, 
  {
    updatePower: updateCharacterPowerHistory,
    addSystemMessage: systemMessages,
  }
)
(PP5Balancer);