import React from 'react';
import { connect } from 'react-redux';

import './css/LobbyMenuComponent.css';



class LobbyGameRules extends React.Component {

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
          <span>Game Rules</span>
        </div>

        <div className="lobby-menu-component-body">


          <div>
            You can view the 'Game Rules' and the 'Quick Guide' as 
            PDFs through the below links. Remember, while playing 
            the game, you can also read them through the 
            'Instructions' tab on the main menu.
          </div>

          <br></br>

          <a href="https://drive.google.com/file/d/1S8YIQLaIi74jp1PZi5t8pp7mOU4WAfFn/view?usp=sharing" target="_blank">Game Rules</a>

          <br></br>
          <br></br>

          <a href="https://drive.google.com/file/d/1EmCMKPykHVAcfy-rdpwVJ29UEXVilVqj/view?usp=sharing" target="_blank">Quick Guide</a>



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


export default connect(mapStateToProps, {})(LobbyGameRules);