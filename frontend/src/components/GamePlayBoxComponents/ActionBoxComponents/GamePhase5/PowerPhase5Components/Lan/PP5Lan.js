import React from 'react';
import { connect } from 'react-redux';


import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';
import socket from 'Socket.js';


class PP5Lan extends React.Component {

  state = {
            intimidateTarget: "Intimidate ?",
            usedPower: false,
          };


  submitButtonClick = () => {

    if (this.state.intimidateTarget !== "Intimidate ?") {

      this.setState({usedPower: true});

      socket.emit("Activate Intimidation", this.state.intimidateTarget);

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("You used 'Intimidate' against: " 
            + this.state.intimidateTarget + ".")
        }
      ); //end addSystemMessage

    }; //end if

  }; //end submitButtonClick



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

  };





  render() {

    if (this.state.usedPower) {

      return (

        <div className="PP5-general-container">

          <div className="PP5-powers-menu-bar-container orange ui buttons">
            <button className="ui button"></button>
          </div> 

          <div className="PP5-general-action-area-container">
            The power of Leo intimidates your enemy: {this.state.intimidateTarget}. Please 
            wait {this.props.timer} seconds for Game Phase 
            5 to end.
          </div>

        </div>


      ); //end return

    }; //end if PH.berserk = true



    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          
          <button 
            className="ui button"
          >
            Intimidate
          </button>

        </div> 


        <div className="PP5-general-action-area-container">

          <select 
            className="ui search dropdown"
            value={this.state.intimidateTarget}
            onChange={e => this.setState({ intimidateTarget: e.target.value })}
          >

            <option value="Intimidate ?" disabled selected>Intimidate</option>
            {this.getSelectionChoices()}

          </select>


          <button
            className="ui button yellow PP5-margin-left"
            onClick={this.submitButtonClick}
          >
            Intimidate!
          </button>

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
(PP5Lan);