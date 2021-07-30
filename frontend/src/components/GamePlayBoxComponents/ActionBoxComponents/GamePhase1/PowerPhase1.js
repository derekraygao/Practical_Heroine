import React from 'react';
import { connect } from 'react-redux';

import './PowerPhase1.css';

import {timer} from 'actions/timer.js';
import socket from 'Socket.js';

import PP1NoPower from './PP1Components/PP1NoPower.js';
import PP1Frozen from './PP1Components/PP1Frozen.js';
import PP1UsedPower from './PP1Components/PP1UsedPower.js';


import PP1Seer from './PP1Components/Seer/PP1Seer.js';
import PP1Balancer from './PP1Components/Balancer/PP1Balancer.js';
import PP1AuraKnight from './PP1Components/Aura Knight/PP1AuraKnight.js';
import PP1Oracle from './PP1Components/Oracle/PP1Oracle.js';
import PP1DetectiveChat from './PP1Components/Detective Chat/PP1DetectiveChat.js';
import PP1Ranger from './PP1Components/Ranger/PP1Ranger.js';
import PP1Lan from './PP1Components/Lan/PP1Lan.js';
import PP1Esper from './PP1Components/Esper/PP1Esper.js';
import PP1Jailer from './PP1Components/Jailer/PP1Jailer.js';
import PP1Sensor from './PP1Components/Sensor/PP1Sensor.js';
import PP1Saintess from './PP1Components/Saintess/PP1Saintess.js';
import PP1Marcus from './PP1Components/Marcus/PP1Marcus.js';
import PP1Pear from './PP1Components/Pear/PP1Pear.js';

import PP1UmbraLord from './PP1Components/Umbra Lord/PP1UmbraLord.js';
import PP1Noah from './PP1Components/Noah/PP1Noah.js';
import PP1Hecate from './PP1Components/Hecate/PP1Hecate.js';
import PP1Delayer from './PP1Components/Delayer/PP1Delayer.js';
import PP1Reverser from './PP1Components/Reverser/PP1Reverser.js';
import PP1Backstabber from './PP1Components/Backstabber/PP1Backstabber.js';
import PP1BabyDoll from './PP1Components/Baby Doll/PP1BabyDoll.js';
import PP1Toxiturtle from './PP1Components/Toxiturtle/PP1Toxiturtle.js';
import PP1Psychologist from './PP1Components/Psychologist/PP1Psychologist.js';
import PP1Kaguya from './PP1Components/Kaguya/PP1Kaguya.js';



var timerInterval;

class PowerPhase1 extends React.Component {

  state = {
            usedPower: false,
          };


  componentDidMount = () => {

    timerInterval = setInterval(this.timerCountdown, 1000);

  };


  componentWillUnmount() {

    clearInterval(timerInterval);

  };


  usedPhase1Power = () => {

    this.setState({usedPower: true});

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



  whichPowerPhase1Component = () => {

    if (this.state.usedPower) {
      return <></>;
    };


    if (this.props.characterStatus["frozen"]) {
      return <PP1Frozen />;
    };


    switch (this.props.role) {

      case "Princess": 
        return <PP1NoPower />;

      case "Marcus":
        return <PP1Marcus />;

      case "Pear":
        return <PP1Pear />;

      case "Seer":
        return <PP1Seer />;

      case "Aura Knight":
        return <PP1AuraKnight />;

      case "Balancer":
        return <PP1Balancer />;

      case "Oracle":
        return <PP1Oracle />;

      case "Detective Chat":
        return <PP1DetectiveChat />;

      case "Ranger":
        return <PP1Ranger />;

      case "Lan":
        return <PP1Lan />;

      case "Esper":
        return <PP1Esper />;

      case "Jailer":
        return <PP1Jailer />;

      case "Sensor":
        return <PP1Sensor />;

      case "Saintess":
        return <PP1Saintess />;

      case "Umbra Lord":
        return <PP1UmbraLord />;

      case "Noah":
        return <PP1Noah />;

      case "Hecate":
        return <PP1Hecate />;

      case "Delayer":
        return <PP1Delayer />;

      case "Reverser":
        return <PP1Reverser />;

      case "Backstabber":
        return <PP1Backstabber />;

      case "Baby Doll":
        return <PP1BabyDoll />;

      case "Toxiturtle":
        return <PP1Toxiturtle />;

      case "Psychologist":
        return <PP1Psychologist />;

      case "Kaguya":
        return <PP1Kaguya />;

      default:
        return <PP1NoPower />;


    }; //end switch


  }; //end whichActionBoxComponent()


  render() {

    return (

      this.whichPowerPhase1Component()

    ); //end return

  }; //end render()



}; //end class ActionBox



const mapStateToProps = (state) => {
  
  return (
         {  
            characterStatus: state.characterStatus,
            role: state.role,
            timer: state.timer
         }
  );

};


export default connect(mapStateToProps, {updateTimer: timer})(PowerPhase1);