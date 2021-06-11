var {RolesMasterClass} = require("./RolesMasterClass.js");

class Princess extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Princess";
        this.alignment = "unknown";
        this.team = "heroes";

	}; //end constructor


	/*Princess ALWAYS in the game, so no need to do checks
	nameArr because for exchange of spirits, there's 2 names!
	also for swapping, there's 2 names */
	EONotification(nameArr, status, obj) {

		switch(status) {

			case "corrupted":
				return (nameArr + " has been corrupted! His/her base voting power is now reversed!");
				break;

			case "bomb":
				return ("A flame seal bomb has been placed upon " + nameArr + ". It will explode the next time he/she is on a mission!");
				break;

			case "burn":
				return (nameArr + " has been burned! Starting next round, every round, he/she will lose an additional 0.75 voting power!");
				break;

			case "soul mark":
				return ("A soul mark has been placd on " + nameArr + ". The spiritualist increases her base voting power by 1.25 per soul mark!");
				break;

			case "paralyzed":
				return (nameArr + " has been paralyzed by thunder! He/she cannot be the mission leader for the next round!");
				break;

			case "multiplier":
				return ("Multiplication magic has been cast on " + nameArr + ". His/her voting power will be multiplied the next time he/she votes!");
				break;

			case "exchange":
				return (nameArr[0] + "'s and " + nameArr[1] + "'s spirits have been exchanged! ALL statuses have been swapped between the two players.");
				break;

			case "shrink":
				return (nameArr + " has been shrunk! His/her mission and team voting power will be halved for the next 2 rounds.");
				break;

			case "anti-magic ray":
				return (nameArr + " has been blasted with an anti-magic ray! ALL status effects, good & bad, have been nullified.");
				break;

			case "bless":
				return ("The saintess has blessed " + nameArr + ". His/her team + mission vote power are doubled for this round only.");
				break;

			case "safeguard":
				return ("Holy magic envelopes " + nameArr + ". For this round only, his/her mission vote is guaranteed to be positive.");
				break;

			case "purify":
				return ("The darkness of corruption and soul mark has been cleansed from " + nameArr + ".");
				break;

			case "esuna":
				return ("Esuna cools the dark fires of flame seal bomb and burn condition on " + nameArr + ".");
				break;

			case "dispel":
				return ("The saintess dispels the negative powers of shrink and multiplication on " + nameArr + ". If he/she is the Delayer, his/her gathered power has been scattered.");
				break;

			default:
				return "EO Notification Error";

		}; //end switch

	}; //end EONotification



}; //end class


module.exports = {
    Princess
};