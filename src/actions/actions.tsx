const onLaucnhMain = () => {
	return {
		type: 'LAUNCH_MAIN',
	};
};
const onLaucnhSettings = () => {
	return {
		type: 'LAUNCH_SETTINGS',
	};
};
const onLaucnhGame = () => {
	return {
		type: 'LAUNCH_GAME',
	};
};
const onLaucnhResults = () => {
	return {
		type: 'LAUNCH_RESULTS',
	};
};
const onChageTimer = (timer: number) => {
	return {
		type: 'CHANGE_TIMER',
		payload: timer,
	};
};
const onAddHit = () => {
	return {
		type: 'ADD_HIT',
		payload: 1,
	};
};

export {
	onLaucnhSettings,
	onLaucnhMain,
	onLaucnhGame,
	onLaucnhResults,
	onChageTimer,
	onAddHit,
};