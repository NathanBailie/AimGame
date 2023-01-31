import './settingsWindow.scss';
import { useState, useEffect } from 'react';
import Timers from './Timers/Timers';
import uuid from 'react-uuid';
import compose from '../../utils/compose';
import { connect } from 'react-redux';
import { onLaucnhMain, onChangeTimer } from '../../actions/actions';
import { Settings, Data } from '../../interfaces';
import { StrNum } from '../../types';

type Props = {
	laucnhMain: () => void,
	changeTimer: (value: StrNum) => void,
	timer: number,
};

const SettingsWindow: React.FC<Props> = ({ laucnhMain, changeTimer, timer }) => {
	const [timers, setTimers] = useState(onCreateSetting([10, 20, 30, 40, 50, 60]));

	useEffect(() => {
		onChangeProp(timers, setTimers, timer);
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
			<button
				className='settings__back'
				onClick={() => laucnhMain()}
			>
				Back</button>
		</div>
	);
};

const mapStateToProps = ({ settings: { timer } }: Settings) => {
	return { timer };
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		laucnhMain: () => dispatch(onLaucnhMain()),
		changeTimer: (value: StrNum) => dispatch(onChangeTimer(value)),
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps)
)(SettingsWindow);