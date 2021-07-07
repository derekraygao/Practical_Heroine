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
        <option value="Shrink">Shrink</option>
        <option value="Multiplier">Multiplier</option>
      </>
    );

  }; //end getStatusScanChoices()




  submitStatusConditionScanChoice = () => {

    if (this.state.senseWhichStatus !== "Which Status?") {

      this.setState({usedPower: true});

      socket.emit("Scan All For One Status", this.state.senseWhichStatus);

    };

  }; //end submitScry


  submitIndividualScan = () => {

    if (this.state.senseIndividualTarget !== "Individual ?") {

      this.setState({usedPower: true});

      socket.emit("Individual Scan", this.state.senseIndividualTarget);

    };

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