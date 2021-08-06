import React from 'react';
import './css/RoomControlBox.css';


import { connect } from 'react-redux';

import socket from 'Socket.js';



class OpenCloseRoomButton extends React.Component {

  state = {

          };


  componentDidMount = () => {


    socket.on("Successfully Closed Game Room", () => {


    }); //end closed room



    socket.on("Successfully Opened Game Room", () =>{


    }); //end opened room



    
  }; //end componentDidMount


  componentWillUnmount() {

    

  };


  closeRoomClick = () => {

    if (this.props.myName !== this.props.roomInfo["roomMaster"]) {
      return 0;
    };

    socket.emit("Tell Server To Close Room");

  };


  openRoomClick = () => {

    if (this.props.myName !== this.props.roomInfo["roomMaster"]) {
      return 0;
    };

    socket.emit("Tell Server To Open Room");

  };



  

	render() {

    if (this.props.roomInfo["roomStatus"] == "Open") {

      return (

        <button class="ui button green" onClick={this.closeRoomClick}>

          <i class="envelope open icon"></i>
          
          Open

        </button>

      ); //end return

    };


    //if room "Closed"
		return (

        <button class="ui button red" onClick={this.openRoomClick}>

          <i class="envelope closed icon"></i>
          
          Closed

        </button>

		); //end return



	}; //end render()






}; //end class Cross Examination Box




const mapStateToProps = (state) => {
  
  return (
    { 
      myName: state.name,
      roomInfo: state.roomInfo,
    }
  );

};


export default connect(mapStateToProps, 
  {

  }
)
(OpenCloseRoomButton);


