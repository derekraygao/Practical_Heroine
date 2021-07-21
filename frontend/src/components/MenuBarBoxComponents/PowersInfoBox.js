import React from 'react';
import { connect } from 'react-redux';

import './css/PowersInfoBox.css';

import PrincessPowerInfo from './CharacterPowers/PrincessPowerInfo.js';



class PowersInfoBox extends React.Component {

  state = {


  };

  componentDidMount = () => {

  }; //end componentDidMount


  whichPowerInfoToShow = () => {

    switch (this.props.myRole) {

      case "Princess":
        return <PrincessPowerInfo />;



      default:

        return <></>;


    }; //end switch


  }; //end whichPowerInfoToShow









  piBoxStyle = () => {

    if (this.props.mainMenuSelection === "powers") {

      if (this.props.gamePhase === 8) {
        return {display: "flex", gridArea: "other-menu-box"};
      };

      return {display: "flex", gridArea: "chat-box"};

    }; //end if mainMenuSelection === notes

    return {display: "none"};

  }; //end displayOrNot


  render() {

    return (

      <div class="powers-info-box-container" style={this.piBoxStyle()}>

        {this.whichPowerInfoToShow()}

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

