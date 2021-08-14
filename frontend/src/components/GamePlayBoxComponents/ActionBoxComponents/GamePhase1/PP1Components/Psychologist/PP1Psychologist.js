import React from 'react';

import './PP1Psychologist.css';

import { connect } from 'react-redux';
import {updateCharacterPowerHistory} from 'actions/updateCharacterPowerHistory.js';
import {systemMessages} from 'actions/systemMessages.js';
import {calculateNumberofTeamMembers} from 'calculateNumberofTeamMembers.js';


import formatArrayIntoString from 'formatArrayIntoString.js';
import socket from 'Socket.js';



class PP1Psychologist extends React.Component {

  state = {

    predictionArr: [],
    powerUsed: false

  };


  componentDidMount = () => {


  }; //end componentDidMount


  updatePredictionArr = (_name) => {

    var pArr = this.state.predictionArr;

    var q = pArr.indexOf(_name);
  
    if (q > -1) {

      pArr.splice(q, 1);

      this.setState({predictionArr: pArr});

      return 0;

    }; 


    pArr.push(_name);

    if (pArr.length > 
      calculateNumberofTeamMembers(
        this.props.missionNumber, this.props.playerList.length)
      ) 

    { 

      pArr.shift();

    }; //end if pArr.length > mission team size


    this.setState({predictionArr: pArr});

  }; //end updatePredictionArr


  predictionButtonColor = (_name) => {

    if (this.state.predictionArr.includes(_name)) {
        return "green";
    };

    return "yellow";

  };


  getPlayerButtonChoices = () => {

    //need to clone array, otherwise splicing affects your
    //redux store's playerList as well
    var choicesArr = JSON.parse(JSON.stringify(this.props.playerList));


    var predictionChoices = choicesArr.map((_name, index) => {

      return (

        <button 
          className={`ui ${this.predictionButtonColor(_name)} button`}
          onClick={ () => {this.updatePredictionArr(_name)} }
        >
          {_name}
        </button>

      ); //end return


    });

    return predictionChoices;

  };


  submitPredictedTeam = () => {
  
    if (this.state.predictionArr.length == 
      calculateNumberofTeamMembers(
        this.props.missionNumber, this.props.playerList.length)
      ) 

    { 

      this.setState({powerUsed: true});

      socket.emit("Submit Predicted Team", this.state.predictionArr);


      var pMessage = "For Mission " + this.props.missionNumber 
      + ", you predicted a team of: " 
      + formatArrayIntoString(this.state.predictionArr) + ".";

      this.props.addSystemMessage(
        {
          type: "power",
          message: pMessage
        }
      );


    }; //end if pArr.length == mission team size

  }; //end submitPredictedTeam


  render() {

    var {missionNumber, playerList} = this.props;

    if (this.state.powerUsed) {

      return (

      <div className="PP1-Psychologist-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button"></button>
        </div> 

        <div className="PP1-prediction-container">
          You predicted that {formatArrayIntoString(this.state.predictionArr)} 
          will be on the mission team! Please wait {this.props.timer} 
          &nbsp;seconds for Game Phase 1 to end.
        </div>

      </div>

      ); //end return

    }; //end if corruption !==



    return (

      <div className="PP1-Psychologist-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Prediction</button>
        </div> 


        <div className="PP1-prediction-container-power">


          <div className="team-size-text-container">
            Mission {missionNumber}: {calculateNumberofTeamMembers(missionNumber, playerList.length)} 
            &nbsp;Person Team
          </div>


          <div className="prediction-buttons-container">

            {this.getPlayerButtonChoices()}

            <button
              className="ui orange button submit-predict-button"
              onClick={this.submitPredictedTeam}
            >
              Predict!
            </button>

          </div>


        </div>


      </div> //end div Umbra-Lord-Container

    ); //end return


  }; //end render()



}; //end class PP1NoPower


const mapStateToProps = (state) => {
  
  return (
         { 
            myName: state.name,
            missionNumber: state.missionNumber,
            playerList: state.playerList,
            timer: state.timer,
         }
  );

};


export default connect(mapStateToProps, 
  {
    addSystemMessage: systemMessages,
  }
)
(PP1Psychologist);