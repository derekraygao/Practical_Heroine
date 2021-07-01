/* IMPORTANT IMPORTANT! ANYTIME THIS FILE IS CHANGED, MUST ALSO CHANGE
FILE WITHIN backend/src/characters
AND frontend/src/
*/

/* eslint-disable */
function calculateNumberofTeamMembers(_MNumber, _numOfPlayers) {

  //3 and 4 are for testing purposes only...minimum of 5 players for game

  if (_numOfPlayers == 3) {

    if (_MNumber == 1) {

      return 2;

    } else if (_MNumber == 2) {

      return 3;

    } else if (_MNumber == 3) {

      return 1;

    } else if (_MNumber == 4) {

      return 2;

    } else if (_MNumber == 5) {

      return 2;

    } else if (_MNumber == 6) {

      return 3;

    } else if (_MNumber == 7) {

      return 3;

    };



  } else if (_numOfPlayers == 4) {


    if (_MNumber == 1) {

      return 3;

    } else if (_MNumber == 2) {

      return 3;

    } else if (_MNumber == 3) {

      return 3;

    } else if (_MNumber == 4) {

      return 3;

    } else if (_MNumber == 5) {

      return 3;

    } else if (_MNumber == 6) {

      return 3;

    } else if (_MNumber == 7) {

      return 3;

    };



  } else if (_numOfPlayers == 5) {


    if (_MNumber == 1) {

      return 2;

    } else if (_MNumber == 2) {

      return 3;

    } else if (_MNumber == 3) {

      return 3;

    } else if (_MNumber == 4) {

      return 3;

    } else if (_MNumber == 5) {

      return 3;

    } else if (_MNumber == 6) {

      return 2;

    } else if (_MNumber == 7) {

      return 4;

    };



  } else if (_numOfPlayers == 6) {


    if (_MNumber == 1) {

      return 3;

    } else if (_MNumber == 2) {

      return 2;

    } else if (_MNumber == 3) {

      return 4;

    } else if (_MNumber == 4) {

      return 4;

    } else if (_MNumber == 5) {

      return 3;

    } else if (_MNumber == 6) {

      return 2;

    } else if (_MNumber == 7) {

      return 5;

    };


  } else if (_numOfPlayers == 7) {


    if (_MNumber == 1) {

      return 3;

    } else if (_MNumber == 2) {

      return 3;

    } else if (_MNumber == 3) {

      return 4;

    } else if (_MNumber == 4) {

      return 2;

    } else if (_MNumber == 5) {

      return 5;

    } else if (_MNumber == 6) {

      return 4;

    } else if (_MNumber == 7) {

      return 5;

    };



  } else if (_numOfPlayers == 8) {


    if (_MNumber == 1) {

      return 3;

    } else if (_MNumber == 2) {

      return 5;

    } else if (_MNumber == 3) {

      return 5;

    } else if (_MNumber == 4) {

      return 2;

    } else if (_MNumber == 5) {

      return 3;

    } else if (_MNumber == 6) {

      return 5;

    } else if (_MNumber == 7) {

      return 6;

    };


  } else if (_numOfPlayers == 9) {


    if (_MNumber == 1) {

      return 4;

    } else if (_MNumber == 2) {

      return 3;

    } else if (_MNumber == 3) {

      return 2;

    } else if (_MNumber == 4) {

      return 6;

    } else if (_MNumber == 5) {

      return 5;

    } else if (_MNumber == 6) {

      return 2;

    } else if (_MNumber == 7) {

      return 7;

    };


  } else if (_numOfPlayers == 10) {


    if (_MNumber == 1) {

      return 5;

    } else if (_MNumber == 2) {

      return 5;

    } else if (_MNumber == 3) {

      return 4;

    } else if (_MNumber == 4) {

      return 3;

    } else if (_MNumber == 5) {

      return 2;

    } else if (_MNumber == 6) {

      return 5;

    } else if (_MNumber == 7) {

      return 8;

    };

  };


}; //end calculateNumberofTeamMembers function



module.exports = {
    calculateNumberofTeamMembers
};