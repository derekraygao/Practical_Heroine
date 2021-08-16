import React from 'react';
import { connect } from 'react-redux';

import './css/IndividualRooms.css';

import socket from 'Socket.js';



class IndividualRooms extends React.Component {


  state = {
    
          };



  componentDidMount = () => {


  }; //end componentDidMount


  componentWillUnmount = () => {


  };



  clickJoinRoom = () => {

    socket.emit("Player Wants To Join Room", this.props.roomName);

  };



  render() {


    return (

      <div className="individual-room-container">
      

        <div className="individual-room-number-of-players">
          <span>{this.props.numOfPlayers}/10</span>
        </div>


        <div className="individual-room-name">
          <span>{this.props.roomName}</span>
        </div>


        <div className="individual-room-join-button">

          <button 
            className="ui yellow button"
            onClick={this.clickJoinRoom}
          >
            Join
          </button>

        </div>


      </div>

    ); //end return

  }; //end render()



}; //end class DisplayRooms



const mapStateToProps = (state) => {
  
  return (
         { 
            role: state.role,
            gamePhase: state.gamePhase
         }
  );

};


export default connect(mapStateToProps, {})(IndividualRooms);