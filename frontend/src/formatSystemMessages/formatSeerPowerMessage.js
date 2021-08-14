import formatArrayIntoString from 'formatArrayIntoString.js';

/*
        {
          name: obj.pA[ind].name,
          role: "status condition",
          status: statusArray
        }
*/

function formatSeerPowerMessage(scryInfo, _missionNumber) {

  var mess = "";

  if (scryInfo.status) {

    if (_missionNumber !== 7) {

      mess = scryInfo.name + "'s status conditions: " 
      + formatArrayIntoString(scryInfo.status);

    } else {

      mess = scryInfo.name + "'s role is: " + scryInfo.role
      + ". And status conditions are: " 
      + formatArrayIntoString(scryInfo.status);

    };


  } else {

    mess = scryInfo.name + "'s role is: " + scryInfo.role;

  };

  return mess;

}; //end function


export default formatSeerPowerMessage;