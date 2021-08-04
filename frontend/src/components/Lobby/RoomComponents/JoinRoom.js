import React from 'react';
import { connect } from 'react-redux';

import './css/JoinRoom.css';

import socket from 'Socket.js';

import DisplayRooms from './DisplayRooms.js';


class JoinRoom extends React.Component {

  state = {

            roomNameInput: "",

          };


  componentDidMount = () => {


  };


  componentWillUnmount = () => {


  };



  inputOnChange = (e) => {

    var inputRoomName = e.target.value;

    if (inputRoomName.length > 30) { 

      inputRoomName = inputRoomName.slice(0, 30)
    
    };

    this.setState({ roomNameInput: inputRoomName });
      
  }; //end inputOnChange


  handleKeyDown = (e) => {

    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      //console.log(this.state.term);

      if (this.state.roomNameInput !== "") {

        socket.emit("Submit Player Name", this.state.enteredName);
        this.setState({ roomNameInput: ""});

      };

    }; //end if e.key === "Enter"

  }; //end handleKeyDown



  render() {

    return (

      <div className="lobby-join-room-container">
        
        <div className="manual-join-room-container">

          <input
             className="inside-input-fields manual-join-room-input" //used to prevent keydown events 
             onChange={e => this.inputOnChange(e)}
             type="text" placeholder="Room Name"
             value={this.state.roomNameInput}
             onKeyDown={this.handleKeyDown} 
          />

          <button 
            className="ui button orange"
            onClick={this.createRoomClick}
          >
            Join Room
          </button>

        </div>


        <div className="display-rooms-to-join-container">
          <DisplayRooms />
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


export default connect(mapStateToProps, {})(JoinRoom);