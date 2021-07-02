import React from 'react';
import './css/TitleBar.css';
import { connect } from 'react-redux';



class TitleBar extends React.Component {


  descriptionContent() {

    switch(this.props.gamePhase) {

      case 1:
        return ("Game Phase 1 (Time Left): " + this.props.timer);

      case 5:

        if (this.props.missionTeam.includes(this.props.name)) {
          return ("Game Phase 5 (Time Left): " + this.props.timer);
        } else {
          return ("Game Phase 5 + 6 (Time Left): " + this.props.timer);
        };

      case 6:
        return ("Game Phase 6 (Time Left): " + this.props.timer);

      default:
        return ""; 


    }; //end switch



  }; //end descriptionContent


	render() {

		return (
            <>

                <div className="title-bar-title">
                    {this.props.name + " : " + this.props.role}

                </div>

                <div className="title-bar-description">
                  {this.descriptionContent()}
                </div>

                <div className="title-bar-buttons">
                </div>

            </>

		); //end return



	}; //end render()






}; //end class TitleBar


const mapStateToProps = (state) => {
  
  return (
    { 
      name: state.name,
      role: state.role,
      gamePhase: state.gamePhase,
      missionTeam: state.missionTeam,
      timer: state.timer
    }
  );

};


export default connect(mapStateToProps, {}) (TitleBar);


