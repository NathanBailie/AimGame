import { StrNum } from '../types';

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
const onChangeTimer = (value: StrNum | StrNum[]) => {
	return {
		type: 'CHANGE_TIMER',
		payload: value,
	};
};
const onChangeTargetSize = (value: StrNum | StrNum[]) => {
	return {
		type: 'CHANGE_TARGET_SIZE',
		payload: value,
	};
};
const onChangeTargetColor = (value: StrNum | StrNum[]) => {
	return {
		type: 'CHANGE_TARGET_COLOR',
		payload: value,
	};
};
const onChangeBoardColor = (value: StrNum | StrNum[]) => {
	return {
		type: 'CHANGE_BOARD_COLOR',
		payload: value,
	};
};
const onCloseGame = () => {
	return {
		type: 'CLOSE_GAME',
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
	onChangeTimer,
	onChangeTargetSize,
	onChangeTargetColor,
	onChangeBoardColor,
	onCloseGame,
	onAddHit,
};