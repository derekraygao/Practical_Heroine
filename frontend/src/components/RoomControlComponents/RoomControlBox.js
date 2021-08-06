import React from 'react';
import './css/RoomControlBox.css';


import { connect } from 'react-redux';
import {systemMessages} from 'actions/systemMessages.js';

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

      <div className="Room-Control-Box-Background">

        <div className="Room-Control-Box-Container">


          <div className="Room-Control-Box-Header">
            <span>Room Control Panel</span>
            <div>&#10006;</div>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
  }
)
(RoomControlBox);


