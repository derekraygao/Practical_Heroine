import React from 'react';
import { connect } from 'react-redux';

import './CharacterPowers.css';

import formatArrayIntoString from 'formatArrayIntoString.js';

/*
var testEoSenseArray = [
                        {name: "John", statusArray: ["Corruption", "Freeze"]},
                        {name: "Brad", statusArray: ["No Statuses"]},
                        {name: "John", statusArray: ["Zombie", "Burn", "Marked Man"]},
                       ];
*/

class EoSenseTable extends React.Component {


  returnEoTableRows = () => {

    var eoSenseArray = this.props.PH["Princess"]["eoSenseArray"];

    var statusRows = [];

    for (var i = 0; i < eoSenseArray.length; i++) {

      statusRows.push(

        <tr>
          <td>{eoSenseArray[i].name}</td>
          <td>{formatArrayIntoString(eoSenseArray[i].statusArray)}</td>
        </tr>

      ); //end statusRows.push()

    }; //end for

    return statusRows;

  }; //end returnEoTableRows



  render() {

    if (this.props.PH["Princess"]["eoSenseArray"].length == 0) {
      return <></>;
    };

    return (

      <table class="ui inverted orange table eoSenseMarginTop">

        <thead>
          <tr>
            <th>Name</th>
            <th>Status Conditions</th>
          </tr>
        </thead>

        <tbody>

          {this.returnEoTableRows()}

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
(EoSenseTable);

