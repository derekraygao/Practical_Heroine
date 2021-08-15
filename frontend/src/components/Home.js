import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { roomInfo } from 'actions/roomInfo.js';
import { disconnectMessage } from 'actions/disconnectMessage.js';
import { homePageRedirect } from 'variablesAndFunctions/homePageRedirect.js';


import socket from 'Socket.js';

import Lobby from './Lobby/Lobby.js';
import App from './App.js';
import DisconnectRejoinRoomHandler from './DisconnectRejoinRoomHandler.js';
import DisconnectMessage from './DisconnectMessage.js';


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

      homePageRedirect();

    });



    socket.on("disconnect", () => {

      this.props.showDisconnectMessage(true);

    });



  }; //end componentDidMount


  componentWillUnmount = () => {


  };




  render() {

    return (

      <BrowserRouter>

        <Route path="/" exact component={Lobby} />
        <Route path="/PracticalHeroine" exact component={App} />

        <Route path="/" component={DisconnectRejoinRoomHandler} />

        {
          this.props.disconnectMessageBool &&

          <Route path="/" component={DisconnectMessage} />
        }

      </BrowserRouter>

    );

  }; //end render()



}; //end class ActionBox



const mapStateToProps = (state) => {
  
  return (
         { 
            role: state.role,
            gamePhase: state.gamePhase,
            disconnectMessageBool: state.disconnectMessageBool,
         }
  );

};


export default connect(mapStateToProps, 
  {
    updateRoomInfo: roomInfo,
    showDisconnectMessage: disconnectMessage,
  })
(Home);