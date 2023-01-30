const onChangeSettings = (state: any, action: any) => {
	if (state === undefined) {
		return {
			timer: 10,
		};
	};
	switch (action.type) {
		case 'CHANGE_TIMER':
			return {
				timer: action.payload,
			};

		default:
			return state.settings;
	}
};

export default onChangeSettings;