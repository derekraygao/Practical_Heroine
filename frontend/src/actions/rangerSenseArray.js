
//senseArray = [{name: "John", status: either "status" or "no status"}];
export const rangerSenseArray = senseArray => {

	return (
		{
			type: "RANGER_SENSE_ARRAY",
			payload: senseArray

		}
	);

};