
import onChangeWindows from './onChangeWindows';
import onChangeSettings from './onChangeSettings';
import gameResults from './gameResults';

const reducer = (state: any, action: any) => {
	return {
		windows: onChangeWindows(state, action),
		settings: onChangeSettings(state, action),
		results: gameResults(state, action),
	};
};

export default reducer;