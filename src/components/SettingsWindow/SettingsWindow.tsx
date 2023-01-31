import './settingsWindow.scss';
import { useState, useEffect } from 'react';
import Timers from './Timers/Timers';
import TargetSizes from './TargetSizes/TargetSizes';
import uuid from 'react-uuid';
import compose from '../../utils/compose';
import { connect } from 'react-redux';
import { onLaucnhMain, onChangeTimer, onChangeTargetSize } from '../../actions/actions';
import { Settings, Data } from '../../interfaces';
import { StrNum } from '../../types';

type Props = {
	laucnhMain: () => void,
	changeTimer: (value: StrNum) => void,
	timer: number,
	changeTargetSize: (value: StrNum) => void,
	targetSize: number,
};

const SettingsWindow: React.FC<Props> = ({ laucnhMain, changeTimer, timer, changeTargetSize, targetSize }) => {
	const [timers, setTimers] = useState(onCreateSetting([10, 20, 30, 40, 50, 60]));
	const [sizes, setSizes] = useState(onCreateSetting([15, 20, 25, 30, 35, 40]));

	useEffect(() => {
		onChangeProp(timers, setTimers, timer);
		onChangeProp(sizes, setSizes, targetSize);
	}, []);

	function onCreateSetting(settingValues: StrNum[]): Data[] {
		const result = settingValues.map((value, index) => {
			return { value: value, active: false };
		});
		return result;
	};

	function onChangeProp(settingData: Data[], setData: any, newValue: StrNum): void {
		const newData = settingData.map(item => {
			if (item.value === newValue) {
				return { ...item, ['active']: true };
			}
			return { ...item, ['active']: false };
		});
		setData(newData);
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
			/>
			<button
				className='settings__back'
				onClick={() => laucnhMain()}
			>
				Back</button>
		</div>
	);
};

const mapStateToProps = ({ settings: { timer, targetSize } }: Settings) => {
	return { timer, targetSize };
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		laucnhMain: () => dispatch(onLaucnhMain()),
		changeTimer: (value: StrNum) => dispatch(onChangeTimer(value)),
		changeTargetSize: (value: StrNum) => dispatch(onChangeTargetSize(value)),
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps)
)(SettingsWindow);