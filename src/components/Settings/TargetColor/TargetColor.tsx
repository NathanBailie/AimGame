import './targetColor.scss';
import { Data } from '../../../interfaces';
import { StrNum } from '../../../types';

type Props = {
	targetColors: Data[],
	setTargetColors: (value: Data[]) => void,
	onChangeProp: (settingData: Data[], setData: any, newValue: StrNum | StrNum[]) => void
	changeTargetColor: (value: StrNum | StrNum[]) => void,
	targetSize: StrNum,
};

const TargetColor: React.FC<Props> = ({ targetColors, setTargetColors, onChangeProp, changeTargetColor, targetSize }) => {
	const result = targetColors.map((item: Data, index) => {
		const { value, active } = item;
		console.log(value)
		const [color1, color2]: any = value;
		let classes = 'targetColor__ballWraper';
		if (active) {
			classes += ' targetColor__ballWraper_active';
		};

		return (
			<div
				key={index}
				className={classes}
				onClick={() => { changeTargetColor(value); onChangeProp(targetColors, setTargetColors, value) }}
			>
				<div
					className={'targetSizes__ball'}
					style={{ height: `${targetSize}px`, width: `${targetSize}px`, background: `radial-gradient(${color1}, ${color2})` }}
				>
				</div>
			</div>
		);
	});
	return (
		<div className="targetColor">
			<h2>Ball color: </h2>
			<div className="targetColor__wraper">
				{result}
			</div>
		</div>
	);
};

export default TargetColor;