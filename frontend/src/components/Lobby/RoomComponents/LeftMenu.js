import React from 'react';
import { connect } from 'react-redux';

import LeftMenuButton from './LeftMenuButton.js';


import './css/LeftMenu.css';





class LeftMenu extends React.Component {

  state = {
            
          };


  componentDidMount = () => {


  };


  componentWillUnmount = () => {


  };



  render() {

    return (

      <div className="lobby-left-menu-container">

        <LeftMenuButton text="Lobby" imgName={"home"}/>
        <LeftMenuButton text="Game Rules" imgName={"rules"}/>
        <LeftMenuButton text="Contact" imgName={"contact"}/>

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


export default connect(mapStateToProps, {})(LeftMenu);