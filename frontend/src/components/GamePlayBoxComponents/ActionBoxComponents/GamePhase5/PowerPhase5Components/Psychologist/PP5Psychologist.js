import React from 'react';
import { connect } from 'react-redux';

import "./PP5Psychologist.css";

import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';


import socket from 'Socket.js';
import formatArrayIntoString from 'formatArrayIntoString.js';
import getArrayOfOnlyHeroes from 'getArrayOfOnlyHeroes.js';
import PP5NoPower from '../PP5NoPower.js';


class PP5Psychologist extends React.Component {

  state = {
            goodTarget: "Good ?",
            badTarget: "Bad ?",
            didTarget: "DID ?",
            powerMenuSelection: "Pistan",
            usedPower: false,
          };


  submitButtonPistanClick = () => {

    if (this.state.goodTarget !== "Good ?"
      && this.state.badTarget !== "Bad ?") {

      this.setState({usedPower: true});

      this.props.updatePower("Psychologist", "pistan", true);

      socket.emit("Pistanthrophobia", [this.state.goodTarget, this.state.badTarget]);

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("You induced Pistanthrophobia among " 
          + "the heroes! Remember, you can only use this power "
          + "once per game.")
        }
      ); //end addSystemMessage

    }; //end if

  }; //end submitButtonPistanClick


  submitButtonDIDClick = () => {

    if (this.state.didTarget !== "DID ?") {

      this.setState({usedPower: true});

      this.props.updatePower("Psychologist", "did", true);

      socket.emit("Activate D.I.D.", this.state.didTarget);

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("You broke doctor-patient confidentiality "
            + "and revealed " + this.state.didTarget 
            + "'s Dissociative Identity Disorder. Remember,"
            + " this power can only be used once per game.")
        }
      ); //end addSystemMessage


    }; //end if !== DID ?
  

  }; //end submitButtonDIDClick



  getSelectionChoices = () => {

    var playerChoices = JSON.parse(JSON.stringify(this.props.playerList));

    const allPlayerSelectOptions = playerChoices.map((pName, index) => {

      return (

        <option value={pName}>{pName}</option>

      ); //end return


    });

    return allPlayerSelectOptions;

  };


  getHeroSelectionChoices = () => {

    const {playerList, villainList} = this.props;

    //need to clone array inside getArrayOfOnlyHeroes, 
    //otherwise splicing affects your
    //redux store's playerList as well
    var heroesList = getArrayOfOnlyHeroes(playerList, villainList);

    const heroesSelectOptions = heroesList.map((pName, index) => {

      return (

        <option value={pName}>{pName}</option>

      ); //end return


    });
    

    return heroesSelectOptions;
  
  };


  getVillainSelectionChoices = () => {

    var villainSelectOptions = this.props.villainList.map( (pName, index) => {

      return ( 
        <option value={pName} key={index}>{pName}</option> 
      );

    });

    return villainSelectOptions;

  };



  powerMenuColor = (power) => {

    if (power === this.state.powerMenuSelection) {
      return "yellow-color";
    };

    return "";

  };



  /*
  if both Pistan & DID are used, this function never gets
  called since render() returns PP5NoPower
  */
  returnWhichActionAreaComponent = () => {

    var PHPistan = this.props.PH["Psychologist"].pistan;
    var PHDID = this.props.PH["Psychologist"].did;

    if (this.state.powerMenuSelection == "Pistan"
      && !PHPistan || this.state.powerMenuSelection == "DID" 
      && PHDID) {

      return (

        <>

          <select 
            className="ui search dropdown psychologist-select-right-margin"
            value={this.state.badTarget}
            onChange={e => this.setState({ badTarget: e.target.value })}
          >

            <option value="Bad ?" disabled selected>Villain</option>
            {this.getVillainSelectionChoices()}

          </select>


          <select 
            className="ui search dropdown"
            value={this.state.goodTarget}
            onChange={e => this.setState({ goodTarget: e.target.value })}
          >

            <option value="Good ?" disabled selected>Hero</option>
            {this.getHeroSelectionChoices()}

          </select>


          <button
            className="ui button yellow PP5-margin-left"
            onClick={this.submitButtonPistanClick}
          >
            Distrust!
          </button>


        </>

      ); //end return

    }; //end if powerMenuSelection == "Pistan"

  

    return (

      <>

        <select 
          className="ui search dropdown"
          value={this.state.didTarget}
          onChange={e => this.setState({ didTarget: e.target.value })}
        >

          <option value="DID ?" disabled selected>Players</option>
          {this.getSelectionChoices()}

        </select>
       

        <button
          className="ui button yellow PP5-margin-left"
          onClick={this.submitButtonDIDClick}
        >
          Doubt!
        </button>

      </>

    ); //end return



  }; //end returnWhichActionAreaComponent()






  /*if both powers are used, then this function doesn't get
  called because in render(), PP5NoPower is returned first.
  */
  returnWhichPowerMenuButtons() {

    var PHPistan = this.props.PH["Psychologist"].pistan;
    var PHDID = this.props.PH["Psychologist"].did;

    if (!PHPistan && !PHDID) {

      return (

        <>

          <button 
            className={`ui button ${this.powerMenuColor("Pistan")}`}
            onClick={ () => this.setState({powerMenuSelection: "Pistan"}) }
          >
            Pistanthrophobia
          </button>

          <button 
            className={`ui button ${this.powerMenuColor("DID")}`}
            onClick={ () => this.setState({powerMenuSelection: "DID"}) }
          >
            D.I.D.
          </button>

        </>

      ); //end return

    }; //end if (!PHPistan && !PHDID)


    if (!PHPistan && PHDID) {

      return (

        <button 
          className="ui button"
        >
          Pistanthrophobia
        </button>

      ); //end return

    }; //end if (!PHPistan && PHDID)



    if (!PHDID & PHPistan) {

      return (

          <button 
            className="ui button"
          >
            D.I.D.
          </button>

      ); //end return

    }; //end if (!PHDID & PHPistan)


  }; //end returnWhichPowerMenuButtons()




  render() {

    var PHPistan = this.props.PH["Psychologist"].pistan;
    var PHDID = this.props.PH["Psychologist"].did;

    if (PHPistan && PHDID) {
      return <PP5NoPower />;
    };


    if (this.state.usedPower) {

      return (

        <div className="PP5-general-container">

          <div className="PP5-powers-menu-bar-container orange ui buttons">
            <button className="ui button"></button>
          </div> 

          <div className="PP5-general-action-area-container">
            The power of psychology can be more effective than 
            magic! Please wait {this.props.timer} seconds for 
            Game Phase 5 to end.
          </div>

        </div>


      ); //end return

    }; //end usedPower



    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          
          {this.returnWhichPowerMenuButtons()}

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
(PP5Psychologist);