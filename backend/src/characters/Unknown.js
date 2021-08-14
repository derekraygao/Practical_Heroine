var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");


class Unknown extends RolesMasterClass {

	constructor() {
      	
		super();

		/* from RolesMasterClass
		this.name = "";
		this.socketID = ""; 
		this.inGame = false; 
		this.index = -1;
		*/

        this.role = "???";
        this.alignment = "evil";
        this.team = "villains";

	}; //end constructor


}; //end class


module.exports = {
    Unknown
};