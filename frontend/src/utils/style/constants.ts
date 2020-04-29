export const threeJS = {
	fieldOfView: 75,
	near: 0.1,
	far: 1000,
};

export type Breakpoint = {
	min: number;
	max: number;
};

export type Breakpoints = {
	ultrawide: Breakpoint;
	desktop: Breakpoint;
	iPadPro: Breakpoint;
	iPad: Breakpoint;
	iPhone678Plus: Breakpoint;
	pixel2: Breakpoint;
	iPhoneX: Breakpoint;
	galaxyS5: Breakpoint;
	iPhone5SE: Breakpoint;
};

export const breakpoints: Breakpoints = {
	ultrawide: {
		min: 1201,
		max: Infinity,
	},
	desktop: {
		min: 1025,
		max: 1200,
	},
	iPadPro: {
		min: 769,
		max: 1024,
	},
	iPad: {
		min: 415,
		max: 768,
	},
	iPhone678Plus: {
		min: 412,
		max: 414,
	},
	pixel2: {
		min: 376,
		max: 411,
	},
	iPhoneX: {
		min: 361,
		max: 375,
	},
	galaxyS5: {
		min: 321,
		max: 360,
	},
	iPhone5SE: {
		min: 0,
		max: 320,
	},
};

export const layout = {};

export const fonts = {};

// ================== //
// ↓↓↓ Components ↓↓↓ //
// ================== //

export const navbar = {};

export const footer = {};
