import React from 'react';
import { connect } from 'react-redux';

import './css/PowerPhase1.css';

import {timer} from 'actions/timer.js';
import socket from 'Socket.js';

import PP1NoPower from './PowerPhase1Components/PP1NoPower.js';


var timerInterval;

class PowerPhase1 extends React.Component {

  whichPowerPhase1Component = () => {

    switch (this.props.role) {

      case "Princess": 

        return <PP1NoPower />;

      case "Marcus":
        return <PP1NoPower />;

      case "Umbra Lord":
        return <PP1NoPower />;


      default:
        return <PP1NoPower />;


    }; //end switch


  }; //end whichActionBoxComponent()


  componentDidMount = () => {

    timerInterval = setInterval(this.timerCountdown, 1000);

  };


  componentWillUnmount() {

    clearInterval(timerInterval);

  };


  timerCountdown = () => {

    var newTime = (this.props.timer - 1);

    if (newTime < 0) {

      clearInterval(timerInterval);
      socket.emit("End Power Phase 1");

    } else {

      this.props.updateTimer(newTime);

    };


  }; //end timerCountdown()





  render() {

    return (

      this.whichPowerPhase1Component()

    ); //end return

  }; //end render()



}; //end class ActionBox



const mapStateToProps = (state) => {
  
  return (
         { 
            role: state.role,
            timer: state.timer
         }
  );

};


export default connect(mapStateToProps, {updateTimer: timer})(PowerPhase1);