import 'normalize.css';
import './app.scss';
import { useState } from 'react';
import Greeting from '../Greeting/Greeeting';


const App: React.FC = () => {
	const [start, setStart] = useState<boolean>(false);


	return (
		<div className="app">
			{!start &&
				<Greeting setStart={setStart} />}
		</div>
	);
};

export default App;
