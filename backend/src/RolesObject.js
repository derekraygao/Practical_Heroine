var {Princess} = require('./characters/Princess.js');
var {Marcus} = require('./characters/Marcus.js');
var {Lottie} = require('./characters/Lottie.js');
var {Saintess} = require('./characters/Saintess.js');
var {Ichigo} = require('./characters/Ichigo.js');
var {Lan} = require('./characters/Lan.js');
var {Seer} = require('./characters/Seer.js');
var {Oracle} = require('./characters/Oracle.js');
var {Balancer} = require('./characters/Balancer.js');
var {DetectiveChat} = require('./characters/DetectiveChat.js');
var {AuraKnight} = require('./characters/AuraKnight.js');
var {Ranger} = require('./characters/Ranger.js');
var {Pear} = require('./characters/Pear.js');
var {Esper} = require('./characters/Esper.js');
var {Scientist} = require('./characters/Scientist.js');
var {Sensor} = require('./characters/Sensor.js');
var {Jailer} = require('./characters/Jailer.js');

var {UmbraLord} = require('./characters/UmbraLord.js');
var {Hecate} = require('./characters/Hecate.js');
var {Noah} = require('./characters/Noah.js');
var {Bomberman} = require('./characters/Bomberman.js');
var {LieutenantBlitz} = require('./characters/LieutenantBlitz.js');
var {Delayer} = require('./characters/Delayer.js');
var {Persequor} = require('./characters/Persequor.js');
var {Reverser} = require('./characters/Reverser.js');
var {Spiritualist} = require('./characters/Spiritualist.js');
var {BabyDoll} = require('./characters/BabyDoll.js');
var {Toxiturtle} = require('./characters/Toxiturtle.js');
var {Backstabber} = require('./characters/Backstabber.js');
var {Psychologist} = require('./characters/Psychologist.js');
var {Kaguya} = require('./characters/Kaguya.js');

var {Unknown} = require('./characters/Unknown.js');


var {shuffle} = require("./characters/shuffle.js");



class RolesObject {

  constructor() {

	  //inGame refers to whether the role is in your game
	  //index refers to index in playerArray

    this.roles = 
    {

      "Princess": new Princess(),


      "Saintess": new Saintess(),


      "Ichigo": new Ichigo(),


      "Marcus": new Marcus(),


      "Lottie": new Lottie(),


      "Lan": new Lan(),


      "Noah": new Noah(),


      "Seer": new Seer(),


      "Aura Knight": new AuraKnight(),


      "Balancer": new Balancer(),


      "Esper": new Esper(),


      "Pear": new Pear(),


      "Detective Chat": new DetectiveChat(),


      "Ranger": new Ranger(),


      "Oracle": new Oracle(),


      "Scientist": new Scientist(),


      "Jailer": new Jailer(),


      "Sensor": new Sensor(),


      //bad roles

      "Umbra Lord": new UmbraLord(),


      "Hecate": new Hecate(),


      "Bomberman": new Bomberman(),


      "Lieutenant Blitz": new LieutenantBlitz,


      "Delayer": new Delayer(),


      "Persequor": new Persequor(),


      "Spiritualist": new Spiritualist(),


      "Baby Doll": new BabyDoll(),


      "Toxiturtle": new Toxiturtle(),


      "Reverser": new Reverser(),


      "Backstabber": new Backstabber(),


      "Psychologist": new Psychologist(),


      "Kaguya": new Kaguya(),


      "Unknown": new Unknown(),

      /*
      sooah:
      {
            role: "sooah",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "unknown",
            team: "neutral"
      }
      */

    }; //end this.roles


    //this is a reference to the objects within the this.roles object
    //has same index order as player array
    this.rolesInGame = [];

    /*don't include princess or umbraLord, because they're ALWAYS in the game
      Similarly, don't include Ichigo/Saintess...manually set that
    */
    this.goodRoles = ["Seer", "Balancer", "Esper", 
                      "Pear", "Lan", "Marcus", "Lottie", 
                      "Detective Chat", "Aura Knight", 
                      "Ranger", "Scientist", "Oracle", 
                      "Jailer", "Sensor"];

    this.goodRolesOdd = ["Saintess", "Ichigo"];

    this.badRoles = ["Hecate", "Bomberman", "Lieutenant Blitz", 
                     "Reverser", "Noah", "Delayer", "Persequor", 
                     "Baby Doll", "Spiritualist", "Backstabber", 
                     "Toxiturtle", "Kaguya", "Psychologist"];


  }; //end constructor


  //
  getListOfRolesForGame(obj) {

    shuffle(this.goodRoles);
    shuffle(this.badRoles);

    var rolesArrayForThisGame = [];

    rolesArrayForThisGame[0] = "Princess";
    rolesArrayForThisGame[1] = "Umbra Lord";

    switch(obj.pA.length) {

      //3 and 4 should be test case only...need minimum 5 players
      case 3:

        //rolesArrayForThisGame[2] = goodRoles[0];
        rolesArrayForThisGame[2] = "Toxiturtle";

        break;


      case 4:

        rolesArrayForThisGame[2] = "Kaguya";
        rolesArrayForThisGame[3] = "Persequor";

        break;

      case 5:
        /*
                                  "Princess"  //Derek
                                  "Umbra Lord" //Cloud
        */
        rolesArrayForThisGame[2] = "Noah"; //this.badRoles[0]; //Serena
        rolesArrayForThisGame[3] = "Backstabber"; //this.goodRoles[0]; //Lucio
        rolesArrayForThisGame[4] = "Persequor"; //this.goodRoles[1]; //Xing

        break;

      case 6: 

        rolesArrayForThisGame[2] = this.badRoles[0];
  
        rolesArrayForThisGame[3] = this.goodRoles[0];
        rolesArrayForThisGame[4] = this.goodRoles[1];
        rolesArrayForThisGame[5] = this.goodRoles[2];

        break;

      case 7:
        
        rolesArrayForThisGame[2] = this.badRoles[0];
        rolesArrayForThisGame[3] = this.badRoles[1];

        rolesArrayForThisGame[4] = this.goodRolesOdd[this.get0Or1()];
        rolesArrayForThisGame[5] = this.goodRoles[0];
        rolesArrayForThisGame[6] = this.goodRoles[1];

        break;

      case 8:

        rolesArrayForThisGame[2] = this.badRoles[0];
        rolesArrayForThisGame[3] = this.badRoles[1];
       
        rolesArrayForThisGame[4] = this.goodRoles[0];
        rolesArrayForThisGame[5] = this.goodRoles[1];
        rolesArrayForThisGame[6] = this.goodRoles[2];
        rolesArrayForThisGame[7] = this.goodRoles[3];

        break;

      case 9:

        rolesArrayForThisGame[2] = this.badRoles[0];
        rolesArrayForThisGame[3] = this.badRoles[1];
        rolesArrayForThisGame[4] = this.badRoles[2];

        rolesArrayForThisGame[5] = this.goodRolesOdd[this.get0Or1()];
        rolesArrayForThisGame[6] = this.goodRoles[0];
        rolesArrayForThisGame[7] = this.goodRoles[1];
        rolesArrayForThisGame[8] = this.goodRoles[2];

        break;

      case 10:

        rolesArrayForThisGame[2] = this.badRoles[0];
        rolesArrayForThisGame[3] = this.badRoles[1];
        rolesArrayForThisGame[4] = this.badRoles[2];

        rolesArrayForThisGame[5] = this.goodRoles[0];
        rolesArrayForThisGame[6] = this.goodRoles[1];
        rolesArrayForThisGame[7] = this.goodRoles[2];
        rolesArrayForThisGame[8] = this.goodRoles[3];
        rolesArrayForThisGame[9] = this.goodRoles[4];

        /*
        //add good roles
        for (var i = 2; i < 7; i++) {
          rolesArrayForThisGame[i] = this.goodRoles[(i - 2)];
        };
        

        //add bad roles
        for (var i = 8; i < 11; i++) {
          rolesArrayForThisGame[i] = this.badRoles[(i - 8)];
        }; */

        break;


      default:

    }; //end switch


    //shuffle(rolesArrayForThisGame);

    return rolesArrayForThisGame;

  }; //end getListOfRolesForGame


  get0Or1() {

    return (Math.floor(Math.random() * 2));

  };



  getRolesInGame() {

    return this.rolesInGame;

  };


  getPrincessIdentity() {

    return (this.roles["Princess"].name);

  };


  //marcus does not know between Princess & Persequor
  getPrincessIdentityArrayForMarcus(obj) {

    if (!this.roles["Marcus"].inGame) { return 0; };

    if (this.roles["Persequor"].inGame) { 

      var princessArr = [this.roles["Princess"].name, this.roles["Persequor"].name];
      shuffle(princessArr);

      var stackObj = {
                      type: "Individual",
                      socketID: this.roles["Marcus"].socketID,
                      destination: "Reveal Princess Identity To Marcus",
                      data: princessArr
                     };

      obj.stack.push(stackObj);


    } else {

      var stackObj = {
                      type: "Individual",
                      socketID: this.roles["Marcus"].socketID,
                      destination: "Reveal Princess Identity To Marcus",
                      data: [this.roles["Princess"].name]
                     };

      obj.stack.push(stackObj);

    }; //end else (if Persequor NOT in game)


  }; //end getPrincessIdentityForMarcus



  //remember it's 1 to 1 mapping between playerArray and rolesInGame
  addPrincessGuessForVillain(obj, guessName) {
    
    this.rolesInGame[obj.index].princessGuess = guessName;

  };


  didVillainsCorrectlyGuessThePrincessIdentity(obj) {

    var princessIdentityMap = {};

    for (var i = 0; i < this.rolesInGame.length; i++) {

      if (this.rolesInGame[i].team != "villains") { continue; };
      if (obj.pA[i].connection != "connected") { continue; };

      //if someone already guessed and it exists as a property
      if (princessIdentityMap[this.rolesInGame[i].princessGuess]) {

        princessIdentityMap[this.rolesInGame[i].princessGuess] += 1;

      } else {

        //if princess guess is null because someone disconnected
        if (!this.rolesInGame[i].princessGuess) { continue; };

        princessIdentityMap[this.rolesInGame[i].princessGuess] = 1;

      };

      
    }; //end for


    //Time to Find Which Guess Has Most Votes
    var princessGuessArray = [];

    for (var key in princessIdentityMap) {
      princessGuessArray.push({"guessName": key, "votes": princessIdentityMap[key]});
    };


    //sort descending order
    princessGuessArray.sort( (a, b) => {

      return (b.votes - a.votes);

    });

    /*might not be necessary...cause if there's not enough villains,
    the game will end due to too many villains disconnecting, but 
    put this here just in case */
    if (princessGuessArray.length == 0) { return false; };


    if (princessGuessArray[0].guessName == this.getPrincessIdentity()) {

      return true;

    } else {

      return false;

    };


  }; //end didVillainsCorrectlyGuessThePrincessIdentity()



  getVillainsIdentities() {

    var listOfVillains = [];

    for (let i = 0; i < this.rolesInGame.length; i++) {

      if (this.rolesInGame[i].team == "villains") {
        listOfVillains.push(this.rolesInGame[i].name);
      };

    };

    return listOfVillains;

  }; //end getVillainIdentities


  //princess does not know persequor's identity
  getVillainsIdentitiesForPrincess(obj) {

    var listOfVillains = [];

    for (let i = 0; i < this.rolesInGame.length; i++) {

      if (this.rolesInGame[i].role == "Persequor") { continue; };

      if (this.rolesInGame[i].team == "villains") {
        listOfVillains.push(this.rolesInGame[i].name);
      };

    };

    
    var stackObj = {
                    type: "Individual",
                    socketID: this.roles["Princess"].socketID,
                    destination: "Reveal Villains To Princess",
                    data: listOfVillains
                   };

    obj.stack.push(stackObj);

  }; //end getVillainsIdentitiesForPrincess



  getAllIdentitiesAndTheirRoles() {
    
    var identityAndRoleArray = [];

    for (let i = 0; i < this.rolesInGame.length; i++) {

      identityAndRoleArray.push(

        {
          name: this.rolesInGame[i].name,
          role: this.rolesInGame[i].role,
          team: this.rolesInGame[i].team
        }

      ); //end push()

    }; //end for


    return identityAndRoleArray;

  }; //end getAllIdentitiesAndTheirRoles













}; //end class RolesObject











module.exports = {
    RolesObject
};



/*

    this.roles = 
    {

      princess: princess,
      saintess: saintess,
      arduren: arduren,
      marcus: marcus,
      seer: seer,
      aura: aura,
      balancer: balancer,
      telepath: telepath,
      ghost: ghost,
      detective: detective,
      ranger: ranger,
      oracle: oracle,
      scientist: scientist,
      jailer: jailer,
      sensor: sensor,
      demonLord: demonLord,
      hecate: hecate,
      exploder: exploder,
      alpha: alpha,
      delayer: delayer,
      ditto: ditto,
      spiritualist: spiritualist,
      reverser: reverser,
      sooah: sooah


    }; //end this.roles

*/