import './greeting.scss';

type Props = {
	setStart: (value: boolean) => void
}

const Greeting: React.FC<Props> = ({ setStart }) => {


	return (
		<div className="greeting">
			<h1 className='greeting__title'>Aim Training</h1>
			<button
				className='greeting__start'
				onClick={() => setStart(true)}
			>Start</button>
		</div>
	);
};

export default Greeting;