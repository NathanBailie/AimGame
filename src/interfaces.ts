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
	};
};
export interface Results {
	results: {
		hits: number,
	};
};

export interface Data {
	value: StrNum | StrNum[],
	active: boolean,
};