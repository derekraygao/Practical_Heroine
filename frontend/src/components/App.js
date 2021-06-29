import React from 'react';



import MenuBar from './MenuBar.js';
import GamePlayBox from './GamePlayBox.js';

import './css/App.css';

class App extends React.Component {

  state = {

  };


  componentDidMount = () => {



  }; //end componentDidMount()


  render() {

    return (

      <div className="grid-container-main">

        <MenuBar />
        <GamePlayBox />



      </div> //end grid-container

    ); //end return


  }; //end render()



}; //end class App


export default App;