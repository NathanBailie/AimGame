import './gameWindow.scss';
import sound from '../../resources/sounds/click/sound.mp3';
import sound1 from '../../resources/sounds/click/sound1.mp3';
import sound2 from '../../resources/sounds/click/sound2.mp3';
import sound3 from '../../resources/sounds/click/sound3.mp3';
import sound4 from '../../resources/sounds/click/sound4.mp3';
import sound5 from '../../resources/sounds/click/sound5.mp3';
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
	clickSound: number,
	sound: string,
}

const Game: React.FC<Props> = ({ addHit, targetSize, targetColor, boardColor, laucnhSettings, laucnhGame, closeGame, clickSound, sound }) => {
	const [xPos, setXPos] = useState<number | undefined>();
	const [yPos, setYPos] = useState<number | undefined>();
	const boardSize = 500; // width & height
	const circleSize = targetSize; // width & height
	const [color1, color2]: any = targetColor;
	const allSounds = [sound, sound1, sound2, sound3, sound4, sound5];


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

	function onPlaySound() {
		let audio = new Audio(allSounds[clickSound - 1]);
		audio.autoplay = true;
		audio.volume = 0.5;
		audio.play();
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
						{ sound === 'on' && onPlaySound() }
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

const mapStateToProps = ({ settings: { timer, targetSize, targetColor, boardColor, clickSound, sound } }: Settings) => {
	return { timer, targetSize, targetColor, boardColor, clickSound, sound };
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