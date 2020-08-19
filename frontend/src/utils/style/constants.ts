import * as Shadows from "@/utils/style/shadows";
import * as Colors from "@/utils/style/colors";

/**
 * Globals
 * Theme Colors
 * Breakpoints
 * SIde Paddings
 * Size
 * Font Sizes
 * Line Heights
 * Border Radius
 */

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
	background: { light: Colors.NEUTRALS.white_100, dark: Colors.DARK.one },
	text: { light: Colors.TEXT.black, dark: Colors.TEXT.white },
	shadowOneLight: { light: Shadows.light.one, dark: Shadows.dark.one },
	shadowTwo: { light: Shadows.light.two, dark: Shadows.dark.two },
	shadowThree: { light: Shadows.light.three, dark: Shadows.dark.three },
	components: {
		authForm: {
			inputBackground: { light: Colors.LIGHT.one, dark: Colors.DARK.three },
			inputBorder: { light: Colors.LIGHT.three, dark: Colors.DARK.five },
		},
		navbar: {
			borderBottom: { light: Colors.LIGHT.four, dark: Colors.DARK.five },
			registerButton: { light: Colors.LIGHT.three, dark: Colors.DARK.four },
			registerButtonHover: Colors.PRIMARY_100,
			profileIcon: { light: Colors.LIGHT.seven, dark: Colors.LIGHT.five },
		},
		navbarMobile: {
			borderTop: { light: Colors.LIGHT.four, dark: Colors.DARK.five },
			option: { light: Colors.LIGHT.seven, dark: Colors.LIGHT.five },
		},
		navbarModalPartial: {
			background: { light: Colors.LIGHT.one, dark: Colors.DARK.two },
			border: { light: Colors.LIGHT.four, dark: Colors.DARK.five },
			header: { light: Colors.NEUTRALS.white_100, dark: Colors.DARK.one },
			body: { light: Colors.LIGHT.one, dark: Colors.DARK.two },
		},
	},
	pages: {
		home: {
			background: { light: Colors.LIGHT.one, dark: Colors.DARK.two },
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
// ↓↓↓ Side Paddings ↓↓↓ //
// ==================== //

export const sidePaddings = {
	desktop: "120px",
	tablet: "60px",
	mobile: "30px",
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
		navbarMobile: {
			height: "80px",
			icon: "20px",
		},
		navbarModalPartial: {
			header: { height: "70px" },
		},
	},
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
		navbarMobile: {
			text: "0.75rem",
		},
		hamburger: {
			link: "0.875rem",
		},
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
		navbar: {
			register: "0.3125rem",
		},
		navbarModalPartial: {
			container: "0.3125rem",
		},
	},
};
