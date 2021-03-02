

class RolesObject {

  constructor() {

	  //inGame refers to whether the role is in your game
	  //index refers to index in playerArray

    this.roles = 
    {

      princess: 
      {     
            role: "princess",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1,
            alignment: "unknown",
            team: "heroes"
      },


      saintess:
      { 
            role: "saintess",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1,
            alignment: "good",
            team: "heroes"
      },


      arduren:
      {
            role: "arduren",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1,
            alignment: "good",
            team: "heroes"
      },


      marcus:
      {
            role: "marcus",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "good",
            team: "heroes"
      },


      seer:
      {
            role: "seer",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "good",
            team: "heroes"
      },


      aura:
      {
            role: "aura",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "good",
            team: "heroes"
      },


      balancer: 
      {
            role: "balancer",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "good",
            team: "heroes"
      },


      telepath: 
      {
            role: "telepath",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "good",
            team: "heroes"
      },


      ghost:
      {
            role: "ghost",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "good",
            team: "heroes"
      },


      detective: 
      {
            role: "detective",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "good",
            team: "heroes"
      },


      ranger:
      {
            role: "ranger",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "good",
            team: "heroes"
      },


      oracle:
      {
            role: "oracle",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "good",
            team: "heroes"
      },


      scientist: 
      {
            role: "scientist",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "good",
            team: "heroes"
      },


      jailer: 
      {
            role: "jailer",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "good",
            team: "heroes"
      },


      sensor:
      {
            role: "sensor",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "good",
            team: "heroes"
      },


      //bad roles

      demonLord: 
      {
            role: "demonLord",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "unknown",
            team: "villains"
      },


      hecate: 
      {
            role: "hecate",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "bad",
            team: "villains"
      },


      exploder: 
      {
            role: "exploder",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "bad",
            team: "villains"
      },


      alpha: 
      {
            role: "alpha",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "bad",
            team: "villains"
      },


      delayer: 
      {
            role: "delayer",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "bad",
            team: "villains",
            delayerCount: 0 //default is 0
      },


      ditto:
      {
            role: "ditto",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "bad",
            team: "villains",
            voteCopyTarget: "",
            identityTheftTarget: ""
      },


      spiritualist: 
      {
            role: "spiritualist",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "bad",
            team: "villains"
      },


      reverser:
      {
            role: "reverser",
            name: "", 
            socketID: "", 
            inGame: false, 
            index: -1, 
            alignment: "bad",
            team: "villains"
      },


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


    }; //end this.roles


    //this is a reference to the objects within the this.roles object
    this.rolesInGame = [];

      //don't include princess or demonLord, because they're ALWAYS in the game
    this.goodRoles = ["seer", "balancer", "telepath", "ghost", 
                      "marcus", "detective", "aura", "ranger", 
                      "scientist", "oracle", "jailer", "sensor"];

    this.badRoles = ["hecate", "exploder", "alpha", "reverser", 
                     "delayer", "ditto", "spiritualist"];



  }; //end constructor


  //
  getListOfRolesForGame(obj) {

    shuffle(this.goodRoles);
    shuffle(this.badRoles);

    var rolesArrayForThisGame = [];

    rolesArrayForThisGame[0] = "princess";
    rolesArrayForThisGame[1] = "demonLord";

    switch(obj.pA.length) {

         //3 and 4 should be test case only...need minimum 5 players
      case 3:

        //rolesArrayForThisGame[2] = goodRoles[0];
        rolesArrayForThisGame[2] = "marcus";

        break;


      case 4:

        rolesArrayForThisGame[2] = "ranger";
        rolesArrayForThisGame[3] = "ditto";

        break;

      case 5:

        rolesArrayForThisGame[2] = this.badRoles[0];
        rolesArrayForThisGame[3] = this.goodRoles[0];
        rolesArrayForThisGame[4] = this.goodRoles[1];

        break;

      case 6: 

        rolesArrayForThisGame[2] = "spiritualist"; //badRoles[0];
        rolesArrayForThisGame[3] = "oracle";//goodRoles[0];
        rolesArrayForThisGame[4] = "marcus";//goodRoles[1];
        rolesArrayForThisGame[5] = "seer";//goodRoles[2];

        break;

      case 7:
        
        rolesArrayForThisGame[2] = this.badRoles[0];
        rolesArrayForThisGame[3] = this.badRoles[1];
        rolesArrayForThisGame[4] = this.goodRoles[0];
        rolesArrayForThisGame[5] = this.goodRoles[1];
        rolesArrayForThisGame[6] = this.goodRoles[2];

        break;

      case 8:

        //add good roles
        for (var i = 2; i < 7; i++) {
          rolesArrayForThisGame[i] = this.goodRoles[(i - 2)];
        };
        

        //add bad roles
        for (var i = 7; i < 8; i++) {
          rolesArrayForThisGame[i] = this.badRoles[(i - 7)];
        };

        break;

      case 9:

        rolesArrayForThisGame[2] = this.badRoles[0];
        rolesArrayForThisGame[3] = this.badRoles[1];
        rolesArrayForThisGame[4] = this.badRoles[2];
        rolesArrayForThisGame[5] = this.goodRoles[0];
        rolesArrayForThisGame[6] = this.goodRoles[1];
        rolesArrayForThisGame[7] = this.goodRoles[2];
        rolesArrayForThisGame[8] = this.goodRoles[3];

        break;

      case 10:

        //add good roles
        for (var i = 2; i < 8; i++) {
          rolesArrayForThisGame[i] = this.goodRoles[(i - 2)];
        };
        

        //add bad roles
        for (var i = 8; i < 12; i++) {
          rolesArrayForThisGame[i] = this.badRoles[(i - 8)];
        };

        break;


      default:

    }; //end switch


    shuffle(rolesArrayForThisGame);

    return rolesArrayForThisGame;

  }; //end getListOfRolesForGame



  getRolesInGame() {

    return this.rolesInGame;

  };


  getPrincessIdentity() {

    return (this.roles["princess"].name);

  };


  //marcus does not know between ditto & persequor
  getPrincessIdentityArrayForMarcus() {

    if (!this.roles["ditto"].inGame) { return ([this.roles["princess"].name]); };

    /*ditto is in game*/
    var princessAndDitto = [this.roles["princess"].name, this.roles["ditto"].name];

    shuffle(princessAndDitto);

    return princessAndDitto;

  }; //end getPrincessIdentityForMarcus




  getVillainsIdentities() {

    var listOfVillains = [];

    for (let i = 0; i < this.rolesInGame.length; i++) {

      if (this.rolesInGame[i].team == "villains") {
        listOfVillains.push(this.rolesInGame[i].name);
      };

    };

    return listOfVillains;

  }; //end getVillainIdentities


  //princess does not know ditto's identity
  getVillainsIdentitiesForPrincess() {

    var listOfVillains = [];

    for (let i = 0; i < this.rolesInGame.length; i++) {

      if (this.rolesInGame[i].role == "ditto") { continue; };

      if (this.rolesInGame[i].team == "villains") {
        listOfVillains.push(this.rolesInGame[i].name);
      };

    };

    return listOfVillains;

  }; //end getVillainsIdentitiesForPrincess




}; //end class RolesObject








function shuffle(array) {

  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  };

  return array;

};



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