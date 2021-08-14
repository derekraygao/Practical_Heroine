import React from 'react';
import { connect } from 'react-redux';

import './VillainsGuessPrincessIdentityPhase9.css';

import { systemMessages } from 'actions/systemMessages.js';

import socket from 'Socket.js';
import formatArrayIntoString from 'formatArrayIntoString.js';
import getArrayOfOnlyHeroes from 'getArrayOfOnlyHeroes.js';





class VillainsGuessPrincessIdentityPhase9 extends React.Component {

  state = {
              princessGuess: "princess name ?",
              submittedGuess: false,
          };



  componentDidMount = () => {


  };


  returnPrincessIdentitySelectionChoices() {

    var pList = this.props.playerList;
    var vList = this.props.villainList;

    pList = getArrayOfOnlyHeroes(pList, vList);

    const princessSelectOptions = pList.map((pName, index) => {

      return (

        <option value={pName}>{pName}</option>

      ); //end return


    });

    return princessSelectOptions;

  }; //end returnPrincessIdentitySelectionChoices()


  submitPrincessGuess = () => {

    if (this.state.princessGuess !== "princess name ?") {

      socket.emit("Submit Villain Guess On The Princess's Identity",
                  this.state.princessGuess);

      this.setState({submittedGuess: true});

    };

  };


  submitPrincessActionsOrWaitText = () => {

    if (this.state.submittedGuess) {

      return (

        <div className="submitted-princess-guess-text-container">

          You guessed {this.state.princessGuess} to be the Princess. 
          Please wait until all villains have submitted a guess!

        </div>

      ); //end return

    };

    return (

      <div className="villain-guess-princess-container">


        <div className="villain-guess-princess-text-container">
          Villains! This is your last chance to win! If you 
          successfully guess the identity of the Princess, 
          victory is yours! If discord exists, then majority 
          rules!
        </div>


        <div className="villain-guess-princess-buttons-container">

          <select 
            className="ui search dropdown"
            value={this.state.princessGuess}
            onChange={e => this.setState({ princessGuess: e.target.value })}
          >

            <option value="princess name ?" disabled selected>Princess</option>
            {this.returnPrincessIdentitySelectionChoices()}

          </select>

          <button 
            className="ui yellow button"
            onClick={this.submitPrincessGuess}
          >
            Submit
          </button>

        </div>


      </div>

    ); //end return


  }; //end submitPrincessButtonOrWaitText()



  areYouAVillainGuessingOrNot = () => {

    if (this.props.villainList.includes(this.props.myName)) {

      return (

        <>
          {this.submitPrincessActionsOrWaitText()}
        </>
        
      ); //end return

    }; //end if

    /*if on heroes team */
    return (

      <div className="wait-while-villains-guess-princess-container">

        If {formatArrayIntoString(this.props.villainList)} fail to guess 
        the Princess's identity, the heroes win!

      </div>

    ); //end return

  }; //end areYouAVillainGuessingOrNot



  render() {

    return (
      this.areYouAVillainGuessingOrNot()
    ); //end return

  }; //end render()



}; //end class VillainsGuessPrincessIdentityPhase9



const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            playerList: state.playerList,
            villainList: state.villainList
         }
  );

};


export default connect(mapStateToProps, 
  {

  }
)
(VillainsGuessPrincessIdentityPhase9);