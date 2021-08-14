import React from 'react';
import { connect } from 'react-redux';


class PP5NoPower extends React.Component {


  render() {

    return (

      <div className="PP5-general-container">

        <div className="PP5-powers-menu-bar-container orange ui buttons">
          <button className="ui button">PP5: No Power</button>
        </div> 

        <div className="PP5-general-action-area-container">
          Your role ({this.props.role}) has no powers to use at this time. Please wait {this.props.timer}
          &nbsp; seconds until it is time to start voting on the mission (Game Phase 6).
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


export default connect(mapStateToProps, {})(PP5NoPower);