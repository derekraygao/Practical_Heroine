

export const timer = seconds => {

	return (
		{
			type: "TIMER_IN_SECONDS",
			payload: seconds

		}
	);

};