import { css } from "styled-components";

import * as Snippets from "@/utils/style/snippets";
import * as Shadows from "@/utils/style/shadows";
import * as Colors from "@/utils/style/colors";

export const threeJS = {
	fieldOfView: 75,
	near: 0.1,
	far: 1000,
};

// ============== //
// ↓↓↓ Globals ↓↓↓ //
// ============== //

export const globals = {
	// maxWidth: "1440px",
	maxWidth: "1200px",
};

// ==================== //
// ↓↓↓ Theme Colors ↓↓↓ //
// ==================== //

export const theme = {
	background: Snippets.theme(Colors.NEUTRALS.white_100, Colors.DARK.one),
	text: Snippets.theme(Colors.TEXT.black, Colors.TEXT.white),
	shadowOneLight: Snippets.theme(Shadows.light.one, Shadows.dark.one),
	shadowTwo: Snippets.theme(Shadows.light.two, Shadows.dark.two),
	shadowThree: Snippets.theme(Shadows.light.three, Shadows.dark.three),
};

// ==================== //
// ↓↓↓ Side Paddings ↓↓↓ //
// ==================== //

export const sidePaddings = {
	desktop: "120px",
	tablet: "60px",
	mobile: "30px",
};

// ================== //
// ↓↓↓ Font Sizes ↓↓↓ //
// ================== //

export const fontSizes = {
	fallback: "1rem",
};

// =================== //
// ↓↓↓ Breakpoints ↓↓↓ //
// =================== //

export const breakpoints = {
	tablet: "1102px",
	mobile: "450px",
	paddingTablet: "865px",
	paddingMobile: "450px",
	navbar: {
		1260: "1260px",
		650: "650px",
	},
	home: {
		1260: "1260px",
		650: "650px",
	},
};

// ==================== //
// ↓↓↓ Line Heights ↓↓↓ //
// ==================== //

export const lineHeights = {
	body: "150%",
};

// ===================== //
// ↓↓↓ Border Radius ↓↓↓ //
// ===================== //

export const borderRadius = {};

// ================== //
// ↓↓↓ Components ↓↓↓ //
// ================== //

export const navbar = {};

export const auth = {};
