import React from 'react';
import { connect } from 'react-redux';


import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';


import socket from 'Socket.js';
import formatArrayIntoString from 'formatArrayIntoString.js';
import getArrayOfOnlyHeroes from 'getArrayOfOnlyHeroes.js';


class PP5Spiritualist extends React.Component {

  state = {
            soulMarkTarget: "Mark ?",
            soulScanTarget: "Scan ?",
            powerMenuSelection: "Mark",
            usedPower: false,
          };


  submitButtonMarkClick = () => {

    if (this.state.soulMarkTarget !== "Mark ?") {

      this.setState({usedPower: true});

      socket.emit("Mark Player's Soul Sea", this.state.soulMarkTarget);

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("You marked the soul sea of " 
            + this.state.soulMarkTarget + ".")
        }
      ); //end addSystemMessage

    }; //end if

  }; //end submitButtonMarkClick


  submitButtonScanClick = () => {

    if (this.state.soulScanTarget !== "Scan ?") {

      this.setState({usedPower: true});

      socket.emit("Scan Player's Soul Sea", this.state.soulScanTarget);

    };

  }; //end submitButtonScanClick



  getSelectionOfHeroesOnTheMission() {

    var heroesList = getArrayOfOnlyHeroes(this.props.playerList, 
                                          this.props.villainList
                                         );

    var heroesOnTheMissionList = [];

    for (var i = 0; i < heroesList.length; i++) {

      if (this.props.missionTeam.includes(heroesList[i])) {
        heroesOnTheMissionList.push(heroesList[i]);
      };

    }; //end for

    var heroOptions = heroesOnTheMissionList.map( (pName, index) => {

      return (
        <option value={pName} key={index}>{pName}</option>
      );

    });


    return heroOptions;


  }; //end getSelectionOfHeroesOnTheMission()



  powerMenuColor = (power) => {

    if (power === this.state.powerMenuSelection) {
      return "yellow-color";
    };

    return "";

  };



  returnWhichActionAreaComponent = () => {

    if (this.state.powerMenuSelection == "Mark") {

      return (

        <>

          <select 
            className="ui search dropdown"
            value={this.state.soulMarkTarget}
            onChange={e => this.setState({ soulMarkTarget: e.target.value })}
          >

            <option value="Mark ?" disabled selected>Mark Soul</option>
            {this.getSelectionOfHeroesOnTheMission()}

          </select>


          <button
            className="ui button purple PP5-margin-left"
            onClick={this.submitButtonMarkClick}
          >
            Mark Soul!
          </button>


        </>

      ); //end return

    }; //end if powerMenuSelection == "Therapy"


    //Scan
    return (

        <>

          <select 
            className="ui search dropdown"
            value={this.state.soulScanTarget}
            onChange={e => this.setState({ soulScanTarget: e.target.value })}
          >

            <option value="Scan ?" disabled selected>Scan Soul</option>
            {this.getSelectionOfHeroesOnTheMission()}

          </select>


          <button
            className="ui button purple PP5-margin-left"
            onClick={this.submitButtonScanClick}
          >
            Scan Soul!
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
            Your mastery of souls allows you to peer beyond 
            the boundary of life and death. Please 
            wait {this.props.timer} seconds for Game 
            Phase 5 to end.
          </div>

        </div>


      ); //end return

    }; //end usedPower



    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          
          <button 
            className={`ui button ${this.powerMenuColor("Mark")}`}
            onClick={ () => this.setState({powerMenuSelection: "Mark"}) }
          >
            Soul Mark
          </button>
          <button 
            className={`ui button ${this.powerMenuColor("Scan")}`}
            onClick={ () => this.setState({powerMenuSelection: "Scan"}) }
          >
            Soul Scan
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
            villainList: state.villainList,
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
(PP5Spiritualist);