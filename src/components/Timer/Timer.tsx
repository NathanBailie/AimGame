import './timer.scss';
import { useState, useEffect, useRef } from 'react';
import compose from '../../utils/compose';
import { connect } from 'react-redux';
import { onLaucnhResults } from '../../actions/actions';

type Props = {
	timer: number,
	launchResults: () => void,
};

const Timer: React.FC<Props> = ({ timer, launchResults }) => {
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(timer);
	const timerID: { current: any } = useRef();

	useEffect(() => {
		timerID.current = setInterval(() => tick(), 1000)
	}, []);

	useEffect(() => {
		if (minutes === 0 && seconds === 0) {
			clearInterval(timerID.current);
			launchResults();
		} else if (minutes !== 0 && seconds === 0) {
			setSeconds(59);
			setMinutes((minutes) => minutes - 1);
		}
	}, [seconds]);

	function tick() {
		setSeconds((s) => s - 1)
	};


	return (
		<div className="timer">
			<p>{
				`${minutes < 10 ? `0${minutes}` : minutes} 
				: 
				${seconds < 10 ? `0${seconds}` : seconds}`
			}</p>
		</div>
	);
};

const mapStateToProps = ({ settings: { timer } }: any) => {
	return { timer };
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		launchResults: () => dispatch(onLaucnhResults()),
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps)
)(Timer);