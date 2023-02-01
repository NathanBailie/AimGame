const onChangeWindows = (state: any, action: any) => {
	if (state === undefined) {
		return {
			greetings: true,
			setting: false,
			game: false,
			results: false,
		};
	};
	switch (action.type) {
		case 'LAUNCH_SETTINGS':
			return {
				greetings: false,
				setting: true,
				game: false,
				results: false,
			};
		case 'LAUNCH_MAIN':
			return {
				greetings: true,
				setting: false,
				game: false,
				results: false,
			};
		case 'LAUNCH_GAME':
			return {
				greetings: false,
				setting: false,
				game: true,
				results: false,
			};
		case 'LAUNCH_RESULTS':
			return {
				greetings: false,
				setting: false,
				game: false,
				results: true,
			};
		case 'CLOSE_GAME':
			return {
				greetings: false,
				setting: false,
				game: false,
				results: false,
			};
		default:
			return state.windows;
	}
};

export default onChangeWindows;