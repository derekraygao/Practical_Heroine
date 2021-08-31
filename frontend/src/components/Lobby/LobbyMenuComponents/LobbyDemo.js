import React from 'react';
import { connect } from 'react-redux';

import './css/LobbyMenuComponent.css';



class LobbyDemo extends React.Component {

  state = {

          };


  componentDidMount = () => {


  };


  componentWillUnmount = () => {


  };


  

  render() {

    return (

      <div className="lobby-menu-component-container">

        <div className="lobby-menu-component-title">
          <span>Demo Video</span>
        </div>

        <div 
          className="lobby-menu-component-body"
          style={{display: "flex", justifyContent: "center", alignItems: "center"}}
        >

          <iframe height="80%" width="60%" src="https://www.youtube.com/embed/djg6oBRSyTQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div> {/*end lobby-menu-component-body */}

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


export default connect(mapStateToProps, {})(LobbyDemo);