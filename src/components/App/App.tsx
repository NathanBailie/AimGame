import 'normalize.css';
import './app.scss';
import { useState } from 'react';
import GreetingWindow from '../GreetingWindow/GreeetingWindow';
import GameWindow from '../Game/Game';
import ResultsWindow from '../ResultsWindow/ResultsWindow';
import SettingsWindow from '../SettingsWindow/SettingsWindow';
import compose from '../../utils/compose';
import { connect } from 'react-redux';
import { Windows } from '../../interfaces';


interface Props extends Windows {
	launchGame: () => void,
};

const App: React.FC<Props> = ({ windows }) => {
	const { greetings, game, setting, results } = windows;


	return (
		<div className="app">
			{greetings && <GreetingWindow />}
			{game && <GameWindow />}
			{setting && <SettingsWindow />}
			{results && <ResultsWindow />}
		</div>
	);
};

const mapStateToProps = (
	{ windows }: Windows,
) => {
	return { windows };
};

export default compose(
	connect(mapStateToProps)
)(App);
