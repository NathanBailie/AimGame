import './game.scss';
import Timer from '../Timer/Timer';
import { useState, useEffect } from 'react';

type Props = {
	setFinished: (value: boolean) => void,
	setHits: (value: any) => void,
}

const Game: React.FC<Props> = ({ setFinished, setHits }) => {
	const [xPos, setXPos] = useState<number | undefined>();
	const [yPos, setYPos] = useState<number | undefined>();
	const boardSize = 500; // width & height
	const circleSize = 30; // width & height


	useEffect(() => {
		onSetCirclePosition();
	}, []);

	function onSetCirclePosition(): void {
		setXPos(getRandomInt(0, boardSize - circleSize - 5));
		setYPos(getRandomInt(0, boardSize - circleSize - 5));
	};


	function getRandomInt(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	return (
		<div className="game">
			<div className="game__timer">
				<Timer
					setFinished={setFinished}
				/>
			</div>
			<div
				className="game__board"
				style={{
					width: `${boardSize}px`,
					height: `${boardSize}px`,
				}}
			>
				<div
					className="game__circle"
					style={{
						width: `${circleSize}px`,
						height: `${circleSize}px`,
						top: `${xPos}px`, left: `${yPos}px`
					}}
					onClick={(e) => {
						onSetCirclePosition();
						setHits((value: any) => value + 1)
					}}
				></div>
			</div>
		</div >
	);
};

export default Game;