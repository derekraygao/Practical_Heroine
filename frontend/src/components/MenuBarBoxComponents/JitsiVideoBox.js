import React from 'react';
import {useEffect} from 'react';
import { useJitsi } from 'react-jutsu'

import socket from 'Socket.js';

import './css/NotesBox.css';


const JitsiVideoBox = (props) => {

  
  //componentWillUnmount
  useEffect(() => {

       return () => {

          document.querySelectorAll('iframe').forEach(iframe => {
              iframe.parentNode.removeChild(iframe);
          });


          console.log("Unmounting/Destroying Jitsi, Key Value is: " + props.keyValue);

       };

    }, []); 


  const jitsiConfig = {

    roomName: props.roomName,
    parentNode: 'jitsi-container',

  };

  const { loading, error, jitsi } = useJitsi(jitsiConfig);

  return (

    <>

      {error && <p>{error}</p>}

      <div id="jitsi-container" style={props.display} />

    </>

  );


}; //end JitsiVideoBox



export default JitsiVideoBox;





