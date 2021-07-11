import React from 'react';

import './PP1BabyDoll.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';


class PP1BabyDoll extends React.Component {

  state = {

    usedPower: false,
    singTargetName: "Sing ?",

  };


  componentDidMount = () => {


  }; //end componentDidMount




  getSelectionChoices = () => {

    var singList = JSON.parse(JSON.stringify(this.props.playerList));

    var q = singList.indexOf(this.props.myName);

    if (q > -1) {
      singList.splice(q, 1);
    };


    //cannot target same player twice in a row
    if (this.props.missionNumber > 1) {
        
      q = singList.indexOf(this.props.PH["Baby Doll"][(this.props.missionNumber - 1)]);

      if (q > -1) {
        singList.splice(q, 1);
      };

    };


    const allPlayerSelectOptions = singList.map((pName, index) => {

      return (

        <option value={pName}>{pName}</option>

      ); //end return


    });

    return allPlayerSelectOptions;

  };


  submitSing = () => {

    if (this.state.singTargetName !== "Sing ?") {

      this.setState({usedPower: true}, () => {


        this.props.addSystemMessage(
          {
            type: "power",
            message: ("For Mission " + this.props.missionNumber
              + ", you lulled " + this.state.singTargetName 
              + " to sleep.")
          }
        );

        this.props.updatePower(
          "Baby Doll", this.props.missionNumber, this.state.singTargetName
        );


      }); //end setState

      socket.emit("Sing", this.state.singTargetName);



    }; //end if


  }; //end submitScry


  render() {

    if (this.state.usedPower) {

      return (

      <div className="PP1-Baby-Doll-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-sing-container">
          Your song lulled {this.state.singTargetName} to 
          sleep. Please wait {this.props.timer} seconds for Game 
          Phase 1 to end.
        </div>

      </div>

      ); //end return

    }; //end if usedPower


    return (

      <div className="PP1-Baby-Doll-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Sing</button>
        </div> 


        <div className="PP1-sing-container">

          <select 
            className="ui search dropdown"
            value={this.state.singTargetName}
            onChange={e => this.setState({ singTargetName: e.target.value })}
          >

            <option value="Sing ?" disabled selected>Sing</option>
            {this.getSelectionChoices()}

          </select>


          <button 
            className="ui yellow button"
            onClick={this.submitSing}
          >
            Sing!
          </button>

        </div>


      </div> //end div Umbra-Lord-Container

    ); //end return


  }; //end render()



}; //end class Seer


const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            PH: state.characterPowersHistory,
            missionNumber: state.missionNumber,
            playerList: state.playerList,
            gamePhase: state.gamePhase,
            timer: state.timer,
         }
  );

};


export default connect(mapStateToProps, 
  {
    updatePower: updateCharacterPowerHistory,
    addSystemMessage: systemMessages,
  }
)
(PP1BabyDoll);