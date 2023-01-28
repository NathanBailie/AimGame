import './timer.scss';
import { useState, useEffect, useRef } from 'react';

type Props = {
	setFinished: (value: boolean) => void,
	time: number,
}

const Timer: React.FC<Props> = ({ setFinished, time }) => {
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(time);
	const timerID: { current: any } | undefined = useRef();

	useEffect(() => {
		timerID.current = setInterval(() => tick(), 1000)
	}, []);

	useEffect(() => {
		if (minutes === 0 && seconds === 0) {
			clearInterval(timerID.current);
			setFinished(true);
		} else if (minutes !== 0 && seconds === 0) {
			setSeconds(59);
			setMinutes((minutes) => minutes - 1)
		}

	}, [seconds]);

	function tick() {
		setSeconds((s) => s - 1)
	};


	return (
		<div className="timer">
			<p>{`${minutes} : ${seconds}`}</p>
		</div>
	);
};

export default Timer;