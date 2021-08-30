import React from 'react';
import { connect } from 'react-redux';
import { lobbyMenuSelection } from 'actions/lobbyMenuSelection.js';


import './css/LeftMenuButton.css';




class LeftMenuButton extends React.Component {

  state = {

          };


  componentDidMount = () => {


  };


  componentWillUnmount = () => {


  };



  clickMenuButton = () => {

    this.props.updateLobbyMenuSelection(this.props.text);

  }; //end clickMenuButton()



  backgroundColor = () => {

    if (this.props.lobbyMenuSelection == this.props.text) {

      return ({backgroundColor: "rgba(0, 0, 0, 0.2)"});

    };

    return ({backgroundColor: "rgba(255,255,255,0.35)"});

  }; //end backgroundColor()



  render() {

    return (

        <div 
          className="left-menu-button" 
          style={this.backgroundColor()}
          onClick={this.clickMenuButton}
        >

          <img src={process.env.PUBLIC_URL + "/lobby_button_images/" + this.props.imgName + ".jpg"}>
          </img>

          <div className="left-menu-button-text">
            {this.props.text}
          </div>
    
        </div>

    ); //end return

  }; //end render()



}; //end class ActionBox



const mapStateToProps = (state) => {
  
  return (
         { 
            lobbyMenuSelection: state.lobbyMenuSelection,
         }
  );

};


export default connect(mapStateToProps, 
  {
    updateLobbyMenuSelection: lobbyMenuSelection,
  }
)
(LeftMenuButton);