import './settingsWindow.scss';
import Timers from '../Settings/Timers/Timers';
import TargetSizes from '../Settings/TargetSizes/TargetSizes';
import TargetColors from '../Settings/TargetColors/TargetColors';
import BoardColors from '../Settings/BoardColors/BoardColors';
import SoundSwitcher from '../Settings/SoundSwitcher/SoundSwitcher';
import ClickSounds from '../Settings/ClickSounds/ClickSounds';
import { useState, useEffect } from 'react';
import compose from '../../utils/compose';
import { connect } from 'react-redux';
import { onLaucnhMain, onChangeTimer, onChangeTargetSize, onChangeTargetColor, onChangeBoardColor, onTurnTheSound, onChangeClickSound } from '../../actions/actions';
import { Settings, Data } from '../../interfaces';
import { StrNum } from '../../types';


type Props = {
	laucnhMain: () => void,
	changeTimer: (value: StrNum | StrNum[]) => void,
	timer: number,
	changeTargetSize: (value: StrNum | StrNum[]) => void,
	targetSize: number,
	changeTargetColor: (value: StrNum | StrNum[]) => void,
	targetColor: StrNum[],
	changeBoardColor: (value: StrNum | StrNum[]) => void,
	boardColor: string,
	changeClickSound: (value: StrNum | StrNum[]) => void,
	clickSound: StrNum,
	turnTheSound: (value: StrNum | StrNum[]) => void,
	sound: StrNum,
};


const SettingsWindow: React.FC<Props> = ({ laucnhMain, changeTimer, timer, changeTargetSize, targetSize, changeTargetColor, targetColor, changeBoardColor, boardColor, turnTheSound, sound, changeClickSound, clickSound }) => {
	const settings = {
		timers: [10, 20, 30, 40, 50, 60],
		targetSizes: [15, 20, 25, 30, 35, 40],
		targetColors: [
			['radial-gradient', '', '#f9f798', '#aba633'],
			['radial-gradient', '', '#ffbd45', 'darkorange'],
			['radial-gradient', '', '#b1e37a', '#659d29'],
			['linear-gradient', '', '#c71ae5', '#28bdb6'],
			['linear-gradient', 'to right', '#f0f329', '#cb502b'],
			['linear-gradient', '220deg', '#4584d3', '#00ffd0'],
		],
		boardColors: [
			['to top', '#453e56', '#524766'],
			['to top', '#524376', '#54668f'],
			['to right', '#2d7699', '#56388f'],
			['to right', '#45834a', '#256e2a'],
			['to right', '#7e7070', '#625353'],
			['to right', '#9d9999', '#787575'],
		],
		sound: ['on', 'off'],
		clickSounds: [1, 2, 3, 4, 5, 6],
	};

	const [timers, setTimers] = useState(onCreateSetting(settings['timers']));
	const [sizes, setSizes] = useState(onCreateSetting(settings['targetSizes']));
	const [targetColors, setTargetColors] = useState(onCreateSetting(settings['targetColors']));
	const [boardColors, setBoardColors] = useState(onCreateSetting(settings['boardColors']));
	const [soundParams, setSoundParams] = useState(onCreateSetting(settings['sound']));
	const [sounds, setSounds] = useState(onCreateSetting(settings['clickSounds']));

	useEffect(() => {
		onChangeProp(timers, setTimers, timer);
		onChangeProp(sizes, setSizes, targetSize);
		onChangeProp(targetColors, setTargetColors, targetColor);
		onChangeProp(boardColors, setBoardColors, boardColor);
		onChangeProp(soundParams, setSoundParams, sound);
		onChangeProp(sounds, setSounds, clickSound);
	}, []);

	function onCreateSetting(settingValues: StrNum[] | StrNum[][]): Data[] {
		const result = settingValues.map((value) => {
			return { value: value, active: false };
		});
		return result;
	};

	function onChangeProp(settingData: Data[], setData: any, newValue: StrNum | StrNum[]): void {
		const newData = settingData.map(item => {
			if (Array.isArray(item.value)) {
				if (onCompareArrays(item.value, newValue)) {
					return { ...item, ['active']: true };
				};
				return { ...item, ['active']: false };
			} else {
				if (item.value === newValue) {
					return { ...item, ['active']: true };
				};
				return { ...item, ['active']: false };
			};
		});
		setData(newData);
	};

	function onCompareArrays(arr1: any, arr2: any) {
		return arr1.length === arr2.length && arr1.every((elem: StrNum, index: number) => elem === arr2[index])
	};

	return (
		<div className="settings">
			<h1 className='settings__title'>Settings</h1>
			<Timers
				timers={timers}
				setTimers={setTimers}
				onChangeProp={onChangeProp}
				changeTimer={changeTimer}
			/>
			<TargetSizes
				sizes={sizes}
				setSizes={setSizes}
				onChangeProp={onChangeProp}
				changeTargetSize={changeTargetSize}
				targetColor={targetColor}
			/>
			<TargetColors
				targetColors={targetColors}
				setTargetColors={setTargetColors}
				onChangeProp={onChangeProp}
				changeTargetColor={changeTargetColor}
			/>
			<BoardColors
				boardColors={boardColors}
				setBoardColors={setBoardColors}
				onChangeProp={onChangeProp}
				changeBoardColor={changeBoardColor}
			/>
			<SoundSwitcher
				soundParams={soundParams}
				setSoundParams={setSoundParams}
				onChangeProp={onChangeProp}
				turnTheSound={turnTheSound}
			/>
			<ClickSounds
				sounds={sounds}
				setSounds={setSounds}
				onChangeProp={onChangeProp}
				changeClickSound={changeClickSound}
			/>

			<button
				className='settings__back'
				onClick={() => laucnhMain()}
			>
				Back</button>
		</div>
	);
};

const mapStateToProps = ({ settings: { timer, targetSize, targetColor, boardColor, clickSound, sound } }: Settings) => {
	return { timer, targetSize, targetColor, boardColor, clickSound, sound };
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		laucnhMain: () => dispatch(onLaucnhMain()),
		changeTimer: (value: StrNum | StrNum[]) => dispatch(onChangeTimer(value)),
		changeTargetSize: (value: StrNum | StrNum[]) => dispatch(onChangeTargetSize(value)),
		changeTargetColor: (value: StrNum | StrNum[]) => dispatch(onChangeTargetColor(value)),
		changeBoardColor: (value: StrNum | StrNum[]) => dispatch(onChangeBoardColor(value)),
		turnTheSound: (value: StrNum | StrNum[]) => dispatch(onTurnTheSound(value)),
		changeClickSound: (value: StrNum | StrNum[]) => dispatch(onChangeClickSound(value)),
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps)
)(SettingsWindow);