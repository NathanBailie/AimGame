import './gameWindow.scss';
import sound1 from '../../resources/sounds/click/sound1.mp3';
import sound2 from '../../resources/sounds/click/sound2.mp3';
import sound3 from '../../resources/sounds/click/sound3.mp3';
import sound4 from '../../resources/sounds/click/sound4.mp3';
import sound5 from '../../resources/sounds/click/sound5.mp3';
import sound6 from '../../resources/sounds/click/sound6.mp3';
import missclick from '../../resources/sounds/missclick/missclick.mp3';
import Timer from '../Timer/Timer';
import { useState } from 'react';
import uuid from 'react-uuid';
import compose from '../../utils/compose';
import { connect } from 'react-redux';
import { onAddHit, onAddMissclick, onLaucnhSettings, onLaucnhGame, onCloseGame } from '../../actions/actions';
import { Settings } from '../../interfaces';


type Props = {
	addHit: () => void,
	addMissclick: () => void,
	targetSize: number,
	targetColor: string[],
	boardColor: string,
	laucnhSettings: () => void,
	laucnhGame: () => void,
	closeGame: () => void,
	clickSound: number,
	sound: string,
};

type Ball = {
	targetClassName: string,
	id: string,
	size: string,
	top: string,
	left: string,
	background: string,
};

const Game: React.FC<Props> = ({ addHit, addMissclick, targetSize, targetColor, boardColor, laucnhSettings, laucnhGame, closeGame, clickSound, sound }) => {
	const boardSize = 500; // width & height
	const circleSize = targetSize; // width & height
	const allSounds = [sound1, sound2, sound3, sound4, sound5, sound6];
	const [dir, boardColor1, boardColor2]: any = boardColor;
	const [tarGradient, tarDir, tarColor1, tarColor2] = targetColor;
	const [targets, setTargets] = useState([onGenerateTarget()]);

	function onGenerateTarget(): Ball {
		return {
			targetClassName: 'game__circle',
			id: uuid(),
			size: `${circleSize}px`,
			top: `${getRandomInt(0, boardSize - circleSize - 5)}px`,
			left: `${getRandomInt(0, boardSize - circleSize - 5)}px`,
			background: `${tarGradient}(${tarDir && tarDir.length !== 0 && `${tarDir},`} ${tarColor1}, ${tarColor2})`
		};
	};

	function onDeleteTarget(id: string): void {
		const newTargets = targets.filter(item => item.id !== id);
		setTargets(newTargets);
	};

	function onCreateTarget(): void {
		setTargets(i => [...i, onGenerateTarget()]);
	};

	const result = targets.map(item => {
		const { targetClassName, id, size, top, left, background } = item;
		return (
			<div
				className={targetClassName}
				key={id}
				style={{
					width: size,
					height: size,
					top: top,
					left: left,
					background: background,
				}}
				onClick={(e) => { onDeleteTarget(id); onCreateTarget() }}
			></div>
		);
	});


	function getRandomInt(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	function onPlaySound(file: any) {
		let audio = new Audio(file);
		audio.autoplay = true;
		audio.volume = 0.5;
		audio.play();
	};

	function onCheckTarget(e: any): void {
		const target = e.target as HTMLElement;
		if (target.className === 'game__board') {
			addMissclick()
			{ sound === 'on' && onPlaySound(missclick) }
		} else if (target.className === 'game__circle') {
			addHit();
			{ sound === 'on' && onPlaySound(allSounds[clickSound - 1]) }
		};
	};

	return (
		<div className="game">
			<div className="game__timer">
				<Timer />
			</div>
			<div
				className="game__board"
				style={{
					width: `${boardSize + boardSize * 0.4}px`,
					height: `${boardSize}px`,
					background: `linear-gradient(${dir}, ${boardColor1}, ${boardColor2})`
				}}
				onClick={(e) => onCheckTarget(e)}
			>
				{result}
			</div>
			<button
				className='game__button game__button_settings'
				onClick={() => laucnhSettings()}
			>Settings</button>
			<button
				className='game__button game__button_restart'
				onClick={() => { closeGame(); setTimeout(() => { laucnhGame() }, 0) }}
			>Restart</button>
		</div >
	);
};

const mapStateToProps = ({ settings: { timer, targetSize, targetColor, boardColor, clickSound, sound } }: Settings) => {
	return { timer, targetSize, targetColor, boardColor, clickSound, sound };
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		addHit: () => dispatch(onAddHit()),
		addMissclick: () => dispatch(onAddMissclick()),
		laucnhSettings: () => dispatch(onLaucnhSettings()),
		laucnhGame: () => dispatch(onLaucnhGame()),
		closeGame: () => dispatch(onCloseGame()),
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps)
)(Game);