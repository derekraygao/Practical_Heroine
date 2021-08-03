import React from 'react';
import { connect } from 'react-redux';

import './CharacterPowers.css';




class FrozenPowerInfo extends React.Component {

  state = {


  };

  componentDidMount = () => {

  }; //end componentDidMount




  render() {

    return (

      <div className="power-info-menu-component-container">

        <div className="power-info-character-header">
          Frozen
        </div>

        <p><span style={{fontSize: '24px'}}>You are frozen! For this mission round only, you will be unable to use any of your powers! You will naturally thaw after this current mission round ends. </span></p>

        <br></br>

      </div>

    ); //end return


  }; //end render


}; //end <Character>PowerInfo



const mapStateToProps = (state) => {
  
  return (
    { 
      myRole: state.role,
      gamePhase: state.gamePhase,
      mainMenuSelection: state.mainMenuSelection
    }
  );

};


export default connect(mapStateToProps, 
  {

  })
(FrozenPowerInfo);

