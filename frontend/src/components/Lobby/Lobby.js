import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './Lobby.css';

import LeftMenu from './RoomComponents/LeftMenu.js';

import LobbyGameRules from './LobbyMenuComponents/LobbyGameRules.js';
import LobbyContact from './LobbyMenuComponents/LobbyContact.js';

import CreateRoom from './RoomComponents/CreateRoom.js';
import JoinRoom from './RoomComponents/JoinRoom.js';


import LobbyPopupMessage from './LobbyPopupMessage.js';


import socket from 'Socket.js';



class Lobby extends React.Component {

  state = {

            popupMessage: "None", //none means popup is not rendered
            redirect: false,
            menuChoice: "Lobby",

          };



  componentDidMount = () => {

    socket.on("Room Name Already Exists", (roomName) => {

      var newMess = ("Sorry, the room name '" + roomName + "' already exists! Please choose another room name.");

      this.setState({popupMessage: newMess});

    }); //end socket.on("Room Name Already Exists")



    socket.on("Server Message: Failed To Join Room", (roomName) => {

      var newMess = ("Sorry! You were unable to join the room '" + roomName + "'. It could be because the Room Master 'Closed' the room, the room already has 10 people, or because the room got deleted. Please try another room!");

      this.setState({popupMessage: newMess});

    });


    socket.on("Room Was Successfully Created!", (roomName) => {


      this.setState({redirect: true});

    });



  }; //end componentDidMount()


  componentWillUnmount = () => {


  };


  closePopupMessage = () => {

    this.setState({popupMessage: "None"});

  };



  showWhichLobbyMenuComponent() {

    switch(this.props.lobbyMenuSelection) {

      case "Lobby":

        return (
          <>
            <CreateRoom />
            <JoinRoom />
          </>
        );


      case "Game Rules":
        return <LobbyGameRules />;


      case "Contact":
        return <LobbyContact />;
        

      default:

        return (
          <>
            <CreateRoom />
            <JoinRoom />
          </>
        );


    }; //end switch

  }; //end showWhichLobbyMenuComponent





  render() {

    if (this.state.redirect) {

      return (<Redirect to="/PracticalHeroine" />);

    };


    return (

      <>


        <div className="lobby-grid-container-main">
        
          <div className="lobby-title">
            Practical Hero(ine)
          </div>

          <div className="lobby-message">
            Welcome to Practical Hero(ine), an online social deduction 
            game that is inspired by the games Resistance/Avalon and 
            Werewolf. Please shoot me an email if you run into bugs 
            or have suggestions/comments! As the sole developer of 
            this game, I've done testing and quality assurance on my 
            own, but nothing beats UAT/Beta testing. Thanks, and have 
            fun! -Aster
          </div>

          <div className="create-and-join-room-grid-container">

            <LeftMenu />

            {this.showWhichLobbyMenuComponent()}

          </div>

        </div>


        {this.state.popupMessage !== "None" &&
          <LobbyPopupMessage 
            message={this.state.popupMessage} 
            closePopupMessage={this.closePopupMessage} 
          />
        }


      </>

    ); //end return

  }; //end render()



}; //end class Lobby



const mapStateToProps = (state) => {
  
  return (
         { 
            role: state.role,
            gamePhase: state.gamePhase,
            lobbyMenuSelection: state.lobbyMenuSelection,
         }
  );

};


export default connect(mapStateToProps, {})(Lobby);