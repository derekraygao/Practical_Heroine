import React from 'react';
import { connect } from 'react-redux';

import socket from 'Socket.js';

import './css/ChatBox.css';

import NormalChatBox from './ChatBoxes/NormalChatBox.js';
import VillainChatBox from './ChatBoxes/VillainChatBox.js';
import EsperChatBox from './ChatBoxes/EsperChatBox.js';
import JailerChatBox from './ChatBoxes/JailerChatBox.js';




class ChatBox extends React.Component {

  state = {


  };

  componentDidMount = () => {

  }; //end componentDidMount




  displayWhichSpecialChatBoxes = () => {

    if (this.props.gamePhase !== 8) { return []};

    var chatBoxesArr = [];

    if (this.props.villainList.includes(this.props.myName)) {
      chatBoxesArr.push(<VillainChatBox />);
    };


    return chatBoxesArr;

  };

  //during night phase 8, ALWAYS display this component
  displayOrNot = () => {

    if (this.props.mainMenuSelection === "chat"
      || this.props.gamePhase === 8) {

      return {display: "flex"};

    };

    return {display: "none"};

  }; //end displayOrNot


  render() {

    return (

      <div class="chat-box-container" style={this.displayOrNot()}>

        <NormalChatBox /> {/*this is always displayed within ChatBox container */}
        
        {this.displayWhichSpecialChatBoxes()}

      </div>

    ); //end return


  }; //end render


}; //end ChatBox()



const mapStateToProps = (state) => {
  
  return (
    { 
      myName: state.name,
      role: state.role,
      gamePhase: state.gamePhase,
      playerList: state.playerList,
      villainList: state.villainList,
      mainMenuSelection: state.mainMenuSelection
    }
  );

};


export default connect(mapStateToProps, 
  {

  })
(ChatBox);








