import React from 'react';
import { connect } from 'react-redux';

import './css/PowersInfoBox.css';

import QuickGuide from './CharacterPowers/QuickGuide.js';

import Rules from './CharacterPowers/Rules.js';

import PrincessPowerInfo from './CharacterPowers/PrincessPowerInfo.js';
import IchigoPowerInfo from './CharacterPowers/IchigoPowerInfo.js';


class PowersInfoBox extends React.Component {

  state = {

    menuSelection: "Character",

  };



  componentDidMount = () => {

  }; //end componentDidMount


  whichPowerInfoToShow = () => {

    switch (this.props.myRole) {

      case "Princess":
        return <PrincessPowerInfo />;

      case "Ichigo":
        return <IchigoPowerInfo />;


      default:
        return <div>Error! In Character Power Info</div>;


    }; //end switch


  }; //end whichPowerInfoToShow




  whichInfoToShow = () => {

    switch (this.state.menuSelection) {

      case "Character":
        return this.whichPowerInfoToShow();

      case "Quick Guide":
        return <QuickGuide />;

      case "Rules":
        return <Rules />;

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




  render() {

    return (

      <div class="rules-and-info-box-container" style={this.piBoxStyle()}>

        <div className="rules-and-info-menu orange ui buttons" style={this.rulesAndInfoMenuWidth()}>

          <button 
            className={`ui button ${this.powerMenuColor("Character")}`}
            onClick={ () => this.setState({menuSelection: "Character"}) }
          >
            {this.props.myRole}
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

