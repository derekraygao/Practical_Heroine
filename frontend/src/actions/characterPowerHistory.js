
//{"Umbra Lord": {}, "Marcus": {} ......}
export const characterPowerHistory = powerHistoryObj => {

	return (
		{
			type: "POWERS_HISTORY",
			payload: powerHistoryObj
		}
	);

};