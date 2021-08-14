import React from 'react';
import { connect } from 'react-redux';


import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';
import socket from 'Socket.js';


class PP5DetectiveChat extends React.Component {

  state = {
            interrogateTarget: "Interrogate ?",
            usedPower: false,
          };



  submitButtonClick = () => {

    if (this.state.interrogateTarget !== "Interrogate ?") {

      this.setState({usedPower: true});

      socket.emit("Interrogation", this.state.interrogateTarget);

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("You interrogated " 
          + this.state.interrogateTarget + ". " + "You will find "
          + "out if he/she clicked the 'Success' button, the 'Fail' "
          + "button, or used a 'Power'. You will get the results "
          + "after the mission has ended.")
        }
      ); //end addSystemMessage

    }; //end if

  }; //end submitButtonVanishClick



  getSelectionChoices = () => {

    var interrogationList = JSON.parse(JSON.stringify(this.props.missionTeam));

    var q = interrogationList.indexOf(this.props.myName);

    if (q > -1) {
      interrogationList.splice(q, 1);
    };


    const allPlayerSelectOptions = interrogationList.map((pName, index) => {

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
            You interrogated {this.state.interrogateTarget}. 
            At the end of the round, you will find out how 
            he/she voted. Please wait {this.props.timer} seconds 
            for Game Phase 5 to end.
          </div>

        </div>


      ); //end return

    }; //end if PH.berserk = true



    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          
          <button className="ui button">
            Interrogation
          </button>

        </div> 


        <div className="PP5-general-action-area-container">

          <select 
            className="ui search dropdown"
            value={this.state.interrogateTarget}
            onChange={e => this.setState({ interrogateTarget: e.target.value })}
          >

            <option value="Interrogate ?" disabled selected>Interrogation</option>
            {this.getSelectionChoices()}

          </select>


          <button
            className="ui button yellow PP5-margin-left"
            onClick={this.submitButtonClick}
          >
            Interrogate!
          </button>

        </div>

      </div> //end div PP5-general-container


    ); //end return

  }; //end render()



}; //end class PP5DetectiveChat



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
(PP5DetectiveChat);