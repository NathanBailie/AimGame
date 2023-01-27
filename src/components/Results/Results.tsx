import './results.scss';

type Props = {
	hits: number,
}

const Results: React.FC<Props> = ({ hits }) => {
	return (
		<div className="results">
			<p className='results__score'>
				Your score: <span>{hits}</span>
			</p>
		</div>
	);
};

export default Results;