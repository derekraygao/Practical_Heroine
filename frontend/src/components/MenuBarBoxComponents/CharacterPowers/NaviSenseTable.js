import React from 'react';
import { connect } from 'react-redux';

import './CharacterPowers.css';

import formatArrayIntoString from 'formatArrayIntoString.js';




class NaviSenseTable extends React.Component {


  //naviSenseInfo = {name: "John", statusArray: ["Corruption", "Freeze"]}

  render() {

    var naviSenseInfo = this.props.PH["Ichigo"]["naviSenseInfo"];

    return (

      <table class="ui inverted orange table SenseTableMargin">

        <thead>
          <tr>
            <th>Name</th>
            <th>Status Conditions</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>{naviSenseInfo.name}</td>
            <td>{formatArrayIntoString(naviSenseInfo.statusArray)}</td>
          </tr>

        </tbody>

      </table>

    ); //end return


  }; //end render


}; //end <Character>PowerInfo



const mapStateToProps = (state) => {
  
  return (
    { 
      PH: state.characterPowersHistory,
    }
  );

};


export default connect(mapStateToProps, 
  {

  })
(NaviSenseTable);

