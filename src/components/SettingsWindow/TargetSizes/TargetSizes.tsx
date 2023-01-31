import './targetSizes.scss';
import { Data } from '../../../interfaces';
import { StrNum } from '../../../types';

type Props = {
	sizes: Data[],
	setSizes: (value: Data[]) => void,
	onChangeProp: (settingData: Data[], setData: any, newValue: StrNum) => void
	changeTargetSize: (value: StrNum) => void,
};


const TargetSizes: React.FC<Props> = ({ sizes, setSizes, onChangeProp, changeTargetSize }) => {
	const result = sizes.map((item: Data, index) => {
		const { value, active } = item;
		let classes = 'targetSizes__ballWraper';
		if (active) {
			classes += ' targetSizes__ballWraper_active';
		};

		return (
			<div
				className={classes}
				onClick={() => { changeTargetSize(value); onChangeProp(sizes, setSizes, value) }}
			>
				<div
					key={index}
					className={'targetSizes__ball'}
					style={{ height: value, width: value, background: `radial-gradient(${'#9e9ae9'}, ${'blue'})` }}
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