import React from 'react';

import { connect } from 'react-redux';
import {newChatNotification} from 'actions/newChatNotification.js';

import InputSubmit from './InputSubmit.js';
import socket from 'Socket.js';

import './css/NormalChatBox.css';




class NormalChatBox extends React.Component {

  state = {

    chatMessageList: [],

  };

  componentDidMount = () => {

    socket.on("Normal Chat Message From Server To Client", 
      (messageObj) => {

        //this is to turn the chatbox menu button red in MenuBar.js
        if (this.props.mainMenuSelection !== "chat"
          && this.props.gamePhase !== 8) {

          this.props.updateNewChatNotification(true);
        
        };
        
        var messageArr = this.state.chatMessageList;

        messageArr.push(messageObj);

        this.setState({chatMessageList: messageArr});

    }); //end socket.on("Normal Chat Message From Server To Client")


  }; //end componentDidMount



  componentWillUpdate() {

    checkIfScrollAtBottom();

  }; //end componentWillUpdate


  componentDidUpdate() {

    if (isScrollAtBottom) {

      var scrollElem = document.querySelector('.normal-chat-box-messages');

      scrollElem.scrollTop = scrollElem.scrollHeight;

    };

  }; //end componentDidUpdate()


  returnListOfMessages() {

    const messageList = this.state.chatMessageList.map((m, index) => {

        return (<li key={index}>{m.name + ": " + m.message}</li>);

    }); //end messageList =

    return messageList;    

  }; //end returnListOfMessages()










  headerColor = () => {

    return (this.props.gamePhase === 8 ? 
      {backgroundColor: "#2185d0"} : {backgroundColor: "#f2711d"});

  };

  submitButtonColor = () => {

    return (this.props.gamePhase === 8 ? 
      "blue" : "orange");

  };



  render() {

    return (

      <div className="normal-chat-box-container">

        <div className="normal-chat-box-header" style={this.headerColor()}>
          Chat
        </div>

        <div className="normal-chat-box-messages">
          <ul>
            {this.returnListOfMessages()}
          </ul>
        </div>

        <InputSubmit 
          buttonMessage="Chat"
          buttonColor={this.submitButtonColor()}
          socketDestination="Normal Chat"
        />

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
    updateNewChatNotification: newChatNotification,
  })
(NormalChatBox);




var isScrollAtBottom;

function checkIfScrollAtBottom() {

  var scrollElem = document.querySelector('.normal-chat-box-messages');

  /*
  console.log("scrollElem.scrollHeight is: ", scrollElem.scrollHeight);
  console.log("scrollElem.scrollTop is: ", scrollElem.scrollTop);
  console.log("scrollElem.scrollHeight - scrollElem.scrollTop = ", scrollElem.scrollHeight - scrollElem.scrollTop);
  console.log("scrollElem.clientHeight is: ", scrollElem.clientHeight);
  */

  if (scrollElem.scrollHeight - scrollElem.scrollTop >= (scrollElem.clientHeight - 1) 
    && scrollElem.scrollHeight - scrollElem.scrollTop <= (scrollElem.clientHeight + 1)) {
    isScrollAtBottom = true;

  } else {
    isScrollAtBottom = false;
  };

};




