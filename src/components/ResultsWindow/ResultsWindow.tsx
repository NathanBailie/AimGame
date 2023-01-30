import './resultsWindow.scss';
import compose from '../../utils/compose';
import { connect } from 'react-redux';
import { Results } from '../../interfaces';

type Props = {
	hits: number,
};

const ResultsWindow: React.FC<Props> = ({ hits }) => {
	return (
		<div className="results">
			<p className='results__score'>
				Your score: <span>{hits}</span>
			</p>
		</div>
	);
};

const mapStateToProps = (
	{ results: { hits } }: Results,
) => {
	return { hits };
};

export default compose(
	connect(mapStateToProps)
)(ResultsWindow);