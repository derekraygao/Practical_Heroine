import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { roomInfo } from 'actions/roomInfo.js';

import socket from 'Socket.js';

import Lobby from './Lobby/Lobby.js';
import App from './App.js';



class Home extends React.Component {

  state = {


          };


  componentDidMount = () => {

    socket.on("Update Entire Room Info", (roomInfoObj) => {

      this.props.updateRoomInfo(roomInfoObj, "All");

    });


    socket.on("Update Room Master", (roomMasterName) => {

      this.props.updateRoomInfo(roomMasterName, "Room Master");

    });


    socket.on("Update Room Player List", (roomPlayerListArray) => {

      this.props.updateRoomInfo(roomPlayerListArray, "Room Player List");

    });


    socket.on("Update Room Status", (status) => {

      this.props.updateRoomInfo(status, "Room Status");

    });


    /*Update Jitsi Room Name is in App.js, because we need to 
    increase Jitsi Key property to force re-render */


    socket.on("You've Been Kicked From The Game Room", () => {

      window.location.replace("http://localhost:3000");

    });




  }; //end componentDidMount


  componentWillUnmount = () => {


  };




  render() {

    return (

      <BrowserRouter>
        <Route path="/" exact component={Lobby} />
        <Route path="/PracticalHeroine" exact component={App} />
      </BrowserRouter>

    );

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


export default connect(mapStateToProps, 
  {
    updateRoomInfo: roomInfo,
  })
(Home);