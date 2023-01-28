import 'normalize.css';
import './app.scss';
import { useState } from 'react';
import Greeting from '../Greeting/Greeeting';
import Game from '../Game/Game';
import Results from '../Results/Results';
import Settings from '../Settings/Settings';


const App: React.FC = () => {
	const [start, setStart] = useState<boolean>(false);
	const [finished, setFinished] = useState<boolean>(false);
	const [settings, setSettings] = useState<boolean>(false);
	const [hits, setHits] = useState<number>(0);

	// settings
	const [time, setTime] = useState<number>(10);


	return (
		<div className="app">
			{!start && !settings &&
				<Greeting
					setStart={setStart}
					setSettings={setSettings}
				/>}
			{settings &&
				<Settings
					setSettings={setSettings}
					setTime={setTime}
					time={time}
				/>}
			{start && !finished && <Game
				setFinished={setFinished}
				setHits={setHits}
				time={time}
			/>}
			{finished && <Results
				hits={hits}
			/>}
		</div>
	);
};

export default App;
