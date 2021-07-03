import React from 'react';
import { connect } from 'react-redux';

import InputSubmit from './InputSubmit.js';

import './css/NormalChatBox.css';




class JailerChatBox extends React.Component {

  state = {


  };

  componentDidMount = () => {

  }; //end componentDidMount



  render() {

    return (

      <div className="normal-chat-box-container">

        <div className="normal-chat-box-header" style={{backgroundColor: "#dc2829"}}>
          Jailer Chat
        </div>

        <div className="normal-chat-box-messages">

        </div>

        <InputSubmit 
          buttonMessage="Chat"
          buttonColor="red"
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

  })
(JailerChatBox);








