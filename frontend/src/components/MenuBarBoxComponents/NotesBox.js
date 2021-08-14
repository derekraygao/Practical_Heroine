import React from 'react';
import { connect } from 'react-redux';

import socket from 'Socket.js';

import './css/NotesBox.css';


class NotesBox extends React.Component {

  state = {


  };

  componentDidMount = () => {

  }; //end componentDidMount


  notesBoxStyle = () => {

    if (this.props.mainMenuSelection === "notes") {

      if (this.props.gamePhase === 8) {
        return {display: "flex", gridArea: "other-menu-box"};
      };

      return {display: "flex", gridArea: "chat-box"};

    }; //end if mainMenuSelection === notes

    return {display: "none"};

  }; //end displayOrNot


  render() {

    return (

      <div class="notes-box-container" style={this.notesBoxStyle()}>

        <textarea type="text" placeholder="Type Notes Here"></textarea>

      </div>

    ); //end return


  }; //end render


}; //end ChatBox()



const mapStateToProps = (state) => {
  
  return (
    { 
      gamePhase: state.gamePhase,
      mainMenuSelection: state.mainMenuSelection
    }
  );

};


export default connect(mapStateToProps, 
  {

  })
(NotesBox);








