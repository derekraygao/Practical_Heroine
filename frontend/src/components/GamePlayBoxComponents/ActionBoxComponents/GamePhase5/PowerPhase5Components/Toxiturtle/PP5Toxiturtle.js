import React from 'react';
import { connect } from 'react-redux';


import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';

import socket from 'Socket.js';
import getArrayOfOnlyHeroes from 'getArrayOfOnlyHeroes.js';



class PP5Toxiturtle extends React.Component {

  state = {
            glareTarget: "Glare ?",
            usedPower: false,
          };


  submitButtonClick = () => {

    if (this.state.glareTarget !== "Glare ?") {

      this.setState({usedPower: true});

      socket.emit("Toxiturtle Glare", this.state.glareTarget);

      this.props.addSystemMessage(
        {
          type: "power",
          message: ("Glare: There is a 67% chance that " 
            + this.state.glareTarget + " will be "
            + "paralyzed for Mission " + (this.props.missionNumber + 1)
            + ".")
        }
      ); //end addSystemMessage

    }; //end if

  }; //end submitButtonClick()



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




  render() {

    if (this.state.usedPower) {

      return (

        <div className="PP5-general-container">

          <div className="PP5-powers-menu-bar-container orange ui buttons">
            <button className="ui button"></button>
          </div> 

          <div className="PP5-general-action-area-container">
            You directed your terrifying glare on {this.state.glareTarget}. 
            There is a 67% chance he/she will 
            be paralyzed next mission round! Please 
            wait {this.props.timer} seconds for 
            Game Phase 5 to end.
          </div>

        </div>


      ); //end return

    }; //end usedPower



    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          <button className="ui button">
            Glare
          </button>
        </div> 


        <div className="PP5-general-action-area-container">

          <select 
            className="ui search dropdown"
            value={this.state.glareTarget}
            onChange={e => this.setState({ glareTarget: e.target.value })}
          >

            <option value="Glare ?" disabled selected>Glare</option>
            {this.getSelectionOfHeroesOnTheMission()}

          </select>


          <button
            className="ui button yellow PP5-margin-left"
            onClick={this.submitButtonClick}
          >
            Glare!
          </button>


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
(PP5Toxiturtle);