const gameResults = (state: any, action: any) => {
	if (state === undefined) {
		return {
			hits: 0,
		};
	};
	switch (action.type) {
		case 'ADD_HIT':
			return {
				hits: state.results.hits + action.payload,
			};
		case 'LAUNCH_GAME':
			return {
				hits: 0,
			};
		default:
			return state.results;
	}
};

export default gameResults;