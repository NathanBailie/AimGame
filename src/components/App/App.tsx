import 'normalize.css';
import './app.scss';
import { useState } from 'react';
import Greeting from '../Greeting/Greeeting';
import Game from '../Game/Game';
import Results from '../Results/Results';


const App: React.FC = () => {
	const [start, setStart] = useState<boolean>(false);
	const [finished, setFinished] = useState<boolean>(false);
	const [hits, setHits] = useState<number>(0);

	return (
		<div className="app">
			{!start &&
				<Greeting
					setStart={setStart}
				/>}
			{start && !finished && <Game
				setFinished={setFinished}
				setHits={setHits}
			/>}
			{finished && <Results
				hits={hits}
			/>}
		</div>
	);
};

export default App;
