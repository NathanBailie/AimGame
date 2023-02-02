import './soundSwitcher.scss';
import { Data } from '../../../interfaces';
import { StrNum } from '../../../types';

type Props = {
	soundParams: Data[],
	setSoundParams: (value: Data[]) => void,
	onChangeProp: (settingData: Data[], setData: any, newValue: StrNum | StrNum[]) => void
	turnTheSound: (value: StrNum | StrNum[]) => void,
};

const SoundSwitcher: React.FC<Props> = ({ soundParams, setSoundParams, onChangeProp, turnTheSound }) => {
	const result = soundParams.map((item: Data, index) => {
		const { value, active } = item;

		let classes = 'soundSwitcher__itemWraper';
		if (active) {
			classes += ' soundSwitcher__itemWraper_active';
		};

		return (
			<div
				key={index}
				className={classes}
				onClick={() => { turnTheSound(value); onChangeProp(soundParams, setSoundParams, value) }}
			>
				{value}
			</div>
		);
	});


	return (
		<div className="soundSwitcher">
			<h2>Board color: </h2>
			<div className="soundSwitcher__wraper">
				{result}
			</div>
		</div>
	);
};

export default SoundSwitcher;