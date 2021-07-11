import React from 'react';

import './PP1Toxiturtle.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import PP1NoPower from '../PP1NoPower.js';
import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';


class PP1Toxiturtle extends React.Component {

  state = {

    usedPower: false,
    poisonTarget: "Poison ?",

  };


  componentDidMount = () => {


  }; //end componentDidMount




  getSelectionChoices = () => {

    var poisonList = JSON.parse(JSON.stringify(this.props.playerList));

    var q = poisonList.indexOf(this.props.myName);

    if (q > -1) { poisonList.splice(q, 1); };


    var poisonBeakArr = this.props.PH["Toxiturtle"]["poisonBeak"];    
    //don't worry about 2, since you shouldn't be able to use 
    //powers to add to the array
    if (poisonBeakArr.length == 1) {

      q = poisonList.indexOf(poisonBeakArr[0].name);

      if (q > -1) { poisonList.splice(q, 1); };

    };


    const allPlayerSelectOptions = poisonList.map((pName, index) => {

      return (

        <option value={pName}>{pName}</option>

      ); //end return


    });

    return allPlayerSelectOptions;

  };

  //don't do individual notification, since everyone gets notified by
  //server
  submitPoisonBeak = () => {

    if (this.state.poisonTarget !== "Poison ?") {

      this.setState({usedPower: true}, () => {

        var poisonBeakArr = this.props.PH["Toxiturtle"]["poisonBeak"];

        poisonBeakArr.push(
          {
            name: this.state.poisonTarget,
            nextMissionItCanBeUsed: (this.props.missionNumber + 2)
          }
        );


        this.props.updatePower(
          "Toxiturtle", "poisonBeak", poisonBeakArr
        );


      }); //end setState

      socket.emit("Poison Beak", this.state.poisonTarget);


    }; //end if


  }; //end submitPoisonBeak


  isItTimeToUsePoisonBeak() {

    var poisonBeakArr = this.props.PH["Toxiturtle"]["poisonBeak"];

    if (poisonBeakArr.length == 0) { return true; };
    if (poisonBeakArr.length >= 2) { return false; };

    //if only used once
    if (this.props.missionNumber >= 
      poisonBeakArr[0].nextMissionItCanBeUsed) {
      return true;
    };

    return false;

  }; //end isItTimeToUsePoisonBeak()


  render() {

    if (!this.isItTimeToUsePoisonBeak()) {
      return <PP1NoPower />;
    };


    if (this.state.usedPower) {

      return (

      <div className="PP1-Toxiturtle-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-poison-beak-container">
          You stabbed {this.state.poisonTarget} with your 
          poisonous beak. Please wait {this.props.timer} seconds for 
          Game Phase 1 to end.
        </div>

      </div>

      ); //end return

    }; //end if usedPower


    return (

      <div className="PP1-Toxiturtle-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Poison Beak</button>
        </div> 


        <div className="PP1-poison-beak-container">

          <select 
            className="ui search dropdown"
            value={this.state.poisonTarget}
            onChange={e => this.setState({ poisonTarget: e.target.value })}
          >

            <option value="Poison ?" disabled selected>Poison Beak</option>
            {this.getSelectionChoices()}

          </select>


          <button 
            className="ui yellow button"
            onClick={this.submitPoisonBeak}
          >
            Poison Beak
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
(PP1Toxiturtle);