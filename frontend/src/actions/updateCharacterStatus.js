
//{"status": , newValue: ""}
export const updateCharacterStatus = (status, newValue) => {

	return (
		{
			type: "UPDATE_CHARACTER_STATUS",
			payload: {
						"status": status,
						"newValue": newValue,
					 }
		}
	);

};