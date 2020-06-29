import * as Polished from "polished";

// ================ //
// ↓↓↓ Neutrals ↓↓↓ //
// ================ //

const WHITE = "#FFFFFF";
const BLACK = "#000000";

export const neutrals = {
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

export const transparent = "rgba(0, 0, 0, 0)";

// =============== //
// ↓↓↓ Primary ↓↓↓ //
// =============== //

// ================== //
// ↓↓↓ Light Mode ↓↓↓ //
// ================== //

// ================= //
// ↓↓↓ Dark Mode ↓↓↓ //
// ================= //

export const DARK = {
	zero: "#1D1B22",
	one: "#232227",
	two: "#2A2D32",
	three: "#2E343B",
	four: "#383C40",
	five: "#575A5D",
};

// ============ //
// ↓↓↓ Text ↓↓↓ //
// ============ //

export const TEXT = {
	white: "#F2F2F2",
	black: "#212121",
};

// ============= //
// ↓↓↓ Modal ↓↓↓ //
// ============= //

export const MODAL = {
	overlay: "rgba(0, 0, 0, 0.7)",
};
