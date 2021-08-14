import React from 'react';
import { connect } from 'react-redux';

import './CharacterPowers.css';




class PowerInfo extends React.Component {

  state = {


  };

  componentDidMount = () => {

  }; //end componentDidMount




  render() {

    return (

      <div className="power-info-menu-component-container">

        <div className="power-info-character-header">

        </div>



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
(PowerInfo);

