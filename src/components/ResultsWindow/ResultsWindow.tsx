import './resultsWindow.scss';
import compose from '../../utils/compose';
import { connect } from 'react-redux';
import { Results } from '../../interfaces';
import { onLaucnhSettings, onLaucnhGame } from '../../actions/actions';

type Props = {
	hits: number,
	laucnhSettings: () => void,
	laucnhGame: () => void,
};

const ResultsWindow: React.FC<Props> = ({ hits, laucnhSettings, laucnhGame }) => {
	return (
		<div className="results">
			<p className='results__score'>
				Your score: <span>&nbsp;{hits}</span>
			</p>
			<div className="results__wraper">
				<button
					className='results__button'
					onClick={() => laucnhSettings()}
				>Settings</button>
				<button
					className='results__button'
					onClick={() => laucnhGame()}
				>Restart</button>
			</div>
		</div>
	);
};

const mapStateToProps = (
	{ results: { hits } }: Results,
) => {
	return { hits };
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		laucnhSettings: () => dispatch(onLaucnhSettings()),
		laucnhGame: () => dispatch(onLaucnhGame()),
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps)
)(ResultsWindow);