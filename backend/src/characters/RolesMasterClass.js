
class RolesMasterClass {

	constructor() {

		this.name = "";
		this.socketID = ""; 
		this.inGame = false; 
		this.index = -1;

	};


	assignRole(name, socketID, index) {

		this.name = name;
        this.socketID = socketID; 
        this.inGame = true; 
        this.index = index;

	};


};


module.exports = {
    RolesMasterClass
};