import React from 'react';
import { connect } from 'react-redux';

import './css/CreateRoom.css';

import socket from 'Socket.js';



class CreateRoom extends React.Component {

  state = {
            showInstructions: false,
            instructionsDisplay: "none",
            roomNameInput: "",

          };


  componentDidMount = () => {


  };


  componentWillUnmount = () => {


  };


  showInstructionsText = () => {

    if (this.state.showInstructions) {
      return (<>&#8722; Instructions</>);
    };

    return (<>&#x2B; Instructions</>);

  }; //end showInstructionsText



  clickInstructions = () => {

    if (this.state.showInstructions) {

      this.setState({showInstructions: false, instructionsDisplay: "none"});


    } else {
      this.setState({showInstructions: true, instructionsDisplay: ""});
    };

  }; //end clickInstructions()



  inputOnChange = (e) => {

    var inputRoomName = e.target.value;

    if (inputRoomName.length > 30) { 

      inputRoomName = inputRoomName.slice(0, 30)
    
    };

    this.setState({ roomNameInput: inputRoomName });
      
  }; //end inputOnChange




  createRoomClick = () => {

    if (this.state.roomNameInput == "") { return 0; }
 
    socket.emit("Create Room", this.state.roomNameInput);
    this.setState({ roomNameInput: ""});

  };


  handleKeyDown = (e) => {

    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      //console.log(this.state.term);

      if (this.state.roomNameInput !== "") {

        socket.emit("Create Room", this.state.roomNameInput);
        this.setState({ roomNameInput: ""});

      };

    }; //end if e.key === "Enter"

  }; //end handleKeyDown





  render() {

    return (

      <div className="lobby-create-room-container">



        <div className="create-room-center-box">
          
          <div 
            className="create-room-instructions-bar"
            onClick={this.clickInstructions}
          >
            <span>{this.showInstructionsText()}</span>
          </div>

          <div 
            className="create-room-instructions-text"
            style={{display: this.state.instructionsDisplay}}
          >
            &nbsp;&nbsp;&nbsp;To create a room, enter a unique room 
            name below, and then click the "Create Room" button.

            <br></br> <br></br>

            &nbsp;&nbsp;&nbsp;To join a room, simply click on the 
            "Join" button on any of the room tabs to the right. 

            <br></br> <br></br>

            &nbsp;&nbsp;&nbsp;If you are rejoining a game you 
            disconnected from, you'll need to input the room 
            name manually (at the top right) and then click 
            the "Join" button right next to it.
          </div>



          <input
             className="inside-input-fields create-room-input" //used to prevent keydown events 
             onChange={e => this.inputOnChange(e)}
             type="text" placeholder="Room Name"
             value={this.state.roomNameInput}
             onKeyDown={this.handleKeyDown} 
          />

          <button 
            className="ui button orange create-room-button"
            onClick={this.createRoomClick}
          >
            Create Room
          </button>


        </div>





      </div>

    ); //end return

  }; //end render()



}; //end class ActionBox



const mapStateToProps = (state) => {
  
  return (
         { 
            role: state.role,
            gamePhase: state.gamePhase
         }
  );

};


export default connect(mapStateToProps, {})(CreateRoom);