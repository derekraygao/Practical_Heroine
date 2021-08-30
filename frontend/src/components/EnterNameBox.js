import React from 'react';
import './css/GamePlayBox.css';
import { connect } from 'react-redux';

import './css/EnterNameBox.css';

import socket from 'Socket.js';


class EnterNameBox extends React.Component {

  state = {
            enteredName: "",
            ready: false,
            nameTaken: "Nope, not taken!",
            submittedNameAccepted: false, //whether you were successful in sending in a unique name
          };



  componentDidMount = () => {

    socket.on("Name Taken", (name) => { 

      this.setState({nameTaken: name});

    });


    socket.on("Name Was Accepted!", () => {

      this.setState({submittedNameAccepted: true});

    });


  }; //end componentDidMount()


  nameSubmit = () => {
    //console.log(this.state.term);

    if (this.state.enteredName !== "") {

      socket.emit("Submit Player Name", this.state.enteredName);
      this.setState({ enteredName: ""});

    };

  }; //end nameSubmit()



  clickReady = () => {

    socket.emit("Set Player Ready");
    //this.setState({ready: true});

  };


  clickUnready = () => {
 
    socket.emit("Unready Player");
    //this.setState({ready: false});

  };


  /*Roundabout method of checking if ready, but just to make sure server received and set player as ready/unready*/
  amIReady = () => {

    var {playerList} = this.props.roomInfo;

    for (var i = 0; i < playerList.length; i++) {

      if (playerList[i].name == this.props.myName) {
        return (playerList[i].ready);
      };

    }; //end for

    return false;

  }; //end amIReady()



  roomMasterStartGame = () => {

    socket.emit("Ready For New Game");

  };
  


  handleKeyDown = (e) => {

    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      //console.log(this.state.term);

      this.nameSubmit();

    }; //end if e.key === "Enter"

  }; //end handleKeyDown



  inputOnChange = (e) => {

    var inputName = e.target.value;

    if (inputName.length > 12) { 

      inputName = inputName.slice(0, 12)
    
    };


    if (inputName.includes(" ")) {

      inputName = inputName.slice(0, (inputName.length - 1));

    };


    this.setState({ enteredName: inputName });
      
  }; //end inputOnChange



  nameTakenOrNot = () => {

    if (this.state.nameTaken == "Nope, not taken!") {
      return (
          "Welcome, transmigrator! Azurea needs your help! "
          + "Join John, Marcus, Lan, Noah, and Pear as they combat "
          + "the evil Umbras and rescue the missing girls! For " 
          + "starters, please enter your name below."
      );
    };


    //name is taken
    return (

      "Sorry! The name '" + this.state.nameTaken + "' is already "
      + "taken! Everyone in the room needs a unique name! " 
      + "Please enter another name below!"

    ); //end return


  }; //end nameTakenOrNot



  roomMasterDisplayOrNot = () => {

    if (this.props.roomInfo.roomMaster == this.props.myName) {

      return (

        <div className="Enter-Name-Box-Container">
        
          <div className="enter-name-message">
            Hi Room Master {this.props.myName}. When everyone in the 
            room has clicked the 'Ready' button and there are at 
            least 6 players in the room, click the button below 
            to start the game!
          </div>

          <button 
            className="ui button green"
            onClick={this.roomMasterStartGame}
          >
            Start Game!
          </button>

        </div>

      ); //end return

    }; //end if roomMaster == my name



    //not room master
  
    if (this.amIReady()) {

      return (

          <div className="Enter-Name-Box-Container">
            
            <div className="enter-name-message">
              Hi {this.props.myName}. You are ready! When everyone 
              in the room is ready and there are at least 6 players 
              in the room, then the Room Master can start the game! 
              Click the unready button below if you need more time!
            </div>

            <button 
              className="ui button red"
              onClick={this.clickUnready}
            >
              Unready
            </button>

          </div>

      ); //end return

    }; //end if this.state.ready




    return (

      <div className="Enter-Name-Box-Container">
        
        <div className="enter-name-message">
          Hi {this.props.myName}. When you are ready to play, 
          click the ready button below! When everyone in the 
          room has clicked ready and the room has at least 6 
          players, the Room Master can start the game!
        </div>

        <button 
          className="ui button green"
          onClick={this.clickReady}
        >
          Ready
        </button>

      </div>

    ); //end return


  }; //end roomMasterDisplayOrNot




	render() {

    //Anonymous***! is default name in playerNameReducer.js
    if (!this.state.submittedNameAccepted) {

  		return (

  			<div className="Enter-Name-Box-Container">

          <div className="enter-name-message">
            {this.nameTakenOrNot()}
          </div>


          <div className="ui input enter-name-input-field">        

            <textarea
             className="inside-input-fields" //used to prevent keydown events 
             onChange={e => this.inputOnChange(e)}
             type="text" placeholder={"Enter Name"}
             value={this.state.enteredName}
             onKeyDown={this.handleKeyDown} 
            />

            <button 
              onClick={this.nameSubmit} 
              className={`ui button orange`}
            >
              Submit Name
            </button>

          </div>

        </div> //end div Enter-Name-Box-Container

  		); //end return

    };



    /* Have entered a unique name*/
    return this.roomMasterDisplayOrNot();


	}; //end render()






}; //end class GamePlayBox




const mapStateToProps = (state) => {
  
  return (
    { 
      myName: state.name,
      gamePhase: state.gamePhase,
      roomInfo: state.roomInfo,
    }
  );

};


export default connect(mapStateToProps, 
  {
   
  }
)
(EnterNameBox);


