
//{role: "Umbra Lord", power: "corruption", newValue: ""}
export const updateCharacterPowerHistory = (role, power, newValue) => {

	return (
		{
			type: "UPDATE_POWERS_HISTORY_FOR_A_CHARACTER",
			payload: {
						role: role,
						power: power,
						newValue: newValue
					 }
		}
	);

};