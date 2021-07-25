import React from 'react';
import socket from 'Socket.js';
import './css/InputSubmit.css';

  /*props
  socketDestination=""
  textPlaceHolder=""
  buttonMessage=""
  customStyle={{}}
  submitButtonColor=""
  */


class InputSubmit extends React.Component {

  state = { 
            term: this.props.defaultInputValue, 
            socketDestination: this.props.socketDestination 
          };


  onChatClick = () => {
    //console.log(this.state.term);

    if (this.state.term !== "") {
      socket.emit(this.state.socketDestination, this.state.term);
      this.setState({ term: ""});
    };

  };
  

  handleKeyDown = (e) => {

    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      //console.log(this.state.term);

      if (this.state.term !== "") {
        socket.emit(this.state.socketDestination, this.state.term);
        this.setState({ term: ""});
      };

    };

  };


  render() {

    return (

      <div className="ui input flexinput">        

        <textarea
         className="inside-input-fields" //used to prevent keydown events 
         onChange={e => this.setState({ term: e.target.value })}
         type="text" placeholder={this.props.textPlaceHolder}
         value={this.state.term}
         onKeyDown={this.handleKeyDown} 
        />

        <button onClick={this.onChatClick} className={`ui button ${this.props.buttonColor}`}>
          <span>{this.props.buttonMessage}</span>
        </button>

      </div>

    ); //end return()
  }; //end render()






}; //end class

export default InputSubmit;



