import React from 'react';
import { connect } from 'react-redux';

import './NightPhase8.css';

import { systemMessages } from 'actions/systemMessages.js';

import socket from 'Socket.js';
import formatArrayIntoString from 'formatArrayIntoString.js';





class NightPhase8 extends React.Component {

  state = {

          };


  render() {

    return (
      <div></div>
    ); //end return

  }; //end render()



}; //end class NightPhase8



const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            role: state.role,
            missionNumber: state.missionNumber,
            timer: state.timer,
         }
  );

};


export default connect(mapStateToProps, 
  {

  }
)
(NightPhase8);