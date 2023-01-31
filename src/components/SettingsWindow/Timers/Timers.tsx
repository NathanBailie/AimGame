import './timers.scss';
import { Data } from '../../../interfaces';
import { StrNum } from '../../../types';

type Props = {
	timers: Data[],
	setTimers: (value: Data[]) => void,
	onChangeProp: (settingData: Data[], setData: any, newValue: StrNum) => void
	changeTimer: (value: string | number) => void,
};

const Timers: React.FC<Props> = ({ timers, setTimers, onChangeProp, changeTimer }) => {
	const result = timers.map((item: Data, index) => {
		const { value, active } = item;
		let classes = 'timers__value';
		if (active) {
			classes += ' timers__value_active';
		};

		return (
			<li
				key={index}
				onClick={() => { changeTimer(value); onChangeProp(timers, setTimers, value) }}
				className={classes}
			>
				{`${value}s`}
			</li>
		);
	});
	// function onCreateResult(
	// 	settingData: Data[],
	// 	setData: any,
	// 	reduxAction: any,
	// 	class1: string,
	// 	activeClass: string,
	// ): any {
	// 	const result = settingData.map((item: Data, index) => {
	// 		const { value, active } = item;
	// 		let classes = class1;
	// 		if (active) {
	// 			classes += ` ${activeClass}`;
	// 		};
	// 		return (
	// 			<li
	// 				key={index}
	// 				onClick={() => { reduxAction(value); onChangeProp(settingData, setData, value) }}
	// 				className={classes}
	// 			>
	// 				{`${value}s`}
	// 			</li>
	// 		)
	// 	});
	// 	return result;
	// };
	// const timerSetting = onCreateResult(timers, setTimers, changeTimer, 'settings__timeSetting', ' settings__timeSetting_active');


	return (
		<div className="timers">
			<h2>Time: </h2>
			<ul className='timers__timelist'>
				{result}
			</ul>
		</div>
	);
};

export default Timers;