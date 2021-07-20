
//{role: "Umbra Lord", power: "corruption", newValue: ""}
export const newCharacterStatus = (newStatusObj) => {

	return (
		{
			type: "NEW_CHARACTER_STATUS",
			payload: newStatusObj
		}
	);

};