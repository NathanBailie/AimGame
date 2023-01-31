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
		targetSize: number
	};
};
export interface Results {
	results: {
		hits: number,
	};
};

export interface Data {
	value: string | number,
	active: boolean,
};