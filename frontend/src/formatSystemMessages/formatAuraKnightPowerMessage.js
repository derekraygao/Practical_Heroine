import formatArrayIntoString from 'formatArrayIntoString.js';

/*
        {
          name: obj.pA[ind].name,
          alignment: "status",
          status: statusArray
        }
*/

function formatAuraKnightPowerMessage(auraInfo) {

  var mess = "";

  if (auraInfo.alignment === "Status") {

    mess = (auraInfo.name + " has the following status conditions: "
      + formatArrayIntoString(auraInfo.status));

  } else {

    mess = auraInfo.name + "'s alignment is: " + auraInfo.alignment;

  };
   

  return mess;

}; //end function


export default formatAuraKnightPowerMessage;