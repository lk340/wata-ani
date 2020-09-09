import { WEBGL } from "./webgl-check";
import { css } from "styled-components";

import * as Constants from "@/utils/style/constants";

/**
 * Checks
 * Styles
 * Responsive Styles
 */

// ============== //
// ↓↓↓ Checks ↓↓↓ //
// ============== //

export function checkWebGLAvailable() {
	if (WEBGL.isWebGLAvailable()) {
		console.log("WebGL Available!");
		// Do your animations here.
	} else {
		const warning = WEBGL.getWebGLErrorMessage();
		console.log(`There was an error with WebGL: ${warning}`);
		// document.getElementById("container").appendChild(warning);
	}
}

export function renderCheck(componentName: string) {
	return console.log(`Hi, I'm in the ${componentName} component!`);
}

// ============== //
// ↓↓↓ Styles ↓↓↓ //
// ============== //

export function fillView() {
	return css`
		width: 100vw;
		height: 100vh;
	`;
}

export function fillContainer() {
	return css`
		width: 100%;
		height: 100%;
	`;
}

export function minMaxWidth(minWidth: string, maxWidth: string) {
	return css`
		min-width: ${minWidth};
		max-width: ${maxWidth};
	`;
}

export function minMaxHeight(minHeight: string, maxHeight: string) {
	return css`
		min-height: ${minHeight};
		max-height: ${maxHeight};
	`;
}

export function size(width: string, height: string) {
	return css`
		width: ${width};
		height: ${height};
	`;
}

export function square(size: string) {
	return css`
		width: ${size};
		height: ${size};
	`;
}

export function makeCircle() {
	return css`
		border-radius: 50%;
	`;
}

export function flex(
	direction: string = "row",
	justifyContent: string = "auto",
	alignItems: string = "auto",
) {
	return css`
		display: flex;
		flex-direction: ${direction};
		justify-content: ${justifyContent};
		align-items: ${alignItems};
	`;
}

export function flexRowCenter() {
	return css`
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	`;
}

export function flexColumnCenter() {
	return css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	`;
}

export function grid(
	columnRepeat: number = 1,
	columnSize: string = "auto",
	gap: number = 0,
	justifyItems: string = "auto",
	alignItems: string = "auto",
) {
	return css`
		display: grid;
		grid-template-columns: repeat(${columnRepeat}, ${columnSize});
		grid-gap: ${gap}px;
		justify-items: ${justifyItems};
		align-items: ${alignItems};
	`;
}

export function position(
	position: string = "static",
	top: string = "auto",
	right: string = "auto",
	bottom: string = "auto",
	left: string = "auto",
	zIndex: number = 1,
) {
	return css`
		position: ${position};
		top: ${top};
		right: ${right};
		bottom: ${bottom};
		left: ${left};
		z-index: ${zIndex};
	`;
}

export function absolute(
	top: string = "auto",
	right: string = "auto",
	bottom: string = "auto",
	left: string = "auto",
	zIndex: number = 1,
) {
	return css`
		position: absolute;
		top: ${top};
		right: ${right};
		bottom: ${bottom};
		left: ${left};
		z-index: ${zIndex};
	`;
}

export function absoluteCenter(zIndex: number = 1) {
	return css`
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: ${zIndex};
		transform: translate3d(-50%, -50%, 0%);
	`;
}

export function fixed(
	top: string = "auto",
	right: string = "auto",
	bottom: string = "auto",
	left: string = "auto",
	zIndex: number = 1,
) {
	return css`
		position: fixed;
		top: ${top};
		right: ${right};
		bottom: ${bottom};
		left: ${left};
		z-index: ${zIndex};
	`;
}

export function hideScrollbar() {
	return css`
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */

		::-webkit-scrollbar {
			display: none; /* Chrome, Safari and Opera */
		}
	`;
}

export function noTextHighlight() {
	return css`
		.noselect {
			-webkit-touch-callout: none; /* iOS Safari */
			-webkit-user-select: none; /* Safari */
			-khtml-user-select: none; /* Konqueror HTML */
			-moz-user-select: none; /* Old versions of Firefox */
			-ms-user-select: none; /* Internet Explorer/Edge */
			user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
		}
	`;
}

export function preventUserInteraction() {
	return css`
		pointer-events: none;
		user-select: none;
	`;
}

export function clearSpacing() {
	return css`
		margin: 0;
		padding: 0;
		color: inherit;
	`;
}

export function clearAnchor() {
	return css`
		display: inherit;
		color: inherit;
		text-decoration: none;
		outline: none;
	`;
}

export function debug(color: string, type: string, size: number) {
	return css`
		border: ${color} ${type} ${size}px;
	`;
}

export function fixSafariMinHeight() {
	return css`
		/* min-height: 100vh; */
		min-height: 100%;
		min-height: -webkit-fill-available;
		min-height: -mox-available;
		min-height: fill-available;
	`;
}

export function theme(light: string, dark: string) {
	return css`
		${(props) => (props.theme.mode === "light" ? light : dark)}
	`;
}

export function navbarMargins() {
	return css`
		margin-top: ${Constants.size.components.navbar.height}px;

		@media (max-width: 625px) {
			margin-top: ${Constants.size.components.navbar.height / 2}px;

			margin-bottom: ${(props) => {
				const { isCurrentUser } = props.theme;
				if (isCurrentUser) return `${Constants.size.components.navbarMobile.height}px`;
				else return "0px";
			}};
		}
	`;
}

// ========================= //
// ↓↓↓ Responsive Styles ↓↓↓ //
// ========================= //

export function gridResponsive(minSize: string = "200px", maxSize: string = "1fr") {
	return css`
		display: grid;
		align-items: center;
		grid-template-columns: repeat(auto-fit, minmax(${minSize}, ${maxSize}));
	`;
}

// export function responsive(
// 	device: Context.Theme.Device,
// 	ultrawide: string,
// 	desktop: string,
// 	iPadPro: string,
// 	iPad: string,
// 	iPhone678Plus: string,
// 	pixel2: string,
// 	iPhoneX: string,
// 	galaxyS5: string,
// 	iPhone5SE: string,
// ) {
// 	switch (device) {
// 		case "ultrawide":
// 			return ultrawide;
// 		case "desktop":
// 			return desktop;
// 		case "iPadPro":
// 			return iPadPro;
// 		case "iPad":
// 			return iPad;
// 		case "iPhone678Plus":
// 			return iPhone678Plus;
// 		case "pixel2":
// 			return pixel2;
// 		case "iPhoneX":
// 			return iPhoneX;
// 		case "galaxyS5":
// 			return galaxyS5;
// 		case "iPhone5SE":
// 			return iPhone5SE;
// 		default:
// 			break;
// 	}
// }

// export function responsivePaddingHome() {
// 	function paddingTop(padding: string) {
// 		return `calc(${Constants.navbar.height} + ${padding})`;
// 	}

// 	return css`
// 		padding: ${paddingTop("50px")} ${Constants.sidePaddings.desktop} 0px;

// 		@media (max-width: ${Constants.breakpoints.paddingTablet}) {
// 			padding: ${paddingTop("50px")} ${Constants.sidePaddings.tablet} 0px;
// 		}

// 		@media (max-width: ${Constants.breakpoints.paddingMobile}) {
// 			padding: ${paddingTop("30px")} ${Constants.sidePaddings.mobile} 0px;
// 		}
// 	`;
// }
