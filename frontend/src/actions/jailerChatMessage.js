
//messageObj is {sender: "Jailer", message: "Hello there."}

export const jailerChatMessage = messageObj => {

	return (
		{
			type: "JAILER_MESSAGE",
			payload: messageObj

		}
	);

};