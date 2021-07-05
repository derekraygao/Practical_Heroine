import React from 'react';
import './css/PowersMenu.css';

import { connect } from 'react-redux';
import { powersMenuSelection } from 'actions/powersMenuSelection.js';

class PowersMenu extends React.Component {


  whatPowersMenuOptionsToDisplay = () => {

    switch (this.props.role) {

      case "Umbra Lord":
        return this.umbraLordPowerButtons();
        break;


      default:
        return (<button className="ui button"></button>);

    }; //end switch

  }; //end whatPowersMenuOptionsToDisplay



  umbraLordPowerButtons = () => {

    switch (this.props.gamePhase) {

      case 1:
        return (
          <button className="ui button">Corruption</button>
        ); //end return


      case 5:
        return (
          <button className="ui button"></button>
        ); //end return


      case 6:
        return (
          <>
            <button className="ui button">Vote</button>
            <button className="ui button">Bide/Meteor</button>
          </>
        ); //end return


      default:
        return (
          <button className="ui button"></button>
        ); //end return

    }; //end switch

  }; //end UmbraLord


  marcusPowerButtons = () => {

    switch (this.props.gamePhase) {

      case 1:
        return (

          <button></button>
        ); //end return


      case 5:
        return (

          <button></button>
        ); //end return


      case 6:
        return (

          <button></button>
        ); //end return

    }; //end switch

  }; //end marcus


  seerPowerButtons = () => {

    switch (this.props.gamePhase) {

      case 1:
        return (

          <button></button>
        ); //end return


      case 5:
        return (

          <button></button>
        ); //end return


      case 6:
        return (

          <button></button>
        ); //end return

    }; //end switch

  }; //end seer








  showNormalVoteTab = () => {

    if (this.props.gamePhase === 6) {
      return (

        <button 
          className="ui button"
          onClick={() => {return 0}}
        >
          Vote
        </button>

      );//end return
    }; //end if

  }; //end showNormalVoteTab



	render() {

		return (

			<div className="powers-menu-bar orange ui buttons">
          
        {this.showNormalVoteTab()}  
        {this.whatPowersMenuOptionsToDisplay()}

      </div> //end div menu-bar-container

		); //end return



	}; //end render()






}; //end class PowersMenu


const mapStateToProps = (state) => {
  
  return (
         { 
            role: state.role,
            gamePhase: state.gamePhase
         }
  );

};


export default connect(mapStateToProps, 
  {
    
  }
)
(PowersMenu);


