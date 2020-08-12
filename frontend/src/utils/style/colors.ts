import * as Polished from "polished";

// ================ //
// ↓↓↓ Neutrals ↓↓↓ //
// ================ //

const white = "#FFFFFF";
const black = "#000000";

export const NEUTRALS = {
	white_100: white,
	white_80: Polished.transparentize(0.2, white),
	white_60: Polished.transparentize(0.4, white),
	white_40: Polished.transparentize(0.6, white),
	white_20: Polished.transparentize(0.8, white),
	black_100: black,
	black_80: Polished.transparentize(0.2, black),
	black_60: Polished.transparentize(0.4, black),
	black_40: Polished.transparentize(0.6, black),
	black_20: Polished.transparentize(0.8, black),
	transparent: "rgba(0, 0, 0, 0)",
};

// =============== //
// ↓↓↓ Primary ↓↓↓ //
// =============== //

export const PRIMARY_100 = "#6BA6FF";
export const PRIMARY_80 = Polished.transparentize(0.2, PRIMARY_100);
export const PRIMARY_60 = Polished.transparentize(0.4, PRIMARY_100);
export const PRIMARY_40 = Polished.transparentize(0.6, PRIMARY_100);
export const PRIMARY_20 = Polished.transparentize(0.8, PRIMARY_100);

// ================== //
// ↓↓↓ Light Mode ↓↓↓ //
// ================== //

export const LIGHT = {
	one: "#F9F9F9",
	two: "#F8F6FA",
	three: "#F1EEF3",
	four: "#DBD9E0",
	five: "#C4C4C4",
	six: "#A9A9A9",
	seven: "#74798E",
};

// ================= //
// ↓↓↓ Dark Mode ↓↓↓ //
// ================= //

export const DARK = {
	one: "#1D1B22",
	two: "#232227",
	three: "#2A2D32",
	four: "#2E343B",
	five: "#383C40",
	six: "#575A5D",
};

// ============ //
// ↓↓↓ Text ↓↓↓ //
// ============ //

export const TEXT = {
	white: "#F2F2F2",
	black: "#212121",
};

// =================== //
// ↓↓↓ Task Status ↓↓↓ //
// =================== //

export const STATUS = {
	completed: "#5FE49C",
	workingOn: "#55BCF5",
	forLater: "#C7D1D7",
	dueSoon: "#FFE27A",
	dueTomorrow: "#FFBC7E",
	overdue: "#FF6F9A",
};

// ====================================== //
// ↓↓↓ Registration Password Strength ↓↓↓ //
// ====================================== //

export const PASSWORDSTRENGTH = {
	weak: "#FF4D4D",
	medium: "#FFEE93",
	strong: "#97FF95",
	stronger: "#788EFF",
};

// ============= //
// ↓↓↓ Modal ↓↓↓ //
// ============= //

export const MODAL = {
	overlay: "rgba(0, 0, 0, 0.7)",
};

// ============== //
// ↓↓↓ Alerts ↓↓↓ //
// ============== //

export const ALERTS = {
	errorLight: "#C32263",
	errorDark: "#f79b9b",
};
