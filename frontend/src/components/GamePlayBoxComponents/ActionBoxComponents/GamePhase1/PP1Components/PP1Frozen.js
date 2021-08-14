import React from 'react';
import './css/PP1NoPower.css';

import { connect } from 'react-redux';





class PP1Frozen extends React.Component {

  state = {

    timer: 20

  };

  componentDidMount = () => {



  }; //end componentDidMount


  render() {

    return (

      <div className="PP1-No-Power-Container">

        <div className="powers-menu-bar-container orange ui buttons">
          <button className="ui button">Frozen</button>
        </div> 

        <div className="PP1-no-power-text-div">
        Power Phase 1: You are frozen! You won't be able to use 
        any powers for this round only. You will thaw next round. 
        Please wait {this.props.timer} seconds for Power Phase 1 
        to end. 
        </div>

      </div>



    ); //end return

  }; //end render()



}; //end class PP1NoPower


const mapStateToProps = (state) => {
  
  return (
         { 
            timer: state.timer
         }
  );

};


export default connect(mapStateToProps, {})(PP1Frozen);