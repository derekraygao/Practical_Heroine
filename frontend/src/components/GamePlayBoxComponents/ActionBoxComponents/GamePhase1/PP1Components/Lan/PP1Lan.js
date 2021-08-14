import React from 'react';

import './PP1Lan.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';

class PP1Lan extends React.Component {

  state = {

    usedPower: false,
    beatRushTarget: "Beat Rush ?",

  };


  componentDidMount = () => {


  }; //end componentDidMount




  getSelectionChoices = () => {

    var brList = JSON.parse(JSON.stringify(this.props.playerList));

    var q = brList.indexOf(this.props.myName);

    if (q > -1) {
      brList.splice(q, 1);
    };

    const allPlayerSelectOptions = brList.map((pName, index) => {

      return (

        <option value={pName}>{pName}</option>

      ); //end return


    });

    return allPlayerSelectOptions;

  };


  submitBR = () => {

    if (this.state.beatRushTarget !== "Beat Rush ?") {

      this.setState({usedPower: true});

      socket.emit("Beat Rush", this.state.beatRushTarget);

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("You rushed at " + this.state.beatRushTarget
            + " and beat him/her up, inflicting 'Confusion' on him/her! " 
            + "For this mission round only, there is a 75% chance "
            + "his/her base mission voting power will be reversed!")
        }
      ); //end addSystemMessage

    }; //end if beatRushTarget !== "Beat Rush ?"

  }; //end submitScry


  render() {

    if (this.state.usedPower) {

      return (

      <div className="PP1-Lan-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-beat-rush-container">
          You rushed {this.state.beatRushTarget} and beat him/her 
          up, with a 75% chance of causing confused status.  
          Please wait {this.props.timer} seconds for Game 
          Phase 1 to end.
        </div>

      </div>

      ); //end return

    }; //end if usedPower


    return (

      <div className="PP1-Lan-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Beat Rush</button>
        </div> 


        <div className="PP1-beat-rush-container">

          <select 
            className="ui search dropdown"
            value={this.state.beatRushTarget}
            onChange={e => this.setState({ beatRushTarget: e.target.value })}
          >

            <option value="Beat Rush ?" disabled selected>Beat Rush!</option>
            {this.getSelectionChoices()}

          </select>


          <button 
            className="ui yellow button"
            onClick={this.submitBR}
          >
            Beat Up!
          </button>

        </div>


      </div> //end div Lan-container

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
(PP1Lan);