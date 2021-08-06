import React from 'react';
import { connect } from 'react-redux';

import './css/JitsiRoomButtons.css';

import socket from 'Socket.js';



class JitsiRoomButtons extends React.Component {

  state = {

          };


  componentDidMount = () => {


    
  }; //end componentDidMount



  getNewJitsiRoomName() {

    socket.emit("Get New Jitsi Room Name");

  };

  

	render() {

    var areYouRoomMaster = (this.props.roomInfo["roomMaster"] == this.props.myName);

    return (

      <>

        <button 
          className="ui yellow button"
          onClick={this.props.forceJitsiReRender}
        >
          Restart Video
        </button>


        {areYouRoomMaster &&

          <button 
            className="ui orange button room-control-button-margin"
            onClick={this.getNewJitsiRoomName}
          >
            New Video Room
          </button>

        }

      </>


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
(JitsiRoomButtons);


