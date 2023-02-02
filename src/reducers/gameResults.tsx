const gameResults = (state: any, action: any) => {
	if (state === undefined) {
		return {
			hits: 0,
			missclicks: 0,
			accuracy: 0,
		};
	};
	switch (action.type) {
		case 'ADD_HIT':
			return {
				...state.results,
				hits: state.results.hits + action.payload,
			};
		case 'ADD_MISSCLICK':
			return {
				...state.results,
				missclicks: state.results.missclicks + action.payload,
			};
		case 'COUNT_ACCURACY':
			const { hits, missclicks } = state.results;
			return {
				...state.results,
				accuracy: (hits * 100) / (hits + missclicks),
			};
		case 'LAUNCH_GAME':
			return {
				hits: 0,
				missclicks: 0,
				accuracy: 0,
			};
		default:
			return state.results;
	}
};

export default gameResults;