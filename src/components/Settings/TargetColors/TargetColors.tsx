import './targetColors.scss';
import { Data } from '../../../interfaces';
import { StrNum } from '../../../types';


type Props = {
	targetColors: Data[],
	setTargetColors: (value: Data[]) => void,
	onChangeProp: (settingData: Data[], setData: any, newValue: StrNum | StrNum[]) => void
	changeTargetColor: (value: StrNum | StrNum[]) => void,
};


const TargetColors: React.FC<Props> = ({ targetColors, setTargetColors, onChangeProp, changeTargetColor }) => {
	const result = targetColors.map((item: Data, index) => {
		const { value, active } = item;
		const [gradient, dir, color1, color2]: any = value;
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
					className={'targetColor__ball'}
					style={{ background: `${gradient}(${dir && dir.length !== 0 && `${dir},`} ${color1}, ${color2})` }}
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

export default TargetColors;