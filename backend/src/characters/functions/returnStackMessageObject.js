
/*messageType: power, urgent, normal, new mission, etc.
type is defined on frontend side in the SystemMessageBox.js
component

type (string)
message (string)

stackType (string) = like "Individual" or "Everyone" ; 
it's defined in server.js MessageNotificationStack(obj) function

socketID (string) = destination socket ID, who to send to
destination (string) = what socket.on("")
data (can be anything) = this is sent to client to unload

*/
function returnStackMessageObject(
									messageType, 
									message, 
									stackType,
									socketID,
									destination
								 ) {

	var systemMessage = {
							type: messageType,
							message: message
						};


	var stackObj = {
						type: stackType,
						socketID: socketID,
						destination: destination,
						data: systemMessage
				   };




}; //end returnStackMessageObject()


module.exports = {
   returnStackMessageObject 
};

