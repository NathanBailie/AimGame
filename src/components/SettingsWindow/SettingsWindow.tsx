import './settingsWindow.scss';
import Timers from '../Settings/Timers/Timers';
import TargetSizes from '../Settings/TargetSizes/TargetSizes';
import TargetColors from '../Settings/TargetColors/TargetColors';
import BoardColors from '../Settings/BoardColors/BoardColors';
import { useState, useEffect } from 'react';
import compose from '../../utils/compose';
import { connect } from 'react-redux';
import { onLaucnhMain, onChangeTimer, onChangeTargetSize, onChangeTargetColor, onChangeBoardColor } from '../../actions/actions';
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
};

const SettingsWindow: React.FC<Props> = ({ laucnhMain, changeTimer, timer, changeTargetSize, targetSize, changeTargetColor, targetColor, changeBoardColor, boardColor }) => {
	const settings = {
		timers: [10, 20, 30, 40, 50, 60],
		targetSizes: [15, 20, 25, 30, 35, 40],
		targetColors: [
			['#f9f798', '#aba633'],
			['#80db83', '#4c870d'],
			['#f1a091', '#d13a20'],
			['#ffbd45', 'darkorange'],
			['#ca88db', '#7a0a8f'],
			['#9e9ae9', 'blue'],
		],
		boardColors: ['#749599', '#7e8095', '#596878', '#95927c', '#5b8d5f', '#a39584'],
	};


	const [timers, setTimers] = useState(onCreateSetting(settings['timers']));
	const [sizes, setSizes] = useState(onCreateSetting(settings['targetSizes']));
	const [targetColors, setTargetColors] = useState(onCreateSetting(settings['targetColors']));
	const [boardColors, setBoardColors] = useState(onCreateSetting(settings['boardColors']));

	useEffect(() => {
		onChangeProp(timers, setTimers, timer);
		onChangeProp(sizes, setSizes, targetSize);
		onChangeProp(targetColors, setTargetColors, targetColor);
		onChangeProp(boardColors, setBoardColors, boardColor);
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

			<button
				className='settings__back'
				onClick={() => laucnhMain()}
			>
				Back</button>
		</div>
	);
};

const mapStateToProps = ({ settings: { timer, targetSize, targetColor, boardColor } }: Settings) => {
	return { timer, targetSize, targetColor, boardColor };
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		laucnhMain: () => dispatch(onLaucnhMain()),
		changeTimer: (value: StrNum | StrNum[]) => dispatch(onChangeTimer(value)),
		changeTargetSize: (value: StrNum | StrNum[]) => dispatch(onChangeTargetSize(value)),
		changeTargetColor: (value: StrNum | StrNum[]) => dispatch(onChangeTargetColor(value)),
		changeBoardColor: (value: StrNum | StrNum[]) => dispatch(onChangeBoardColor(value)),
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps)
)(SettingsWindow);