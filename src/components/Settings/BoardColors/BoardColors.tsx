import './boardColors.scss';
import { Data } from '../../../interfaces';
import { StrNum } from '../../../types';

type Props = {
	boardColors: Data[],
	setBoardColors: (value: Data[]) => void,
	onChangeProp: (settingData: Data[], setData: any, newValue: StrNum | StrNum[]) => void
	changeBoardColor: (value: StrNum | StrNum[]) => void,
};

const BoardColors: React.FC<Props> = ({ boardColors, setBoardColors, onChangeProp, changeBoardColor }) => {
	const result = boardColors.map((item: Data, index) => {
		const { value, active } = item;
		const [dir, color1, color2]: any = value;

		let classes = 'boardColors__itemWraper';
		if (active) {
			classes += ' boardColors__itemWraper_active';
		};

		return (
			<div
				key={index}
				className={classes}
				onClick={() => { changeBoardColor(value); onChangeProp(boardColors, setBoardColors, value) }}
			>
				<div
					className={'boardColors__boardColor'}
					style={{ background: `linear-gradient(${dir}, ${color1}, ${color2})` }}
				>
				</div>
			</div >
		);
	});

	return (
		<div className="boardColors">
			<h2>Board color: </h2>
			<div className="boardColors__wraper">
				{result}
			</div>
		</div>
	);
};

export default BoardColors;