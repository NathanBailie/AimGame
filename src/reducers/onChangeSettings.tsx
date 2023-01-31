const onChangeSettings = (state: any, action: any) => {
	if (state === undefined) {
		return {
			timer: 10,
			targetSize: 35,
		};
	};
	switch (action.type) {
		case 'CHANGE_TIMER':
			return {
				...state.settings,
				timer: Number(action.payload),
			};
		case 'CHANGE_TARGET_SIZE':
			return {
				...state.settings,
				targetSize: Number(action.payload),
			};
		default:
			return state.settings;
	}
};

export default onChangeSettings;