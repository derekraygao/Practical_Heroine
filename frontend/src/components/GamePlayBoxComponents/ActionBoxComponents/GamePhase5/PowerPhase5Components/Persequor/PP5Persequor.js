import React from 'react';
import { connect } from 'react-redux';


import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';
import socket from 'Socket.js';


class PP5Persequor extends React.Component {

  state = {
            usedPower: false,
          };


  submitButtonPower1 = () => {


    this.setState({usedPower: true});

    socket.emit("Activate Identity Theft");

    this.props.addSystemMessage(
      {
        type: "power",
        message: ("You activated Identity Theft! You will steal " 
          + "the identity of a randomly chosen hero for the next " 
          + "mission round only!")
      }
    ); //end addSystemMessage


  }; //end submitButtonPower1



  returnWhichActionAreaComponent = () => {

    if (this.state.powerMenuSelection == "Thunder Wave") {

      return (

        <>

          <select 
            className="ui search dropdown"
            value={this.state.thunderWaveTarget}
            onChange={e => this.setState({ thunderWaveTarget: e.target.value })}
          >

            <option value="Thunder Wave ?" disabled selected>Thunder Wave</option>
            {this.getSelectionChoices()}

          </select>


          <button
            className="ui button yellow PP5-margin-left"
            onClick={this.submitButtonThunderWaveClick}
          >
            Shock!
          </button>


        </>

      ); //end return

    }; //end if powerMenuSelection == "Spy"

    //Vanish
    return (

      <>

          <select 
            className="ui search dropdown"
            value={this.state.icePunchTarget}
            onChange={e => this.setState({ icePunchTarget: e.target.value })}
          >

            <option value="Ice Punch ?" disabled selected>Ice Punch</option>
            {this.getSelectionChoices()}

          </select>


          <button
            className="ui button yellow PP5-margin-left"
            onClick={this.submitButtonIcePunchClick}
          >
            Freeze
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
            You used your control over the elements to 
            attack your enemies with magic! Please 
            wait {this.props.timer} seconds for Game 
            Phase 5 to end.
          </div>

        </div>


      ); //end return

    }; //end if PH.berserk = true



    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          
          <button 
            className={`ui button ${this.powerMenuColor("Thunder Wave")}`}
            onClick={ () => this.setState({powerMenuSelection: "Thunder Wave"}) }
          >
            Thunder Wave
          </button>
          <button 
            className={`ui button ${this.powerMenuColor("Ice Punch")}`}
            onClick={ () => this.setState({powerMenuSelection: "Ice Punch"}) }
          >
            Ice Punch
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
(PP5Persequor);