import React from 'react';
import { connect } from 'react-redux';

import './css/PlayerListDisplayButton.css';

import socket from 'Socket.js';



class PlayerListDisplayButton extends React.Component {

  state = {

          };


  componentDidMount = () => {


    
  }; //end componentDidMount



  kickPlayer = () => {

    var {name} = this.props.info;

    if (this.props.myName == name) {
      return 0;
    };

    if (![0, 10, 11].includes(this.props.gamePhase)) { return 0; };


    socket.emit("Room Master Kicking Player", name);

  };


  displayKickButton() {

    var roomMaster = this.props.roomInfo["roomMaster"];

    var areYouRoomMaster = ( roomMaster == this.props.myName);

    if (!areYouRoomMaster) {
      return <></>;
    };


    return (
      <button 
        className="ui red button"
        onClick={this.kickPlayer}
      >
        Kick
      </button>
    ); //end return

  }; //end displayKickButton()


  statusText = () => {

    var {ready, connection} = this.props.info;

    if (connection !== "connected") {
      return connection;
    };

    //if connected
    if (ready) {
      return "Ready";
    };
    
    return "Not Ready";

  }; //end statusText()


  statusTextStyle = () => {

    var {ready, connection} = this.props.info;

    if (connection !== "connected") {

      return ({backgroundColor: "#A8A8A8", color: "black"});

    };


    if (ready) {
      return ({backgroundColor: "#23b945", color: "white"});
    };

    return ({backgroundColor: "#dc2829", color: "white"});

  }; //end statusTextStyle()





	render() {

    var {name, ready, connection} = this.props.info;

    return (

      <div className="Player-List-Display-Individual-Containers">

        <span>{name}</span>

        <span 
          className="Player-List-Status-Container"
          style={this.statusTextStyle()}
        >
          {this.statusText()}
        </span>

        {this.displayKickButton()}

      </div>


    ); //end return

 




	}; //end render()






}; //end class Cross Examination Box




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
(PlayerListDisplayButton);


