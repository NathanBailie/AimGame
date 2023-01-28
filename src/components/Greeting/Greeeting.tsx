import './greeting.scss';

type Props = {
	setStart: (value: boolean) => void
	setSettings: (value: boolean) => void
}

const Greeting: React.FC<Props> = ({ setStart, setSettings }) => {


	return (
		<div className="greeting">
			<h1 className='greeting__title'>Aim Training</h1>
			<div className="greeting__wraper">
				<button
					className='greeting__finish'
					onClick={() => setSettings(true)}
				>Settings</button>
				<button
					className='greeting__start'
					onClick={() => setStart(true)}
				>Start</button>
			</div>
		</div>
	);
};

export default Greeting;