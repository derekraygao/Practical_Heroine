import React from 'react';

import './PP1Hecate.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';

class PP1Hecate extends React.Component {

  state = {

    usedPower: false,
    target1: "nobody1 ?",
    target2: "nobody2 ?",

  };


  componentDidMount = () => {


  }; //end componentDidMount




  getSelectionChoices1 = () => {

    const pList1 = JSON.parse(JSON.stringify(this.props.playerList));

    var q = pList1.indexOf(this.state.target2); 

    if (q > -1) { pList1.splice(q, 1); };

    const allPlayerSelectOptions1 =  pList1.map((pName, index) => {

      return (

        <option value={pName}>{pName}</option>

      ); //end return


    });

    return allPlayerSelectOptions1;

  };


  getSelectionChoices2 = () => {

    const pList2 = JSON.parse(JSON.stringify(this.props.playerList));

    var q = pList2.indexOf(this.state.target1); 

    if (q > -1) { pList2.splice(q, 1); };

    const allPlayerSelectOptions2 =  pList2.map((pName, index) => {

      return (

        <option value={pName}>{pName}</option>

      ); //end return


    });

    return allPlayerSelectOptions2;

  };



  submitExchange = () => {

    if (this.state.target1 !== "nobody1 ?" 
      && this.state.target2 !== "nobody2 ?"
      && this.state.target1 !== this.state.target2) {

      var exchangeArr = [this.state.target1, this.state.target2];

      this.props.updatePower("Hecate", "exchangeOfSpirits", true);
      this.props.updatePower("Hecate", "exchangeArray", exchangeArr);

      var eoSMess = ("During Mission Number " + this.props.missionNumber
        + ", you exchanged the spirits of: " + formatArrayIntoString(exchangeArr));
      
      this.props.addSystemMessage({type: "power", message: eoSMess});

      socket.emit("Exchange of the Spirits", exchangeArr); 

    }; //end if

  }; //end submitExchange


  render() {

    const {"Hecate": {exchangeArray}} = this.props.PH;

    if (this.props.PH["Hecate"]["exchangeOfSpirits"]) {

      return (

      <div className="PP1-Hecate-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-exchange-container">
          EoS can only be used once. You swapped ALL of {exchangeArray[0]}'s
          and {exchangeArray[1]}'s status conditions. 
          Please wait {this.props.timer} seconds for Game Phase 1 to end.
        </div>

      </div>

      ); //end return

    }; //end if usedPower


    return (

      <div className="PP1-Hecate-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Exchange of the Spirits</button>
        </div> 


        <div className="PP1-exchange-container">

          <select 
            className="ui search dropdown"
            value={this.state.target1}
            onChange={e => this.setState({ target1: e.target.value })}
          >

            <option value="nobody1 ?" disabled selected>Player 1</option>
            {this.getSelectionChoices1()}

          </select>

          <select 
            className="ui search dropdown"
            value={this.state.target2}
            onChange={e => this.setState({ target2: e.target.value })}
          >

            <option value="nobody2 ?" disabled selected>Player 2</option>
            {this.getSelectionChoices2()}

          </select>


          <button 
            className="ui yellow button"
            onClick={this.submitExchange}
          >
            Exchange!
          </button>

        </div>


      </div> //end div Umbra-Lord-Container

    ); //end return


  }; //end render()



}; //end class Hecate


const mapStateToProps = (state) => {
  
  return (
         { 
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
(PP1Hecate);