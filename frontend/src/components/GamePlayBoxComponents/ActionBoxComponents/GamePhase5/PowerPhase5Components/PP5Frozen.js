import React from 'react';
import { connect } from 'react-redux';


class PP5Frozen extends React.Component {


  render() {

    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          <button className="ui button">PP5: Frozen!</button>
        </div> 

        <div className="PP5-general-action-area-container">
          You were frozen! You cannot use any powers/abilities! 
          You will automatically thaw after this mission round. 
          Please wait {this.props.timer} seconds until it is time 
          to start voting on the mission (Game Phase 6).
        </div>

      </div>


    ); //end return

  }; //end render()



}; //end class PP5NoPower



const mapStateToProps = (state) => {
  
  return (
         {  
            role: state.role,
            timer: state.timer
         }
  );

};


export default connect(mapStateToProps, {})(PP5Frozen);