import React from 'react';
import './css/CrossExaminationBox.css';


import { connect } from 'react-redux';
import {crossExamBool} from '../actions/crossExamBool.js';
import {systemMessages} from '../actions/systemMessages.js';


import socket from 'Socket.js';

var detectiveChatImage = process.env.PUBLIC_URL + "/images/detective_chat_picture.jpg";

var ceTimerInterval;


class CrossExaminationBox extends React.Component {

  state = {
            timer: 60,
          };


  componentDidMount = () => {

      ceTimerInterval = setInterval(this.timerCountdown, 1000);
    
  }; //end componentDidMount


  componentWillUnmount() {

    clearInterval(ceTimerInterval);

  };


  timerCountdown = () => {

    var newTime = (this.state.timer - 1);

    if (newTime < 0) {

      clearInterval(ceTimerInterval);

      socket.emit("Cross Examination Plea", "Not Guilty");

      this.props.updateXXNBool(false);

    } else {

      this.setState({timer: newTime});

    };

  }; //end timerCountdown()




  onClickNotGuilty = () => {

    clearInterval(ceTimerInterval);

    socket.emit("Cross Examination Plea", "Not Guilty");

    this.props.addSystemMessage(
      {
        type: "power",
        message: ("You pleaded 'Not Guilty'! For this mission round ONLY, "
          + "if you are chosen for the mission team, +5 will be added "
          + "to the mission team's vote sum/total. Detective Chat was "
          + "notified of your not guilty plea. Lucky you! Star Practical "
          + "is not one of those no-kill heroes! If you were guilty, "
          + "she would totally kill you, your friends, your family.... "
          + "Even your kids! Weeds should not be left to fester!")
      }
    );

    this.props.updateXXNBool(false);

  };


  onClickGuilty = () => {

    clearInterval(ceTimerInterval);

    socket.emit("Cross Examination Plea", "Guilty");

    this.props.addSystemMessage(
      {
        type: "power",
        message: ("You pleaded 'Guilty'! For this mission round ONLY, "
          + "if you are chosen for the mission team, -5 to the "
          + "mission team's vote sum/total. Detective Chat was "
          + "notified of your guilty plea, you dastardly villain! " 
          + "Better watch out, your days are numbered! I am Star "
          + "Practical, a champion of practicality and rationality, "
          + "and on behalf of the stars, I will kill you! Evil doers "
          + "beware!")
      }
    );

    this.props.updateXXNBool(false);

  };


	render() {

		return (

      <div className="cross-examination-background">

  			<div className="cross-examination-container">


          <div className="cross-examination-header">
            Cross Examination ({this.state.timer} seconds)
          </div>

          <img
            className="detective-chat-picture"
            src={detectiveChatImage}
            alt="Detective Chat Picture"
          />

          <div className="cross-examination-instructions">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Detective Chat accuses you 
            of being a villain, meow! Could you be responsible for the 
            mysterious disappearances of girls from all over Azurea? 
            <br></br>
            <br></br>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you plead 'Guilty', 
            then if you are chosen for the mission team this round, 
            then -5 to the mission team's vote sum. If you plead 
            "Not Guilty", then +5 to the sum. If you are not chosen 
            for the mission team this round, then this power will 
            have no effect.
            <br></br>
            <br></br>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Be warned! Detective Chat 
            will know how you pled! Only a villain would ever plead 
            "Guilty". Once the timer runs out, you will automatically 
            plead "Not Guilty". Innocent until proven guilty, meow!
          </div>


          <div className="cross-examination-button-container">

            <button 
              class="ui green button"
              onClick={this.onClickNotGuilty}
            >
                Not Guilty (+5)
            </button>

            <button 
              class="ui red button"
              onClick={this.onClickGuilty}
            >
              Guilty (-5)
            </button>

          </div>


        </div> 

      </div>

		); //end return



	}; //end render()






}; //end class Cross Examination Box




const mapStateToProps = (state) => {
  
  return (
    { 
      myName: state.name,
    }
  );

};


export default connect(mapStateToProps, 
  {
   updateXXNBool: crossExamBool,
   addSystemMessage: systemMessages,
  }
)
(CrossExaminationBox);


