import './settings.scss';
import { useState } from 'react';
import uuid from 'react-uuid';

type Props = {
	setSettings: (value: boolean) => void,
	setTime: (value: number) => void,
	time: number,
};

const Settings: React.FC<Props> = ({ setSettings, setTime, time }) => {
	const timers = [
		{ count: 10, id: uuid(), active: true },
		{ count: 20, id: uuid(), active: false },
		{ count: 30, id: uuid(), active: false },
		{ count: 40, id: uuid(), active: false },
		{ count: 50, id: uuid(), active: false },
		{ count: 60, id: uuid(), active: false },
	];
	const [data, setData] = useState(timers);

	// useEffect(() => {
	// 	onInspectData(time);
	// }, []);

	const timersResult = data.map(item => {
		const { count, id, active } = item;
		let classes = 'settings__timeSetting';
		if (active) {
			classes += ' settings__timeSetting_active';
		};

		return (
			<li
				key={id}
				onClick={() => { setTime(10); onChangeProp(id) }}
				className={classes}
			>
				{`${count}s`}
			</li>
		);
	});

	function onChangeProp(id: string): void {
		const newData = data.map(item => {
			if (item.id === id) {
				return { ...item, ['active']: true };
			}
			return { ...item, ['active']: false };
		});
		setData(newData);
	};

	// function onInspectData(value: number): void {
	// 	const newData = data.map(item => {
	// 		if (item.count === time) {
	// 			return { ...item, active: true };
	// 		};
	// 		return item;
	// 	});
	// 	setData(newData);
	// };


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
				onClick={() => setSettings(false)}
			>
				Back</button>
		</div>
	);
};

export default Settings;