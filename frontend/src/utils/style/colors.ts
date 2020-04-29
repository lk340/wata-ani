import * as Polished from "polished";

type Colors = {
	[key: string]: string;
};

const WHITE = "#FFFFFF";
const BLACK = "#000000";

export const colors: Colors = {
	WHITE_100: WHITE,
	WHITE_80: Polished.transparentize(0.2, WHITE),
	WHITE_60: Polished.transparentize(0.4, WHITE),
	WHITE_40: Polished.transparentize(0.6, WHITE),
	WHITE_20: Polished.transparentize(0.8, WHITE),
	BLACK_100: BLACK,
	BLACK_80: Polished.transparentize(0.2, BLACK),
	BLACK_60: Polished.transparentize(0.4, BLACK),
	BLACK_40: Polished.transparentize(0.6, BLACK),
	BLACK_20: Polished.transparentize(0.8, BLACK),
};
