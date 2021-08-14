
//message format: {type: "urgent", message: "this message"}
export const systemMessages = message => {

	return (
		{
			type: "SYSTEM_MESSAGE",
			payload: message

		}
	);

};