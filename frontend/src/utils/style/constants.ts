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
	components: {
		authForm: {
			inputBackground: Snippets.theme(Colors.LIGHT.one, Colors.DARK.three),
			inputBorder: Snippets.theme(Colors.LIGHT.three, Colors.DARK.five),
		},
		navbar: {
			borderBottom: Snippets.theme(Colors.LIGHT.four, Colors.DARK.five),
			registerButton: Snippets.theme(Colors.LIGHT.three, Colors.DARK.four),
			profileIcon: Snippets.theme(Colors.LIGHT.seven, Colors.LIGHT.five),
		},
	},
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
	components: {
		authForm: {
			title: "1.5rem",
			inputTitle: "0.875rem",
			inputPlaceholder: "0.75rem",
			submit: "1rem",
			redirect: "0.875rem",
		},
		navbar: {
			link: "0.875rem",
		},
	},
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

export const borderRadius = {
	components: {
		authForm: {
			logo: "0.375rem",
			input: "0.3125rem",
		},
	},
};

// ============ //
// ↓↓↓ Size ↓↓↓ //
// ============ //

export const size = {
	components: {
		authForm: {
			logo: { width: "70px" },
			icon: { width: "20px" },
		},
		navbar: {
			height: "100px",
			icon: "20px",
			spacer: "40px",
		},
	},
};
