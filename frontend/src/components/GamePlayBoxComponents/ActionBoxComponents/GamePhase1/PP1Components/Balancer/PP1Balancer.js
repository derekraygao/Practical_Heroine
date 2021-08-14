import React from 'react';

import './PP1Balancer.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import socket from 'Socket.js';

class PP1Balancer extends React.Component {

  state = {

    balanceArr: [],
    powerUsed: false

  };


  componentDidMount = () => {


  }; //end componentDidMount


  updateBalanceArr = (_name) => {

    var bArr = this.state.balanceArr;

    var q = bArr.indexOf(_name);
  
    if (q > -1) {

      bArr.splice(q, 1);

      this.setState({balanceArr: bArr});

      return 0;

    }; 

    bArr.push(_name);

    this.setState({balanceArr: bArr});

    if (bArr.length === 2) { 

      this.setState({powerUsed: true});

      socket.emit("Weighing of Souls", bArr);

    };


  }; //end updateBalanceArr


  balanceButtonColor = (_name) => {

    if (this.state.balanceArr.includes(_name)) {
        return "green";
    };

    return "yellow";

  };


  getPlayerButtonChoices = () => {

    //need to clone array, otherwise splicing affects your
    //redux store's playerList as well
    var choicesArr = JSON.parse(JSON.stringify(this.props.playerList));

    //remove yourself; cannot use yourself to 
    //balance against another player
    var q = choicesArr.indexOf(this.props.myName);
    if (q > -1) { choicesArr.splice(q, 1); };

    var balancerChoices = choicesArr.map((_name, index) => {



      return (

        <button 
          className={`ui ${this.balanceButtonColor(_name)} button`}
          onClick={ () => {this.updateBalanceArr(_name)} }
        >
          {_name}
        </button>

      ); //end return


    });

    return balancerChoices;

  };


  render() {

    if (this.state.powerUsed) {

      return (

      <div className="PP1-Balancer-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-balance-container">
          You used the mystic scales to perform the weighing of souls: 
          &nbsp;{this.state.balanceArr[0]} vs. {this.state.balanceArr[1]}. 
          Please wait {this.props.timer} seconds for Game Phase 1 
          to end.
        </div>

      </div>

      ); //end return

    }; //end if corruption !==



    return (

      <div className="PP1-Balancer-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Weighing of Souls</button>
        </div> 


        <div className="PP1-balance-container">

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
(PP1Balancer);