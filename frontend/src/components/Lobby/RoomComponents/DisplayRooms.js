import React from 'react';
import { connect } from 'react-redux';

import './css/DisplayRooms.css';

import IndividualRooms from './IndividualRooms.js';

import socket from 'Socket.js';



var getRoomsInterval;


class DisplayRooms extends React.Component {

  state = {
            roomList: ["Wait for rooms to load"],
            roomNameInput: "",

          };


  componentDidMount = () => {

    getRoomsInterval = 
    setInterval(this.getRoomsListFromServer, 1000);


    socket.on("Update Rooms List", (roomList) => {

      this.setState({roomList: roomList});

    });



  }; //end componentDidMount


  componentWillUnmount = () => {

    clearInterval(getRoomsInterval);

  };


  getRoomsListFromServer = () => {

    socket.emit("Get Rooms From Server");

  };


  renderRooms = () => {

    const roomList = this.state.roomList.map( (roomName, index) => {

      return (

        <IndividualRooms key={index} roomName={roomName} game="Practical Hero(ine)" />

      ); //end return

    });

    return roomList;

  };



  render() {

    return (

      <div className="display-rooms-list-box">
          
        {this.renderRooms()}

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


export default connect(mapStateToProps, {})(DisplayRooms);