import './targetSizes.scss';
import { Data } from '../../../interfaces';
import { StrNum } from '../../../types';

type Props = {
	sizes: Data[],
	setSizes: (value: Data[]) => void,
	onChangeProp: (settingData: Data[], setData: any, newValue: StrNum | StrNum[]) => void
	changeTargetSize: (value: StrNum | StrNum[]) => void,
	targetColor: StrNum[];
};


const TargetSizes: React.FC<Props> = ({ sizes, setSizes, onChangeProp, changeTargetSize, targetColor }) => {
	const [color1, color2]: any = targetColor;
	const result = sizes.map((item: Data, index) => {
		const { value, active } = item;
		let classes = 'targetSizes__ballWraper';
		if (active) {
			classes += ' targetSizes__ballWraper_active';
		};

		return (
			<div
				key={index}
				className={classes}
				onClick={() => { changeTargetSize(value); onChangeProp(sizes, setSizes, value) }}
			>
				<div
					className={'targetSizes__ball'}
					style={{ height: `${value}px`, width: `${value}px`, background: `radial-gradient(${color1}, ${color2})` }}
				>
				</div>
			</div>
		);
	});

	return (
		<div className="targetSizes">
			<h2>Size:</h2>
			<div className="targetSizes__wraper">
				{result}
			</div>
		</div>
	);
};

export default TargetSizes;