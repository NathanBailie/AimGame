import './greetingWindow.scss';
import compose from '../../utils/compose';
import { connect } from 'react-redux';
import { onLaucnhSettings } from '../../actions/actions';
import { onLaucnhGame } from '../../actions/actions';


interface Props {
	launchSettings: () => void,
	launchGame: () => void,
};


const GreetingWindow: React.FC<Props> = ({ launchSettings, launchGame }) => {
	return (
		<div className="greeting">
			<h1 className='greeting__title'>Aim Training</h1>
			<div className="greeting__wraper">
				<button
					className='greeting__finish'
					onClick={() => launchSettings()}
				>Settings</button>
				<button
					className='greeting__start'
					onClick={() => launchGame()}
				>Start</button>
			</div>
		</div>
	);
};
const mapStateToProps = () => {
	return {};
};

const mapDispatchToProps = (dispatch: (any)) => {
	return {
		launchSettings: () => dispatch(onLaucnhSettings()),
		launchGame: () => dispatch(onLaucnhGame()),
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps)
)(GreetingWindow);