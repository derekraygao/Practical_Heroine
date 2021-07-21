import React from 'react';
import { connect } from 'react-redux';

import socket from 'Socket.js';

import InputSubmit from './InputSubmit.js';

import './css/NormalChatBox.css';




class VillainChatBox extends React.Component {

  state = {

    vChatMessageList: [],

  };

/* ended up storing messages in redux for long-term storage,
otherwise once this component unmounts, everything is lost!
  componentDidMount = () => {

    socket.on("Villain Chat Message From Server To Client", 
      (vMessageObj) => {

        var vMessageArr = this.state.vChatMessageList;

        vMessageArr.push(vMessageObj);

        this.setState({vChatMessageList: vMessageArr});

    }); //end socket.on("Normal Chat Message From Server To Client")   



  }; //end componentDidMount
*/


  componentWillUpdate() {

    checkIfScrollAtBottom();

  }; //end componentWillUpdate


  componentDidUpdate() {

    if (isScrollAtBottom) {

      var scrollElem = document.querySelector('#villain-chat-box-messages-id');

      scrollElem.scrollTop = scrollElem.scrollHeight;

    };

  }; //end componentDidUpdate()



  returnListOfMessages() {

    const vMessageList = this.props.villainMessagesArray.map((m, index) => {

        return (<li key={index}>{m.sender + ": " + m.message}</li>);

    }); //end messageList =

    return vMessageList;    

  }; //end returnListOfMessages()




  render() {

    return (

      <div className="normal-chat-box-container">

        <div className="normal-chat-box-header" style={{backgroundColor: "#a332c8"}}>
          Villain Chat
        </div>

        <div className="normal-chat-box-messages" id="villain-chat-box-messages-id">
          <ul>
            {this.returnListOfMessages()}
          </ul>
        </div>

        <InputSubmit 
          buttonMessage="Chat"
          buttonColor="purple"
          socketDestination="Villain Chat"
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
      mainMenuSelection: state.mainMenuSelection,
      villainMessagesArray: state.villainChatArray,
    }
  );

};


export default connect(mapStateToProps, 
  {

  })
(VillainChatBox);



var isScrollAtBottom;

function checkIfScrollAtBottom() {

  var scrollElem = document.querySelector('#villain-chat-box-messages-id');

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




