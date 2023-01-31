import './timers.scss';
import { Data } from '../../../interfaces';
import { StrNum } from '../../../types';

type Props = {
	timers: Data[],
	setTimers: (value: Data[]) => void,
	onChangeProp: (settingData: Data[], setData: any, newValue: StrNum) => void
	changeTimer: (value: StrNum) => void,
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