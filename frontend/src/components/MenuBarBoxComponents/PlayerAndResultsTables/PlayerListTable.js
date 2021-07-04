import React from 'react';
import { connect } from 'react-redux';


import './css/PlayerListTable.css';


class PlayerListTable extends React.Component {

  state = {


  };

  componentDidMount = () => {

  }; //end componentDidMount


  teamLeaderStyle = (name) => {

    return ((name === this.props.teamLeader) 
      ? {backgroundColor: "#fbbd08", color: "white"} : {});

  };


  listOfPlayers = () => {

    const playersArray = this.props.playerList.map((name, index) => {

      return (

          <tr>
            <td style={this.teamLeaderStyle(name)}>{name}</td>
          </tr>

      ); //end return

    }); //end playersArray = this.props....


    return playersArray;
  };



  render() {

    return (
      <div className="player-list-table-container">

        <table class="ui celled table">

          <tbody>
            <tr>
              <td 
                data-label="Player-Order" 
                style={{backgroundColor: "#f2711d", color:"white", fontWeight: "bold"}}
              >
                Player Order
              </td>
            </tr>

            {this.listOfPlayers()}
            
          </tbody>

        </table>

      </div>

    ); //end return


  }; //end render


}; //end PlayerListTable



const mapStateToProps = (state) => {
  
  return (
    { 
      playerList: state.playerList,
      teamLeader: state.teamLeader,
    }
  );

};


export default connect(mapStateToProps, 
  {

  })
(PlayerListTable);

