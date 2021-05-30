var {RolesMasterClass} = require("./RolesMasterClass.js");

class Jailer extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Jailer";
        this.alignment = "good";
        this.team = "heroes";

        this.jailedPlayer = "nobody";

	}; //end constructor

	jailPlayer(name) {

		this.jailedPlayer = name;

	};

	resetJailedPlayer() {

		this.jailedPlayer = "nobody";
	};


	messageSenderNameForJailer(index, obj) {

		if (obj.pA[index].role == "Jailer") {

			return (obj.pA[index].name + " (Jailer)");

		} else {
			return obj.pA[index].name
		};

	};


	messageSenderNameForJailedPlayer(index, obj) {

		if (obj.pA[index].role == "Jailer") {

			return "Jailer";

		} else {

			return obj.pA[index].name;

		};

	};

	//get index within server.js, using socket.id
	convertJailerMessage(index, message, obj) {

		return (

			{
				jailerMessage:
					{
						sender: this.messageSenderNameForJailer(index, obj),
						message: message
					},

				jailedPlayerMessage:
					{
						sender: this.messageSenderNameForJailedPlayer(index, obj),
						message: message
					}

			} //end obj

		); //end return

	}; //end convertJailerMessage(index, message, obj)




}; //end class


module.exports = {
    Jailer
};