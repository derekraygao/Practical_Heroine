import React from 'react';

import './PP1Sensor.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';

class PP1Sensor extends React.Component {

  state = {

    usedPower: false,
    senseWhichStatus: "Which Status ?",
    senseIndividualTarget: "Individual ?",
    whichPowerTab: "All",

  };


  componentDidMount = () => {


  }; //end componentDidMount



  //for individual scan
  getSelectionChoices = () => {

    const {playerList} = this.props;

    const allPlayerSelectOptions = playerList.map((pName, index) => {

      return (

        <option value={pName}>{pName}</option>

      ); //end return


    });

    return allPlayerSelectOptions;

  };



  getStatusScanChoices = () => {

    return (
      <>
        <option value="FS Bomb">FS Bomb</option>
        <option value="Burn">Burn</option>
        <option value="Soul Mark">Soul Mark</option>
        <option value="Poison">Poison</option>
        <option value="Shrink">Shrink</option>
        <option value="Multiplier">Multiplier</option>
        <option value="Boost">Boost</option>
        <option value="Energy Pool">Energy Pool</option>
        <option value="Injury">Injury</option>
        <option value="Entrancement">Entrancement</option>
        <option value="Marked Man">Marked Man</option>
        <option value="Slow">Slow</option>
        <option value="Zombie">Zombie</option>
      </>
    );

  }; //end getStatusScanChoices()




  submitStatusConditionScanChoice = () => {
  
    if (this.state.senseWhichStatus == "Which Status ?") { return 0; };

    this.setState({usedPower: true});

    var scanObj = {
      "scanType": "Scan All",
      "target": "nobody chosen",
      "condition": this.state.senseWhichStatus
    };

    socket.emit("Sensor Scan", scanObj);


    this.props.addSystemMessage(
      {
        type: "power",
        message: ("You submitted your samples for analysis! "
        + "You'll get your results after Game Phase 1 "
        + "has ended.")
      }
    );


  }; //end submitScry


  submitIndividualScan = () => {

    if (this.state.senseIndividualTarget == "Individual ?") { return 0; };

    this.setState({usedPower: true});

    var scanObj = {
      "scanType": "Scan Individual",
      "target": this.state.senseIndividualTarget,
      "condition": "none"
    };

    socket.emit("Sensor Scan", scanObj);

    this.props.addSystemMessage(
      {
        type: "power",
        message: ("You submitted your samples for analysis! "
        + "You'll get your results after Game Phase 1 "
        + "has ended.")
      }
    );
   

  }; //end submitScry


  powerTabButtonColor = (tabSelected) => {

    if (tabSelected === this.state.whichPowerTab) {
      return "yellow-color";
    };

    return "";

  };


  displayWhichPowerTab = () => {

    if (this.state.whichPowerTab === "All") {

      return (
        <>

          <select 
            className="ui search dropdown"
            value={this.state.senseWhichStatus}
            onChange={e => this.setState({ senseWhichStatus: e.target.value })}
          >

            <option value="Which Status ?" disabled selected>Statuses</option>
            {this.getStatusScanChoices()}

          </select>


          <button 
            className="ui yellow button"
            onClick={this.submitStatusConditionScanChoice}
          >
            Scan!
          </button>

        </>
      ); //end return

    }; //end if this.state.whichPowerTab === 


    return (

      <>

        <select 
          className="ui search dropdown"
          value={this.state.senseIndividualTarget}
          onChange={e => this.setState({ senseIndividualTarget: e.target.value })}
        >

          <option value="Individual ?" disabled selected>Scan Who?</option>
          {this.getSelectionChoices()}

        </select>


        <button 
          className="ui yellow button"
          onClick={this.submitIndividualScan}
        >
          Scan!
        </button>

      </>

    );

  }; //end displayWhichPowerTab




  render() {

    if (this.state.usedPower) {

      return (

      <div className="PP1-Sensor-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-sense-container">

          You used your scanning powers. Please wait 
          &nbsp;{this.props.timer} seconds for Game Phase 1 to end.

        </div>

      </div>

      ); //end return

    }; //end if usedPower


    return (

      <div className="PP1-Sensor-Container">

        <div className="powers-menu-bar-container orange ui buttons">

          <button 
            className={`ui button ${this.powerTabButtonColor("All")}`}
            onClick={ () => this.setState({whichPowerTab: "All"})  }
          >
            Scan All
          </button>

          <button 
            className={`ui button ${this.powerTabButtonColor("Individual")}`}
            onClick={ () => this.setState({whichPowerTab: "Individual"})  }
          >
            Scan Individual
          </button>
        
        </div> 


        <div className="PP1-sense-container">

          {this.displayWhichPowerTab()}

        </div>


      </div> //end div Sensor-Container

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
(PP1Sensor);