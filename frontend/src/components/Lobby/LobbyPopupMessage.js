import React from 'react';
import { connect } from 'react-redux';

import './LobbyPopupMessage.css';


import socket from 'Socket.js';



class LobbyPopupMessage extends React.Component {

  state = {


          };


  componentDidMount = () => {


  };


  componentWillUnmount = () => {


  };




  render() {

    return (

      <div 
        className="lobby-popup-dark-background"
        onClick={this.props.closePopupMessage}
      >
      
        <div 
          className="lobby-popup-container"
          onClick={ (e) => e.stopPropagation() }
        >


          <div className="lobby-popup-header-bar">
            System Message
          </div>

          <div className="lobby-popup-body-message">
            <span>{this.props.message}</span>
          </div>
            

          <div className="lobby-popup-close-button-div">
            <button className="ui button orange" onClick={this.props.closePopupMessage}>
              Close
            </button>
          </div>


        </div> {/*end div lobby-popup-container*/}

      </div>


    ); //end return

  }; //end render()



}; //end class ActionBox



const mapStateToProps = (state) => {
  
  return (
         { 
            role: state.role,
            gamePhase: state.gamePhase
         }
  );

};


export default connect(mapStateToProps, {})(LobbyPopupMessage);