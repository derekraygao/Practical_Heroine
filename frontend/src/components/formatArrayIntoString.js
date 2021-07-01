
function formatArrayIntoString(_array) {

  var outputString = "";

  //format string output
  for (var i = 0; i < _array.length; i++) {

      outputString = outputString + _array[i];

      if (_array.length === 2) {

        if (i === 0) { //if first name of two names
          outputString = outputString + " and ";
        } else { //if second name of two names
          outputString = outputString + "."; //this could be changed to "." period
        };

      } else { //for 3 or more names

        if (i === (_array.length - 2)) { //2nd to last name

          outputString = outputString + ", and ";

        } else if (i === (_array.length - 1)) { //last/final name

          outputString = outputString + "."; //this could be changed to "." period

        } else {

          outputString = outputString + ", ";

        }; //end inner else

      }; //end outer else

  }; //end for (var i = 0; i < baddiesArray.length)

  return outputString;

};

export default formatArrayIntoString;