const onChangeSettings = (state: any, action: any) => {
	if (state === undefined) {
		return {
			timer: 10,
			targetSize: 35,
			targetColor: ['#9e9ae9', 'blue'],
			boardColor: '#95927c',
			sound: 'on',
			clickSound: 5,
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
		case 'CHANGE_TARGET_COLOR':
			return {
				...state.settings,
				targetColor: action.payload,
			};
		case 'CHANGE_BOARD_COLOR':
			return {
				...state.settings,
				boardColor: action.payload,
			};
		case 'TURN_THE_SOUND':
			return {
				...state.settings,
				sound: action.payload,
			};
		case 'CHANGE_CLICK_SOUND':
			return {
				...state.settings,
				clickSound: action.payload,
			};
		default:
			return state.settings;
	}
};

export default onChangeSettings;