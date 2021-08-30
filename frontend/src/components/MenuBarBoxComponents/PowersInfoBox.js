import React from 'react';
import { connect } from 'react-redux';

import './css/PowersInfoBox.css';

import QuickGuide from './CharacterPowers/QuickGuide.js';

import Rules from './CharacterPowers/Rules.js';

import PrincessPowerInfo from './CharacterPowers/PrincessPowerInfo.js';
import IchigoPowerInfo from './CharacterPowers/IchigoPowerInfo.js';
import SaintessPowerInfo from './CharacterPowers/SaintessPowerInfo.js';
import MarcusPowerInfo from './CharacterPowers/MarcusPowerInfo.js';
import SeerPowerInfo from './CharacterPowers/SeerPowerInfo.js';
import AuraKnightPowerInfo from './CharacterPowers/AuraKnightPowerInfo.js';
import OraclePowerInfo from './CharacterPowers/OraclePowerInfo.js';
import BalancerPowerInfo from './CharacterPowers/BalancerPowerInfo.js';
import PearPowerInfo from './CharacterPowers/PearPowerInfo.js';
import DetectiveChatPowerInfo from './CharacterPowers/DetectiveChatPowerInfo.js';
import RangerPowerInfo from './CharacterPowers/RangerPowerInfo.js';
import ScientistPowerInfo from './CharacterPowers/ScientistPowerInfo.js';
import EsperPowerInfo from './CharacterPowers/EsperPowerInfo.js';
import JailerPowerInfo from './CharacterPowers/JailerPowerInfo.js';
import SensorPowerInfo from './CharacterPowers/SensorPowerInfo.js';
import LottiePowerInfo from './CharacterPowers/LottiePowerInfo.js';
import LanPowerInfo from './CharacterPowers/LanPowerInfo.js';
import PharaohPowerInfo from './CharacterPowers/PharaohPowerInfo.js';


import UmbraLordPowerInfo from './CharacterPowers/UmbraLordPowerInfo.js';
import HecatePowerInfo from './CharacterPowers/HecatePowerInfo.js';
import BombermanPowerInfo from './CharacterPowers/BombermanPowerInfo.js';
import NoahPowerInfo from './CharacterPowers/NoahPowerInfo.js';
import LieutenantBlitzPowerInfo from './CharacterPowers/LieutenantBlitzPowerInfo.js';
import DelayerPowerInfo from './CharacterPowers/DelayerPowerInfo.js';
import PersequorPowerInfo from './CharacterPowers/PersequorPowerInfo.js';
import BabyDollPowerInfo from './CharacterPowers/BabyDollPowerInfo.js';
import SpiritualistPowerInfo from './CharacterPowers/SpiritualistPowerInfo.js';
import ReverserPowerInfo from './CharacterPowers/ReverserPowerInfo.js';
import ToxiturtlePowerInfo from './CharacterPowers/ToxiturtlePowerInfo.js';
import BackstabberPowerInfo from './CharacterPowers/BackstabberPowerInfo.js';
import PsychologistPowerInfo from './CharacterPowers/PsychologistPowerInfo.js';
import KaguyaPowerInfo from './CharacterPowers/KaguyaPowerInfo.js';



import UnknownPowerInfo from './CharacterPowers/UnknownPowerInfo.js';
import FrozenPowerInfo from './CharacterPowers/FrozenPowerInfo.js';




class PowersInfoBox extends React.Component {

  state = {

    menuSelection: "Character",
    characterScrollPosition: 0,
    quickGuideScrollPosition: 0,
    rulesScrollPosition: 0,

  };


  setScrollPosition = (box, scrollPosition) => {
    
    var newScrollPositionObj = {};
    newScrollPositionObj[box] = scrollPosition;

    this.setState(newScrollPositionObj);

  };


  componentDidMount = () => {

  }; //end componentDidMount


  whichPowerInfoToShow = () => {

    if (this.props.characterStatus["frozen"]) {
      return <FrozenPowerInfo />;
    };


    switch (this.props.myRole) {

      case "Princess":
        return <PrincessPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Ichigo":
        return <IchigoPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Saintess":
        return <SaintessPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Marcus":
        return <MarcusPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Seer":
        return <SeerPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Aura Knight":
        return <AuraKnightPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Oracle":
        return <OraclePowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Balancer":
        return <BalancerPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Pear":
        return <PearPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Detective Chat":
        return <DetectiveChatPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Ranger":
        return <RangerPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Scientist":
        return <ScientistPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Esper":
        return <EsperPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Jailer":
        return <JailerPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Sensor":
        return <SensorPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Lottie":
        return <LottiePowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Lan":
        return <LanPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Pharaoh":
        return <PharaohPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;



      case "Umbra Lord":
        return <UmbraLordPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Hecate":
        return <HecatePowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Bomberman":
        return <BombermanPowerInfo 
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
                />;


      case "Noah":
        return <NoahPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Lieutenant Blitz":
        return <LieutenantBlitzPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Delayer":
        return <DelayerPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Persequor":
        return <PersequorPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Baby Doll":
        return <BabyDollPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Spiritualist":
        return <SpiritualistPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Reverser":
        return <ReverserPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Toxiturtle":
        return <ToxiturtlePowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Backstabber":
        return <BackstabberPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Psychologist":
        return <PsychologistPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "Kaguya":
        return <KaguyaPowerInfo
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.characterScrollPosition}
               />;


      case "???":
        return <UnknownPowerInfo />;

      default:
        return <div>Error! In Character Power Info</div>;


    }; //end switch


  }; //end whichPowerInfoToShow




  whichInfoToShow = () => {

    switch (this.state.menuSelection) {

      case "Character":
        return this.whichPowerInfoToShow();


      case "Quick Guide":
        return <QuickGuide 
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.quickGuideScrollPosition}
               />;

      case "Rules":
        return <Rules 
                  setScrollPosition={this.setScrollPosition}
                  prevScrollPosition={this.state.rulesScrollPosition}
               />;

      default:
        return <div>Error in PowersInfoBox.js</div>;

    }; //end switch


  }; //end whichInfoToShow()





  powerMenuColor = (power) => {

    if (power === this.state.menuSelection) {
      return "yellow-color";
    };

    return "";

  };


  /*need this since position is sticky, so need to manually
  set the height + width*/
  rulesAndInfoMenuWidth = () => {

    if (this.props.gamePhase === 8) {
      return {width: "40%"};
    };

    return {width: "60%"};

  };


  piBoxStyle = () => {

    if (this.props.mainMenuSelection === "powers") {

      if (this.props.gamePhase === 8) {
        return {display: "grid", gridArea: "other-menu-box"};
      };

      return {display: "grid", gridArea: "chat-box"};

    }; //end if mainMenuSelection === notes

    return {display: "none"};

  }; //end displayOrNot



  /*for Character role title, used a ternary operator instead of
  setting it to this.props.myRole directly because I wanted the 
  "none" to be capitalized "None" and was scared of breaking 
  something if I just changed it to "None" inside playerRole reducer*/
  render() {

    return (

      <div class="rules-and-info-box-container" style={this.piBoxStyle()}>

        <div className="rules-and-info-menu orange ui buttons" style={this.rulesAndInfoMenuWidth()}>

          <button 
            className={`ui button ${this.powerMenuColor("Character")}`}
            onClick={ () => this.setState({menuSelection: "Character"}) }
          >
            {this.props.myRole == "none" ? "None" : this.props.myRole}
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Quick Guide")}`}
            onClick={ () => this.setState({menuSelection: "Quick Guide"}) }
          >
            Quick Guide
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("Rules")}`}
            onClick={ () => this.setState({menuSelection: "Rules"}) }
          >
            Rules
          </button>

        </div> 


        {this.whichInfoToShow()}


      </div>

    ); //end return


  }; //end render


}; //end PlayerAndResultsBox()



const mapStateToProps = (state) => {
  
  return (
    { 
      characterStatus: state.characterStatus,
      myRole: state.role,
      gamePhase: state.gamePhase,
      mainMenuSelection: state.mainMenuSelection
    }
  );

};


export default connect(mapStateToProps, 
  {

  })
(PowersInfoBox);

