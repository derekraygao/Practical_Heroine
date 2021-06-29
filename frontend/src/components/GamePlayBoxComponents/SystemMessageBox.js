import React from 'react';
import './css/SystemMessageBox.css';

import { connect } from 'react-redux';
import { systemMessages } from '../../actions/systemMessages.js';



var isScrollAtBottom;

function checkIfScrollAtBottom() {

  var scrollElem = document.querySelector('.system-message-box');
  
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



class SystemMessageBox extends React.Component {

	state = {

    messagesList: [
                    {type: "normal", message: "testing message 1"},
                    {type: "urgent", message: "Uh oh! An invisible ghost spies on you!"},
                    {type: "power", message: "You used firepunch on Kevin!"},
                    {type: "new mission", message: "Starting Mission #4"},
                  ]

	};



  componentWillUpdate() {

    checkIfScrollAtBottom();

    console.log("checkIfScrollAtBottom is: " + isScrollAtBottom);


  }; //end componentWillUpdate


  componentDidUpdate() {

    if (isScrollAtBottom) {

      var scrollElem = document.querySelector('.system-message-box');

      scrollElem.scrollTop = scrollElem.scrollHeight;

    };

  }; //end componentDidUpdate()



  returnListOfMessages() {

    const messageList = this.props.systemMessageList.map((m, index) => {

      if (m.type === "normal") {

        return (<li key={index}>{m.message}</li>);

      } else if (m.type === "urgent") {

        return (<li key={index} style={{color: "#e60000"}}>{m.message}</li>);

      } else if (m.type === "power") {

        return (<li key={index} style={{color: "#33ffd6"}}>{m.message}</li>);

      } else if (m.type === "new mission") {

        return (<li key={index} style={{color: "#9933ff", fontSize: "125%"}}>{m.message}</li>);

      };


    }); //end messageList =

    return messageList;    

  }; //end returnListOfMessages()



  testAddSystemMessage() {

    this.props.addSystemMessage({type: "power", message: "testing"});

  };



	render() {

		return (

			<div className="system-message-box">

        <ul>
          {this.returnListOfMessages()} {console.log("Messages rendered")}
        </ul>

        <button 
          className="testButton"
          onClick={ () => this.testAddSystemMessage() }
        >
          click me
        </button>
    
      </div> //end div menu-bar-container


		); //end return



	}; //end render()




}; //end class MenuBar



//by convention, keep the function name mapStateToProps, but can be named anything
//state is all of the data within our redux store
//could be called getMyState()
const mapStateToProps = (state) => {
  
  return { systemMessageList: state.systemMessageArray};

};


export default connect(mapStateToProps, {addSystemMessage: systemMessages})(SystemMessageBox);