import './gameWindow.scss';
import Timer from '../Timer/Timer';
import { useState, useEffect } from 'react';
import compose from '../../utils/compose';
import { connect } from 'react-redux';
import { onAddHit, onLaucnhSettings, onLaucnhGame, onCloseGame } from '../../actions/actions';
import { Settings } from '../../interfaces';
import { StrNum } from '../../types';

type Props = {
	addHit: () => void,
	targetSize: number,
	targetColor: StrNum[],
	boardColor: string,
	laucnhSettings: () => void,
	laucnhGame: () => void,
	closeGame: () => void,
}

const Game: React.FC<Props> = ({ addHit, targetSize, targetColor, boardColor, laucnhSettings, laucnhGame, closeGame }) => {
	const [xPos, setXPos] = useState<number | undefined>();
	const [yPos, setYPos] = useState<number | undefined>();
	const boardSize = 500; // width & height
	const circleSize = targetSize; // width & height
	const [color1, color2]: any = targetColor;

	useEffect(() => {
		onSetCirclePosition();
	}, []);

	function onSetCirclePosition(): void {
		setXPos(getRandomInt(0, boardSize - circleSize - 5));
		setYPos(getRandomInt(0, boardSize - circleSize - 5));
	};

	function getRandomInt(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	return (
		<div className="game">
			<div className="game__timer">
				<Timer />
			</div>
			<div
				className="game__board"
				style={{
					width: `${boardSize}px`,
					height: `${boardSize}px`,
					background: `${boardColor}`
				}}
			>
				<div
					className="game__circle"
					style={{
						width: `${circleSize}px`,
						height: `${circleSize}px`,
						top: `${xPos}px`, left: `${yPos}px`,
						background: `radial-gradient(${color1}, ${color2})`
					}}
					onClick={(e) => {
						onSetCirclePosition();
						addHit();
					}}
				></div>
			</div>
			<div className="game__wraper">
				<button
					className='game__button'
					onClick={() => laucnhSettings()}
				>Settings</button>
				<button
					className='game__button'
					onClick={() => { closeGame(); setTimeout(() => { laucnhGame() }, 0) }}
				>Restart</button>
			</div>
		</div >
	);
};

const mapStateToProps = ({ settings: { timer, targetSize, targetColor, boardColor } }: Settings) => {
	return { timer, targetSize, targetColor, boardColor };
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		addHit: () => dispatch(onAddHit()),
		laucnhSettings: () => dispatch(onLaucnhSettings()),
		laucnhGame: () => dispatch(onLaucnhGame()),
		closeGame: () => dispatch(onCloseGame()),
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps)
)(Game);