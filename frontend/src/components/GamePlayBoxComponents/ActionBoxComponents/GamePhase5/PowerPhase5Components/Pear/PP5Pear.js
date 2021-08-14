import React from 'react';
import { connect } from 'react-redux';


import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';
import socket from 'Socket.js';


class PP5Pear extends React.Component {

  state = {
            vanishTarget: "Vanish ?",
            spyTarget: "Spy ?",
            powerMenuSelection: "Spy",
            usedPower: false,
          };


  submitButtonSpyClick = () => {

    if (this.state.spyTarget !== "Spy ?") {

      this.setState({usedPower: true});

      socket.emit("Invisible Spy", this.state.spyTarget);

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("You turned invisible and spied upon: " 
          + this.state.spyTarget + ".")
        }
      ); //end addSystemMessage

    }; //end if

  }; //end submitButtonSpyClick


  submitButtonVanishClick = () => {

    if (this.state.vanishTarget !== "Vanish ?") {

      this.setState({usedPower: true});

      socket.emit("Vanish", this.state.vanishTarget);

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("Your Spectre powers vanished " 
          + this.state.vanishTarget + "'s vote.")
        }
      ); //end addSystemMessage

    }; //end if

  }; //end submitButtonVanishClick



  getSelectionChoices = () => {

    var ghostChoices = JSON.parse(JSON.stringify(this.props.missionTeam));

    var q = ghostChoices.indexOf(this.props.myName);

    if (q > -1) {
      ghostChoices.splice(q, 1);
    };


    const allPlayerSelectOptions = ghostChoices.map((pName, index) => {

      return (

        <option value={pName}>{pName}</option>

      ); //end return


    });

    return allPlayerSelectOptions;

  };


  powerMenuColor = (power) => {

    if (power === this.state.powerMenuSelection) {
      return "yellow-color";
    };

    return "";

  };



  returnWhichActionAreaComponent = () => {

    if (this.state.powerMenuSelection == "Spy") {

      return (

        <>

          <select 
            className="ui search dropdown"
            value={this.state.spyTarget}
            onChange={e => this.setState({ spyTarget: e.target.value })}
          >

            <option value="Spy ?" disabled selected>Invisible Spy</option>
            {this.getSelectionChoices()}

          </select>


          <button
            className="ui button yellow PP5-margin-left"
            onClick={this.submitButtonSpyClick}
          >
            Spy!
          </button>


        </>

      ); //end return

    }; //end if powerMenuSelection == "Spy"

    //Vanish
    return (

      <>

          <select 
            className="ui search dropdown"
            value={this.state.vanishTarget}
            onChange={e => this.setState({ vanishTarget: e.target.value })}
          >

            <option value="Vanish ?" disabled selected>Vanish</option>
            {this.getSelectionChoices()}

          </select>


          <button
            className="ui button yellow PP5-margin-left"
            onClick={this.submitButtonVanishClick}
          >
            Vanish!
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
            Your Spectre powers give you control over corporeality. 
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
            className={`ui button ${this.powerMenuColor("Spy")}`}
            onClick={ () => this.setState({powerMenuSelection: "Spy"}) }
          >
            Invisible Spy
          </button>
          <button 
            className={`ui button ${this.powerMenuColor("Vanish")}`}
            onClick={ () => this.setState({powerMenuSelection: "Vanish"}) }
          >
            Vanish
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
(PP5Pear);