import React from 'react';

import { connect } from 'react-redux';
import { disconnectMessage } from 'actions/disconnectMessage.js';

import './css/MessagePopup.css';



class DisconnectMessage extends React.Component {

  state = {


          };


  componentDidMount = () => {


  }; //end componentDidMount


  componentWillUnmount = () => {


  };


  exitRoom = () => {

    window.location.replace("http://localhost:3000");

  };


  closeDisconnectPopup = () => {

    this.props.showDisconnectMessage(false);

  };



  render() {

    return (

      <div className="Message-Popup-Background" onClick={this.closeDisconnectPopup}>

        <div className="Message-Popup-Box-Container"  onClick={ (e) => e.stopPropagation() }>


          <div className="Message-Popup-Box-Header">

            <span>Disconnected From Server!</span>
            
            <div
              onClick={this.closeDisconnectPopup}
            >
              &#10006;
            </div>

          </div>


          <div className="Message-Popup-Box-Body">

            <span>
              Sorry! You've disconnected from the server! It could be 
              because your internet connection failed, or because 
              there was a problem with the server. You can see if 
              the connection was restored by clicking the red 
              'Exit' button below.
            </span>

          </div>  {/*end message-popup-box-body*/}


          <div className="Message-Popup-Box-Button-Container">
            <button className="ui red button" onClick={this.exitRoom}>
              Exit
            </button>
          </div>


        </div> {/*end div message-popup-box-container*/}

      </div> 

    ); //end return



  }; //end render()




}; //end class DisconnectMessage



const mapStateToProps = (state) => {
  
  return (
         { 
            role: state.role,
            gamePhase: state.gamePhase
         }
  );

};


export default connect(mapStateToProps, 
  {
    showDisconnectMessage: disconnectMessage,
  })
(DisconnectMessage);