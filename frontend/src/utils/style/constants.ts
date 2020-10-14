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
	overlay: { light: Colors.MODAL.overlay.light, dark: Colors.MODAL.overlay.dark },
	shadowOne: { light: Shadows.light.one, dark: Shadows.dark.one },
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
		reviewCard: {
			background: { light: Colors.NEUTRALS.white_100, dark: Colors.DARK.one },
			border: { light: Colors.LIGHT.four, dark: Colors.DARK.five },
			modalForm: {
				background: { light: Colors.LIGHT.one, dark: Colors.DARK.two },
				header: { light: Colors.LIGHT.seven, dark: Colors.LIGHT.six },
				characterCount: { light: Colors.LIGHT.five, dark: Colors.DARK.five },
				error: { light: Colors.ALERTS.error.light, dark: Colors.ALERTS.error.dark },
				inputBorder: { light: Colors.LIGHT.four, dark: Colors.DARK.five },
				inputBackground: { light: Colors.NEUTRALS.white_100, dark: Colors.DARK.three },
				tag: {
					borderSelected: { light: Colors.LIGHT.five, dark: Colors.DARK.five },
					borderNotSelected: Colors.NEUTRALS.transparent,
					backgroundSelected: { light: Colors.LIGHT.four, dark: Colors.DARK.four },
					backgroundNotSelected: { light: Colors.LIGHT.three, dark: Colors.DARK.three },
					textNotSelected: Colors.LIGHT.six,
				},
			},
			ratingAndLike: {
				background: { light: Colors.LIGHT.one, dark: Colors.DARK.three },
				likes: { light: Colors.LIGHT.seven, dark: Colors.LIGHT.five },
				border: { light: Colors.LIGHT.four, dark: Colors.DARK.five },
				formDesktop: { light: Colors.LIGHT.three, dark: Colors.DARK.two },
				input: { light: Colors.LIGHT.two, dark: Colors.DARK.five },
				formMobile: {
					border: { light: Colors.LIGHT.six, dark: Colors.DARK.four },
					background: { light: Colors.LIGHT.three, dark: Colors.DARK.two },
				},
			},
			date: { light: Colors.LIGHT.seven, dark: Colors.LIGHT.five },
			tag: { light: Colors.LIGHT.three, dark: Colors.DARK.four },
			readMore: {
				fade: { light: Colors.NEUTRALS.white_100, dark: Colors.DARK.one },
			},
		},
	},
	pages: {
		home: {
			background: { light: Colors.LIGHT.one, dark: Colors.DARK.two },
			atf: {
				body: { light: Colors.LIGHT.seven, dark: Colors.LIGHT.five },
			},
			reviews: { light: Colors.LIGHT.seven, dark: Colors.LIGHT.five },
			description: {
				block: {
					background: { light: Colors.NEUTRALS.white_100, dark: Colors.DARK.one },
					iconBackground: { light: Colors.LIGHT.one, dark: Colors.DARK.two },
				},
			},
			cta: { background: { light: Colors.LIGHT.three, dark: Colors.DARK.three } },
		},
		profile: {
			background: { light: Colors.LIGHT.one, dark: Colors.DARK.two },
			information: {
				background: { light: Colors.NEUTRALS.white_100, dark: Colors.DARK.one },
				borderBottom: { light: Colors.LIGHT.four, dark: Colors.DARK.five },
				data: { light: Colors.LIGHT.seven, dark: Colors.DARK.five },
			},
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
		reviewCard: {
			// height: 470,
			height: 400,
			maxWidth: (globals.maxWidth - 40) / 3,
			input: { height: 50 },
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
		pagination: "0.875rem",
		reviewCard: {
			username: "0.875rem",
			seriesName: "1rem",
			cardTitle: "0.875rem",
			cardDate: "0.875rem",
			cardText: "0.875rem",
			ratingValue: "1.125rem",
			ratingFraction: "0.75rem",
			ratingCount: "0.625rem",
			ratingInput: "1.125rem",
			ratingInputText: "0.75rem",
			ratingSubmit: "0.75rem",
			likesCount: "0.75rem",
			authorRating: {
				text: "0.875rem",
				value: "0.875rem",
			},
			tag: "0.75rem",
			readMore: "0.875rem",
			modal: {
				header: "1.25rem",
				characterCount: "0.75rem",
				text: "0.875rem",
			},
		},
	},
	pages: {
		home: {
			atf: {
				title: "2.5rem",
				titleMobile: "1.875rem",
				body: "1rem",
			},
			reviews: {
				title: "2rem",
				body: "1rem",
			},
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
		profile: {
			information: {
				data: "0.875rem",
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
		reviewCard: {
			card: "0.3125rem",
			ratingAndLikes: "0.3125rem",
			ratingForm: "0.3125rem",
			ratingInput: "0.3125rem",
			ratingSubmit: "0.1875rem",
			ratingFormMobile: "0.3125rem",
			tag: "0.25rem",
			modal: "0.3125rem",
		},
	},
	pages: {
		home: {
			atf: "0.625rem",
			description: "1rem",
		},
	},
};
