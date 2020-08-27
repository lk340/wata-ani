import { css } from "styled-components";

const mediaQueries = (maxWidth: string, ...styles: string[]) => {
	let cleanedStyles = "";

	styles.forEach((style) => (cleanedStyles += style + ";" + "\n"));

	return css`
		@media (max-width: ${maxWidth}) {
			${cleanedStyles};
		}
	`;
};

export const thirteenInchMBP = (...styles: string[]) => mediaQueries("1280px", ...styles);
export const iPadPro = (...styles: string[]) => mediaQueries("1024px", ...styles);
export const iPad = (...styles: string[]) => mediaQueries("768px", ...styles);
export const iPhone678Plus = (...styles: string[]) => mediaQueries("414px", ...styles);
export const iPhoneX = (...styles: string[]) => mediaQueries("375px", ...styles);
export const iPhone5_SE = (...styles: string[]) => mediaQueries("320px", ...styles);

export const custom = (maxWidth: string, ...styles: string[]) => {
	return mediaQueries(maxWidth, ...styles);
};
