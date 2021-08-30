import React from 'react';
import { connect } from 'react-redux';

import './css/LobbyMenuComponent.css';



class LobbyContact extends React.Component {

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
          <span>Contact</span>
        </div>

        <div className="lobby-menu-component-body">


          <div>Aster "D" Gao</div>
          <div>Aster@practicalheroine.com</div>

          <br></br>
          <br></br>

          <div>
            I'm currently living in the Bay Area and working as 
            a software engineer. Practical Hero(ine) is the game 
            version of a children's book I have been writing as a 
            hobby. 
          </div>

          <br></br>

          <div>
            Almost every single character/role you see in the game 
            is a character in my book.
          </div>

          <br></br>

          <div>
            John, I dedicate this game to you! May your adventures 
            come to a satisfying end one day!
          </div>


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


export default connect(mapStateToProps, {})(LobbyContact);