import React from 'react';
import './css/PP1UsedPower.css';

import { connect } from 'react-redux';





class PP1UsedPower extends React.Component {

  state = {

    timer: 20

  };

  componentDidMount = () => {



  }; //end componentDidMount


  render() {

    return (

      <div className="PP1-Used-Power-Container">
        You used your powers. Please wait {this.props.timer} seconds for 
        Power Phase 1 to end.
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


export default connect(mapStateToProps, {})(PP1UsedPower);