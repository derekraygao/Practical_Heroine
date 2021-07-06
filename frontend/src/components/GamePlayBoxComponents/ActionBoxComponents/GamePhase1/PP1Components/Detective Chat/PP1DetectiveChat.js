import React from 'react';

import './PP1DetectiveChat.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import PP1NoPower from '../PP1NoPower.js';

import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';


//remember MissionTeam only gets reset in Phase 2, so it should not
//be reset yet. However, if disconnected and reconnect, for
//Detective Chat role, need to get Mission Team from server again

class PP1DetectiveChat extends React.Component {

  state = {

    usedPower: false,
    investigateTarget: "Investigate ?",
    endVotePower: 0,

  };


  componentDidMount = () => {


    socket.on("Investigation Results", (endVotePower) => {

      this.setState({endVotePower: endVotePower}, () => {

        var mess = "For the last mission, " + this.state.investigateTarget 
        + "'s end vote power was: " + this.state.endVotePower;

        this.props.addSystemMessage({type: "power", message: mess});

      }); //end setState


    }); //end socket.on


  }; //end componentDidMount




  getSelectionChoices = () => {

    const {missionTeam} = this.props;

    var investigateSelectOptionsArray = [];

    for (var i = 0; i < missionTeam.length; i++) {

      //don't want to have yourself as an option
      if (missionTeam[i] === this.props.myName) { continue; };

      investigateSelectOptionsArray.push(

         <option value={missionTeam[i]}>{missionTeam[i]}</option>

      ); //end if

    }; //end for

    return investigateSelectOptionsArray;

  };


  submitInvestigation = () => {

    if (this.state.investigateTarget !== "Investigate ?") {

      this.setState({usedPower: true});

      socket.emit("Investigate", this.state.investigateTarget);

    };

  }; //end submitScry


  render() {

    if (this.props.missionNumber === 1) {
      return <PP1NoPower />; 
    }; 


    if (this.state.usedPower) {

      return (

      <div className="PP1-Detective-Chat-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-investigate-container">
          Investigation Results: {this.state.investigateTarget}'s 
          end vote power for the last mission was: {this.state.endVotePower}
          . Please wait {this.props.timer} seconds for Game 
          Phase 1 to end.
        </div>

      </div>

      ); //end return

    }; //end if usedPower


    return (

      <div className="PP1-Detective-Chat-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Investigate</button>
        </div> 


        <div className="PP1-investigate-container">

          <select 
            className="ui search dropdown"
            value={this.state.investigateTarget}
            onChange={e => this.setState({ investigateTarget: e.target.value })}
          >

            <option value="Investigate ?" disabled selected>Investigate</option>
            {this.getSelectionChoices()}

          </select>


          <button 
            className="ui yellow button"
            onClick={this.submitInvestigation}
          >
            Investigate!
          </button>

        </div>


      </div> //end div 

    ); //end return


  }; //end render()



}; //end class Seer


const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            missionTeam: state.missionTeam,
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
(PP1DetectiveChat);