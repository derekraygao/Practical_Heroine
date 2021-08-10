import React from 'react';
import { connect } from 'react-redux';

import './RejoinedTheGamePhase12.css';



class RejoinedTheGamePhase12 extends React.Component {

  state = {
            
          };



  componentDidMount = () => {


  };





  render() {

    return (
      
      <div className="generic-action-box-container">

        <div className="generic-action-box-text-container">
          <span>
            Hi {this.props.myName}. You rejoined the game after 
            disconnecting. You'll be added back into the game 
            starting the next game phase. Please wait until then.
          </span>
        </div>

      </div>

    ); //end return

  }; //end render()



}; //end class GameOverPhase10



const mapStateToProps = (state) => {
  
  return (
         {  
            myName: state.name,
            roomInfo: state.roomInfo
         }
  );

};


export default connect(mapStateToProps, 
  {

  }
)
(RejoinedTheGamePhase12);