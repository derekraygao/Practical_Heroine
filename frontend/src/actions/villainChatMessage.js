
//messageObj is {sender: "villain", message: "Hello there."}

export const villainChatMessage = messageObj => {

	return (
		{
			type: "VILLAIN_MESSAGE",
			payload: messageObj

		}
	);

};