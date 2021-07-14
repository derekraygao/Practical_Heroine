import React from 'react';
import './PP1UmbraLord.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import getArrayOfOnlyHeroes from 'getArrayOfOnlyHeroes.js';
import socket from 'Socket.js';

class PP1UmbraLord extends React.Component {

  state = {

    corruptionTarget: "Corrupt ?",

  };


  componentDidMount = () => {



  }; //end componentDidMount


  submitCorruptionTarget = () => {

    if (this.state.corruptionTarget !== "Corrupt ?") {

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("You corrupted " + this.state.corruptionTarget + ".")
        }
      ); //end this.props.addSystemMessage

      this.props.updatePower(
        "Umbra Lord", "corruption", this.state.corruptionTarget);

      socket.emit("Corruption", this.state.corruptionTarget);

    }; //end if

    // do nothing

  }; //end submitCorruptionTarget()




  getSelectionChoices = () => {

    var playerChoices = JSON.parse(JSON.stringify(this.props.playerList));

    var q = playerChoices.indexOf(this.props.myName);

    if (q > -1) {
      playerChoices.splice(q, 1);
    };

    var arrayOfOptions = playerChoices.map( (pName, index) => {

      return (
        <option value={pName} key={index}>{pName}</option>
      );

    });

    return arrayOfOptions;

  }; //end getSelectionChoices()


  /* changed it so Umbra Lord can choose anyone except himeself */
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


  render() {

    const {"Umbra Lord": {corruption, absoluteYes, absoluteNo}} 
    = this.props.PH;

    if (corruption !== "Nobody Selected") {

      return (

      <div className="PP1-Umbra-Lord-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-corruption-container">
          Corruption can only be used once. You corrupted {corruption}. 
          Please wait {this.props.timer} seconds for Game 
          Phase 1 to end.
        </div>

      </div>

      ); //end return

    }; //end if corruption !==



    return (

      <div className="PP1-Umbra-Lord-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Corruption</button>
        </div> 


        <div className="PP1-corruption-container">

          <select 
            className="ui search dropdown"
            value={this.state.corruptionTarget}
            onChange={e => this.setState({ corruptionTarget: e.target.value })}
          >

            <option value="Corrupt ?" disabled selected>Corrupt</option>
            {this.getSelectionChoices()}

          </select>

          <button 
            className="ui yellow button"
            onClick={this.submitCorruptionTarget}
          >
            Corrupt!
          </button>

        </div>


      </div> //end div Umbra-Lord-Container

    ); //end return


  }; //end render()



}; //end class PP1NoPower


const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            PH: state.characterPowersHistory,
            playerList: state.playerList,
            villainList: state.villainList,
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
(PP1UmbraLord);