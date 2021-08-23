import React from 'react';

import './PP1CharacterPowers.css';

import { connect } from 'react-redux';

import socket from 'Socket.js';

import PP1NoPower from './PP1NoPower.js';




class PP1Pharaoh extends React.Component {

  state = {

    usedPower: false,
    power1Target: "Power1 ?",

  };


  componentDidMount = () => {


  }; //end componentDidMount




  getSelectionChoices = () => {

    const {missionTeam} = this.props;

    var missionTeamOptionsArray = [];

    for (var i = 0; i < missionTeam.length; i++) {

      //don't want to have yourself as an option
      if (missionTeam[i] === this.props.myName) { continue; };

      missionTeamOptionsArray.push(

         <option value={missionTeam[i]}>{missionTeam[i]}</option>

      ); //end if

    }; //end for

    return missionTeamOptionsArray;

  };



  submitPower1 = () => {

    if (this.state.power1Target == "Power1 ?") { return 0; };

    this.setState({usedPower: true});

    socket.emit("Symbol of Friendship", this.state.power1Target);

  }; //end submitPower1


  render() {

    if (this.props.missionNumber < 2) {
      return <PP1NoPower />;
    };


    if (this.state.usedPower) {

      return (

      <div className="PP1-General-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-power1-container">
          The bonds of friendship can alter even destiny! The 
          friendship between you and {this.state.power1Target} will 
          have a special effect for this mission round! Please 
          wait {this.props.timer} seconds for Game Phase 1 to end.
        </div>

      </div>

      ); //end return

    }; //end if usedPower


    return (

      <div className="PP1-General-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Symbol of Friendship</button>
        </div> 


        <div className="PP1-power1-container">

          <select 
            className="ui search dropdown"
            value={this.state.power1Target}
            onChange={e => this.setState({ power1Target: e.target.value })}
          >

            <option value="Power1 ?" disabled selected>Friends</option>
            {this.getSelectionChoices()}

          </select>


          <button 
            className="ui yellow button"
            onClick={this.submitPower1}
          >
            Bond!
          </button>

        </div>


      </div> //end div PP1-General-Container

    ); //end return


  }; //end render()



}; //end class Seer


const mapStateToProps = (state) => {
  
  return (
         { 
            PH: state.characterPowersHistory,
            missionNumber: state.missionNumber,
            myName: state.name,
            playerList: state.playerList,
            missionTeam: state.missionTeam,
            gamePhase: state.gamePhase,
            timer: state.timer,
         }
  );

};


export default connect(mapStateToProps, 
  {

  }
)
(PP1Pharaoh);