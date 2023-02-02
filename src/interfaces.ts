import { StrNum } from './types';

export interface Windows {
	windows: {
		greetings: boolean,
		game: boolean,
		setting: boolean,
		results: boolean,
	};
};
export interface Settings {
	settings: {
		timer: number,
		targetSize: number,
		targetColor: StrNum[],
		boardColor: string,
		sound: string,
		clickSound: StrNum,
	};
};
export interface Results {
	results: {
		hits: number,
		missclicks: number,
		accuracy: number,
	};
};

export interface Data {
	value: StrNum | StrNum[],
	active: boolean,
};