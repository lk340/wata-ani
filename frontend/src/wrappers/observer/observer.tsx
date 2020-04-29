import * as React from "react";
import * as Use from "react-use";
import { ThemeProvider } from "styled-components";

import * as Context from "@/context";
import * as Constants from "@/utils/style/constants";
import * as JWT from "@/utils/api/jwt";

import * as Styled from "./observer.styled";

export const Observer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	// =================== //
	// ↓↓↓ Window Size ↓↓↓ //
	// =================== //

	const { window } = Context.Window.useWindowContext();
	const { width, height } = Use.useWindowSize();

	// =============================== //
	// ↓↓↓ Window Scroll Position  ↓↓↓ //
	// =============================== //

	const { windowScroll } = Context.Scroll.useWindowScrollContext();
	const { x, y } = Use.useWindowScroll();

	// ====================== //
	// ↓↓↓ Mouse Position ↓↓↓ //
	// ====================== //

	const { mouse } = Context.Mouse.useMouseContext();
	const mouseRef = React.useRef(null);
	const { docX, docY, posX, posY, elX, elY, elW, elH } = Use.useMouse(mouseRef);

	// ========================================= //
	// ↓↓↓ Theme Device Widths (breakpoints) ↓↓↓ //
	// ========================================= //

	const { theme } = Context.Theme.useThemeContext();
	const breakpoints = Object.entries(Constants.breakpoints);
	const numberBreakpoints = breakpoints.length;

	// ==================================== //
	// ↓↓↓ Setting Context State Values ↓↓↓ //
	// ==================================== //

	React.useEffect(() => {
		window.setters.setWindow({ width, height });
		windowScroll.setters.setWindowScroll({ x, y });
		mouse.setters.setMouse({ x: elX, y: elY });

		for (let index = 0; index < numberBreakpoints - 1; index++) {
			const breakpoint = breakpoints[index][0] as Context.Theme.Device;
			const min = breakpoints[index][1].min;
			const max = breakpoints[index][1].max;
			const windowWidth = width;
			if (windowWidth >= min && windowWidth <= max) {
				theme.setters.setDevice(breakpoint);
				break;
			}
		}
	}, [width, height, x, y, elX, elY]);

	// ========================================================= //
	// ↓↓↓ Setting Current User On Page Refresh / URL Change ↓↓↓ //
	// ========================================================= //

	const { auth } = Context.Auth.useAuthContext();
	React.useEffect(() => {
		if (localStorage.access) {
			if (auth.state.currentUser === null) {
				const currentUser = JWT.decryptJWTAccessTokenPayload(localStorage.access);
				auth.api.setCurrentUser(currentUser.user_id);
			}
		}
	}, []);

	// =============================== //
	// ↓↓↓ Debugging Context State ↓↓↓ //
	// =============================== //

	// console.log("=====");
	// console.log("window width:", window.state.width);
	// console.log("window height:", window.state.height);
	// console.log("window scroll x:", windowScroll.state.x);
	// console.log("window scroll y:", windowScroll.state.y);
	// console.log("mouse position x:", mouse.state.x);
	// console.log("mouse position y:", mouse.state.y);
	// console.log("theme device:", theme.state.device);
	console.log("Current User:", auth.state.currentUser);

	// ====================== //
	// ↓↓↓ Provider Theme ↓↓↓ //
	// ====================== //

	const providerTheme = {
		device: theme.state.device,
		mode: theme.state.mode,
	};

	return (
		<ThemeProvider theme={providerTheme}>
			<Styled.Observer>{children}</Styled.Observer>
		</ThemeProvider>
	);

	// Uncomment below to get access to mouse cursor position.
	// return <Styled.Observer ref={mouseRef}>{children}</Styled.Observer>;
};
