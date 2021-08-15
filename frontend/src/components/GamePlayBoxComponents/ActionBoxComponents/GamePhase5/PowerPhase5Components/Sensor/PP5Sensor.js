import React from 'react';
import { connect } from 'react-redux';

import {calculateNumberofTeamMembers} from 'calculateNumberofTeamMembers.js';


import socket from 'Socket.js';



class PP5Sensor extends React.Component {


  state = {
            powerTarget1: "Power1 ?",
            usedPower: false,
          };



  submitButtonPower1 = () => {

    if (this.state.powerTarget1 == "Power1 ?") { return 0; };

      this.setState({usedPower: true});

      socket.emit("Activate Diagnosis", this.state.powerTarget1);

  }; //end submitButtonPower1



  getSelectionChoices = () => {

    var missionTeamSize = (calculateNumberofTeamMembers(
        this.props.missionNumber, this.props.playerList.length) + 1);

    var selectOptions = [];

    for (var i = 0; i < missionTeamSize; i++) {

      selectOptions.push(<option value={i}>{i}</option>);

    }; //end for

    return selectOptions;

  };




  returnWhichActionAreaComponent = () => {

    return (

      <>

        <select 
          className="ui search dropdown"
          value={this.state.powerTarget1}
          onChange={e => this.setState({ powerTarget1: e.target.value })}
        >

          <option value="Power1 ?" disabled selected>Number</option>
          {this.getSelectionChoices()}

        </select>


        <button
          className="ui button yellow PP5-margin-left"
          onClick={this.submitButtonPower1}
        >
          Diagnose!
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
            Sensational! You tested your sensing powers! Were you 
            right or wrong? Please wait {this.props.timer} seconds 
            for Game Phase 5 to end.
          </div>

        </div>


      ); //end return

    }; //end usedPower



    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          
          <button className="ui button">
            Diagnosis
          </button>

        </div> 


        <div className="PP5-general-action-area-container">

          {this.returnWhichActionAreaComponent()}

        </div>

      </div> //end div PP5-general-container


    ); //end return

  }; //end render()



}; //end class PP5Lottie



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

  }
)
(PP5Sensor);