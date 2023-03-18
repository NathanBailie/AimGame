import './resultsWindow.scss';
import compose from '../../utils/compose';
import { connect } from 'react-redux';
import { Results } from '../../interfaces';
import { onLaucnhSettings, onLaucnhGame } from '../../actions/actions';


type Props = {
	hits: number,
	missclicks: number,
	accuracy: number,
	laucnhSettings: () => void,
	laucnhGame: () => void,
};


const ResultsWindow: React.FC<Props> = ({ hits, missclicks, accuracy, laucnhSettings, laucnhGame }) => {
	return (
		<div className="results">
			<div className="results__score">
				<div className="results__result">
					<p>Score:</p>
					<span>{hits}</span>
				</div>
				<div className="results__result">
					<p>Missclicks:</p>
					<span>{missclicks}</span>
				</div>
				<div className="results__result">
					<p>Accuracy:</p>
					<span>{`${Math.round(accuracy)}%`}</span>
				</div>
			</div>

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
	{ results: { hits, missclicks, accuracy } }: Results,
) => {
	return { hits, missclicks, accuracy };
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