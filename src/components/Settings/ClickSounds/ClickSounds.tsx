import './clickSounds.scss';
import { Data } from '../../../interfaces';
import { StrNum } from '../../../types';
import sound1 from '../../../resources/sounds/click/sound1.mp3';
import sound2 from '../../../resources/sounds/click/sound2.mp3';
import sound3 from '../../../resources/sounds/click/sound3.mp3';
import sound4 from '../../../resources/sounds/click/sound4.mp3';
import sound5 from '../../../resources/sounds/click/sound5.mp3';
import sound6 from '../../../resources/sounds/click/sound6.mp3';


type Props = {
	sounds: Data[],
	setSounds: (value: Data[]) => void,
	onChangeProp: (settingData: Data[], setData: any, newValue: StrNum | StrNum[]) => void
	changeClickSound: (value: StrNum | StrNum[]) => void,
};


const ClickSounds: React.FC<Props> = ({ sounds, setSounds, onChangeProp, changeClickSound }) => {
	const allSounds = [sound1, sound2, sound3, sound4, sound5, sound6];
	const result = sounds.map((item: Data, index) => {
		const { value, active } = item;
		let classes = 'clickSouds__value';
		if (active) {
			classes += ' clickSouds__value_active';
		};

		return (
			<li
				key={index}
				onClick={() => { changeClickSound(value); onPlaySound(allSounds[index]); onChangeProp(sounds, setSounds, value) }}
				className={classes}
			>
				{value}
			</li>
		);
	});

	function onPlaySound(file: any): void {
		let audio = new Audio(file);
		audio.autoplay = true;
		audio.volume = 0.5;
		audio.play();
	};


	return (
		<div className="clickSouds">
			<h2>Click sound: </h2>
			<ul className='clickSouds__timelist'>
				{result}
			</ul>
		</div>
	);
};

export default ClickSounds;