import React from 'react';
import { connect } from 'react-redux';

import InputSubmit from './InputSubmit.js';

import './css/NormalChatBox.css';




class EsperChatBox extends React.Component {

  state = {


  };

  componentDidMount = () => {

  }; //end componentDidMount


  componentWillUpdate() {

    checkIfScrollAtBottom();

  }; //end componentWillUpdate


  componentDidUpdate() {

    if (isScrollAtBottom) {

      var scrollElem = document.querySelector('#esper-chat-box-messages-id');

      scrollElem.scrollTop = scrollElem.scrollHeight;

    };

  }; //end componentDidUpdate()



  returnListOfMessages = () => {

    const messageList = this.props.esperMessages.map((m, index) => {

        return (<li key={index}>{m.sender + ": " + m.message}</li>);

    }); //end messageList =

    return messageList;    

  }; //end returnListOfMessages()




  render() {

    return (

      <div className="normal-chat-box-container">

        <div className="normal-chat-box-header" style={{backgroundColor: "#01b5ac"}}>
          Telepathy
        </div>

        <div className="normal-chat-box-messages" id="esper-chat-box-messages-id">
          <ul>
            {this.returnListOfMessages()}
          </ul>
        </div>

        <InputSubmit 
          buttonMessage="Chat"
          buttonColor="teal"
          socketDestination="Receive Esper Messages"
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
      esperMessages: state.esperChat,
    }
  );

};


export default connect(mapStateToProps, 
  {

  })
(EsperChatBox);




var isScrollAtBottom;

function checkIfScrollAtBottom() {

  var scrollElem = document.querySelector('#esper-chat-box-messages-id');

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



