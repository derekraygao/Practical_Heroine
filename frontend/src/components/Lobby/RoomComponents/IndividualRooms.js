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
      
        <div className="individual-room-name">
          {this.props.game}
        </div>

        <div className="individual-room-name">
          {this.props.roomName}
        </div>

        <button 
          className="ui yellow button"
          onClick={this.clickJoinRoom}
        >
          Join
        </button>


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