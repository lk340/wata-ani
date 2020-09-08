import * as Shadows from "@/utils/style/shadows";
import * as Colors from "@/utils/style/colors";

/**
 * Globals
 * Theme Colors
 * Breakpoints
 * Side Paddings
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
	// maxWidth: "1440",
	maxWidth: 1200,
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
			headerText: { light: Colors.LIGHT.seven, dark: Colors.LIGHT.five },
			body: { light: Colors.LIGHT.one, dark: Colors.DARK.two },
		},
		footer: {
			background: { light: Colors.NEUTRALS.white_100, dark: Colors.DARK.one },
		},
	},
	pages: {
		home: {
			background: { light: Colors.LIGHT.one, dark: Colors.DARK.two },
			reviews: { light: Colors.LIGHT.seven, dark: Colors.LIGHT.five },
			description: {
				block: {
					background: { light: Colors.NEUTRALS.white_100, dark: Colors.DARK.one },
					iconBackground: { light: Colors.LIGHT.one, dark: Colors.DARK.two },
				},
			},
			cta: { background: { light: Colors.LIGHT.three, dark: Colors.DARK.three } },
		},
	},
};

// =================== //
// ↓↓↓ Breakpoints ↓↓↓ //
// =================== //

export const breakpoints = {
	tablet: 1102,
	mobile: 450,
	paddingTablet: 865,
	paddingMobile: 450,
	navbar: {
		1260: 1260,
		650: 650,
	},
	home: {
		1260: 1260,
		650: 650,
	},
};

// ==================== //
// ↓↓↓ Side Paddings ↓↓↓ //
// ==================== //

export const sidePaddings = {
	desktop: 120,
	tablet: 60,
	mobile: 30,
};

// ============ //
// ↓↓↓ Size ↓↓↓ //
// ============ //

export const size = {
	components: {
		authForm: {
			logo: { width: 70 },
			icon: { width: 20 },
		},
		navbar: {
			height: 100,
			icon: 20,
			spacer: 40,
		},
		navbarMobile: {
			height: 80,
			icon: 20,
		},
		navbarModalPartial: {
			header: {
				height: 70,
				close: 20,
			},
		},
		footer: {
			height: 500,
		},
	},
	pages: {
		home: {
			cta: {
				height: 500,
			},
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
			inputError: "0.75rem",
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
		navbarModalPartial: {
			header: "1rem",
		},
		footer: {
			name: "0.875rem",
			navigationTitle: "1rem",
			navigationLink: "0.75rem",
		},
		ctaButton: "1.375rem",
	},
	pages: {
		home: {
			description: {
				title: "1.875rem",
				body: "1rem",
				link: "1rem",
			},
			cta: {
				title: "2rem",
				body: "1rem",
			},
		},
	},
};

// ==================== //
// ↓↓↓ Line Heights ↓↓↓ //
// ==================== //

export const lineHeights = {
	body: "150%",
	components: {
		footer: {
			navigationTitle: 150,
			navigationLink: 150,
		},
		ctaButton: 150,
	},
	pages: {
		home: {
			review: 150,
			description: 150,
			cta: 150,
		},
	},
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
		footer: {
			logo: "0.375rem",
		},
		ctaButton: "0.5rem",
	},
	pages: {
		home: {
			description: "1rem",
		},
	},
};
