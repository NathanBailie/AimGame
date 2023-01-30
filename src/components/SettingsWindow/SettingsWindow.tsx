import './settingsWindow.scss';
import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import compose from '../../utils/compose';
import { connect } from 'react-redux';
import { onLaucnhMain, onChageTimer } from '../../actions/actions';
import { Settings } from '../../interfaces';

interface Props {
	laucnhMain: () => void,
	changeTimer: (count: number) => void,
	timer: number,
};

const SettingsWindow: React.FC<Props> = ({ laucnhMain, changeTimer, timer }) => {
	const timers = [
		{ count: 10, id: uuid(), active: true },
		{ count: 20, id: uuid(), active: false },
		{ count: 30, id: uuid(), active: false },
		{ count: 40, id: uuid(), active: false },
		{ count: 50, id: uuid(), active: false },
		{ count: 60, id: uuid(), active: false },
	];
	const [data, setData] = useState(timers);

	useEffect(() => {
		onChangeProp(timer);
	}, []);

	const timersResult = data.map(item => {
		const { count, id, active } = item;
		let classes = 'settings__timeSetting';
		if (active) {
			classes += ' settings__timeSetting_active';
		};

		return (
			<li
				key={id}
				onClick={() => { changeTimer(count); onChangeProp(count) }}
				className={classes}
			>
				{`${count}s`}
			</li>
		);
	});

	function onChangeProp(count: number): void {
		const newData = data.map(item => {
			if (item.count === count) {
				return { ...item, ['active']: true };
			}
			return { ...item, ['active']: false };
		});
		setData(newData);
	};


	return (
		<div className="settings">
			<h1
				className='settings__title'
			>Settings</h1>
			<div className="settings__time">
				<h2>Time: </h2>
				<ul className='settings__timelist'>
					{timersResult}
				</ul>
			</div>
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
		changeTimer: (timer: number) => dispatch(onChageTimer(timer)),
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps)
)(SettingsWindow);