import React from 'react';
import { connect } from 'react-redux';


import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';
import socket from 'Socket.js';


class PP5Ranger extends React.Component {

  state = {
            antiMagicTarget: "Anti Magic ?",
            shrinkTarget: "Shrink ?",
            powerMenuSelection: "Anti Magic",
            usedPower: false,
          };


  submitButtonAntiMagicClick = () => {

    if (this.state.antiMagicTarget !== "Anti Magic ?") {

      this.setState({usedPower: true});

      socket.emit("Anti-Magic Ray", this.state.antiMagicTarget);

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("You used a forbidden michaneka to blast " 
          + this.state.antiMagicTarget + " with an anti-magic ray!")
        }
      ); //end addSystemMessage

    }; //end if

  }; //end submitButtonSpyClick


  submitButtonShrinkClick = () => {

    if (this.state.shrinkTarget !== "Shrink ?") {

      this.setState({usedPower: true});

      socket.emit("Shrink Ray", this.state.shrinkTarget);

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("You shrunk " + this.state.shrinkTarget 
            + "'s team & mission voting power for 2 turns!")
        }
      ); //end addSystemMessage

    }; //end if

  }; //end submitButtonVanishClick



  getSelectionChoices = () => {

    var playerChoices = JSON.parse(JSON.stringify(this.props.missionTeam));

    var q = playerChoices.indexOf(this.props.myName);

    if (q > -1) {
      playerChoices.splice(q, 1);
    };


    const allPlayerSelectOptions = playerChoices.map((pName, index) => {

      return (

        <option value={pName}>{pName}</option>

      ); //end return


    });


    return allPlayerSelectOptions;


  }; //end getSelectionChoices


  powerMenuColor = (power) => {

    if (power === this.state.powerMenuSelection) {
      return "yellow-color";
    };

    return "";

  };



  returnWhichActionAreaComponent = () => {

    if (this.state.powerMenuSelection == "Anti Magic") {

      return (

        <>

          <select 
            className="ui search dropdown"
            value={this.state.antiMagicTarget}
            onChange={e => this.setState({ antiMagicTarget: e.target.value })}
          >

            <option value="Anti Magic ?" disabled selected>Anti-Magic</option>
            {this.getSelectionChoices()}

          </select>


          <button
            className="ui button yellow PP5-margin-left"
            onClick={this.submitButtonAntiMagicClick}
          >
            Anti-Magic Blast!
          </button>


        </>

      ); //end return

    }; //end if powerMenuSelection == "Spy"

    //Vanish
    return (

      <>

          <select 
            className="ui search dropdown"
            value={this.state.shrinkTarget}
            onChange={e => this.setState({ shrinkTarget: e.target.value })}
          >

            <option value="Shrink ?" disabled selected>Shrink</option>
            {this.getSelectionChoices()}

          </select>


          <button
            className="ui button yellow PP5-margin-left"
            onClick={this.submitButtonShrinkClick}
          >
            Shrink!
          </button>


      </>

    ); //end return

  }; //end returnWhichActionAreaComponent()




  render() {

    if (this.state.usedPower) {

      return (

        <div className="PP5-general-container">

          <div className="PP5-powers-menu-bar-container orange ui buttons">
            <button className="ui button"></button>
          </div> 

          <div className="PP5-general-action-area-container">
            You used your Yellow Ranger powers, along with 
            forbidden michaneka, to blast your enemies away! 
            Please wait {this.props.timer} seconds for Game 
            Phase 5 to end.
          </div>

        </div>


      ); //end return

    }; //end if PH.berserk = true



    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          
          <button 
            className={`ui button ${this.powerMenuColor("Anti Magic")}`}
            onClick={ () => this.setState({powerMenuSelection: "Anti Magic"}) }
          >
            Anti-Magic Ray
          </button>
          <button 
            className={`ui button ${this.powerMenuColor("Shrink")}`}
            onClick={ () => this.setState({powerMenuSelection: "Shrink"}) }
          >
            Shrink Ray
          </button>

        </div> 


        <div className="PP5-general-action-area-container">

          {this.returnWhichActionAreaComponent()}

        </div>

      </div> //end div PP5-general-container


    ); //end return

  }; //end render()



}; //end class PP5Marcus



const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            playerList: state.playerList,
            missionTeam: state.missionTeam,
            PH: state.characterPowersHistory,
            missionNumber: state.missionNumber,
            role: state.role,
            timer: state.timer
         }
  );

};


export default connect(mapStateToProps, 
  {
    updatePower: updateCharacterPowerHistory,
    addSystemMessage: systemMessages,
  }
)
(PP5Ranger);