import React from 'react';
import './css/RoomControlBox.css';


import { connect } from 'react-redux';
import {systemMessages} from 'actions/systemMessages.js';
import {showRoomControlBool} from 'actions/showRoomControlBool.js';

import OpenCloseRoomButton from './OpenCloseRoomButton.js';
import JitsiRoomButtons from './JitsiRoomButtons.js';
import PlayerListDisplayButton from './PlayerListDisplayButton.js';

import socket from 'Socket.js';


class RoomControlBox extends React.Component {

  state = {
            showInstructions: false,
          };


  componentDidMount = () => {


    
  }; //end componentDidMount


  componentWillUnmount() {

    

  };


  /*PlayerList = [{name: , ready: , connection: }]*/
  returnPlayerComponents = () => {

    const pComponents = this.props.roomInfo["playerList"].map( (elem, index) => {

      return (  

        <PlayerListDisplayButton 
          key={index}
          info={elem}
        />

      ); //end return

    });

    return pComponents;

  };


  closeRoomControlPanel = () => {

    this.props.updateRoomControlBool(false);

  };


  onClickInstructions = () => {

    if (this.state.showInstructions) {
      this.setState({showInstructions: false});
    } else {
      this.setState({showInstructions: true});
    };

  }; //end onClickInstructions


  instructionsText = () => {

    if (this.state.showInstructions) {
      return (<>&#8722; Instructions</>);
    };

    return (<>&#x2B; Instructions</>);

  }; //end showInstructionsText



	render() {

		return (

      <div className="Room-Control-Box-Background" onClick={this.closeRoomControlPanel}>

        <div className="Room-Control-Box-Container"  onClick={ (e) => e.stopPropagation() }>


          <div className="Room-Control-Box-Header">

            <span>Room Control Panel</span>
            
            <div
              onClick={this.closeRoomControlPanel}
            >
              &#10006;
            </div>

          </div>


          <div className="Room-Control-Box-Body">

            <div 
              className="Room-Control-Box-Instructions-Header"
              onClick={this.onClickInstructions}
            >
              {this.instructionsText()}
            </div>

            {this.state.showInstructions &&

              <div className="Room-Control-Box-Instructions-Text">
                In the room control panel, you can view information 
                about the room. Remember, every room name needs to 
                be unique and your friends can easily join your room 
                through using the room name. 

                <br></br><br></br>

                Each room has a 'Room Master' who can kick players 
                from the room, and who is able to start the game 
                once all players have clicked 'Ready'. The 
                'Room Master' is also capable of opening/closing 
                the room, by clicking on the button next to 
                'Room Status'. Players can only join games that 
                have not started, but if the room is closed, then 
                nobody can join, even if the game has not yet 
                started. However, if a player disconnected and is 
                attempting to rejoin a room (must be done through 
                manual room name input), then he/she can rejoin, 
                regardless if the room is closed or open.

                <br></br><br></br>

                If the player accidentally hangs up on the video 
                chat, he/she can restart it by clicking on the 
                'Restart Video' button. The 'Room Master' can restart 
                the video chat for everyone by clicking the 
                'New Video Room' button. Additionally, this creates 
                a new Jitsi video room. This could be useful in case 
                a previous player was kicked from the room, but uses 
                the old Jitsi room name to join your video call.

                <br></br><br></br>

                At the very bottom of the panel, you can see a list 
                of the players in the room, as well as their statuses. 
                This allows you to see who is 'Ready' to play the 
                game, and also whether they have 'Disconnected' from 
                the room or 'Rejoined' the room. 'Rejoined' players 
                must wait one game phase before they officially 
                rejoin the game play.

              </div>

            }

            <div className="generic-rc">My Name: {this.props.myName}</div>
            <div className="generic-rc">Room Name: {this.props.roomInfo["roomName"]}</div>

            <div className="Room-Status-Container generic-rc">

              <span>Room Status: &nbsp;&nbsp; </span>
              <OpenCloseRoomButton />

            </div>
            


            <div className="generic-rc">Room Master: {this.props.roomInfo["roomMaster"]}</div>
            <div className="generic-rc">Jitsi Room Name: {this.props.roomInfo["jitsiRoomName"]}</div>

            <div className="Jitsi-Room-Buttons-Container generic-rc">
              <JitsiRoomButtons forceJitsiReRender={this.props.forceJitsiReRender} />
            </div>

            <div className="Room-Control-Box-Player-List-Header">Players In Room</div>


            <div className="Room-Control-Box-Player-List-Container">
              {this.returnPlayerComponents()}
            </div>



          </div>  {/*end room-control-box-body*/}

        </div> {/*end div room-control-box-container*/}

      </div> 

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
   addSystemMessage: systemMessages,
   updateRoomControlBool: showRoomControlBool,
  }
)
(RoomControlBox);


