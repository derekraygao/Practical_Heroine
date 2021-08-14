
//messageObj is {sender: "Esper", message: "Hello there."}

export const esperChatMessage = messageObj => {

	return (
		{
			type: "ESPER_MESSAGE",
			payload: messageObj

		}
	);

};