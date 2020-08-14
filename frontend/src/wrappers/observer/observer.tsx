import * as React from "react";
import * as Use from "react-use";
import * as Reach from "@reach/router";
import * as Gatsby from "gatsby";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import Cookies from "js-cookie";

import * as Context from "@/context";
import * as Constants from "@/utils/style/constants";
import * as JWT from "@/utils/api/jwt";

import * as Styled from "./observer.styled";

export const Observer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	// ====================== //
	// ↓↓↓ Axios Defaults ↓↓↓ //
	// ====================== //

	axios.defaults.baseURL = "http://localhost:7000";
	axios.defaults.xsrfCookieName = "6kpjZ4jUn61vnF15QRXuC";

	const accessToken = Cookies.get("jacLs1NGQZN07D92L8PVwOi");
	if (accessToken) {
		// If an access token exists, add the following authorization header to every
		// axios call.
		axios.defaults.headers = {
			headers: { Authorization: `Bearer ${Cookies.get("jacLs1NGQZN07D92L8PVwOi")}` },
		};
	}

	// =================== //
	// ↓↓↓ Window Size ↓↓↓ //
	// =================== //

	const { windows } = Context.Windows.useWindowsContext();
	const { width, height } = Use.useWindowSize();

	// =============================== //
	// ↓↓↓ Window Scroll Position  ↓↓↓ //
	// =============================== //

	const { scroll } = Context.Scroll.useScrollContext();
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
	// const breakpoints = Object.entries(Constants.breakpoints);
	// const numberBreakpoints = breakpoints.length;

	// ================ //
	// ↓↓↓ Location ↓↓↓ //
	// ================ //

	const { location } = Context.Location.useLocationContext();
	const reachLocation = Reach.useLocation();
	const pathname = reachLocation.pathname;

	// ================== //
	// ↓↓↓ User Agent ↓↓↓ //
	// ================== //

	const { userAgent } = Context.UserAgent.useUserAgentContext();

	// ===================== //
	// ↓↓↓ Setting Theme ↓↓↓ //
	// ===================== //

	React.useEffect(() => {
		if (!localStorage.mode) {
			localStorage.mode = theme.state.mode;
		}
	}, []);

	// ==================================== //
	// ↓↓↓ Setting Context State Values ↓↓↓ //
	// ==================================== //

	React.useEffect(() => {
		windows.setters.setWindows({ width, height });
		scroll.setters.setScroll({ x, y });
		mouse.setters.setMouse({ x: elX, y: elY });

		// for (let index = 0; index < numberBreakpoints - 1; index++) {
		// 	const breakpoint = breakpoints[index][0] as Context.Theme.Device;
		// 	const min = breakpoints[index][1].min;
		// 	const max = breakpoints[index][1].max;
		// 	const windowWidth = width;
		// 	if (windowWidth >= min && windowWidth <= max) {
		// 		theme.setters.setDevice(breakpoint);
		// 		break;
		// 	}
		// }

		location.setters.setLocation({ pathname });

		if (
			navigator.userAgent.includes("iPhone") ||
			navigator.userAgent.includes("iPad") ||
			navigator.userAgent.includes("Android")
		) {
			userAgent.setters.setUserAgent({ isMobile: true });
		} else {
			userAgent.setters.setUserAgent({ isMobile: false });
		}
	}, [width, height, x, y, elX, elY, navigator.userAgent]);

	// ========================================================= //
	// ↓↓↓ Setting Current User On Page Refresh / URL Change ↓↓↓ //
	// ========================================================= //

	const { auth } = Context.Auth.useAuthContext();
	const { authForm } = Context.AuthForm.useAuthFormContext();
	React.useEffect(() => {
		if (accessToken) {
			if (authForm.state.user === null) {
				JWT.checkRefreshJWT();
				authForm.setters.setUser(JWT.decryptJWTAccessTokenPayload(accessToken).user_id);
			}
		}
		// if (localStorage.access) {
		// 	if (auth.state.currentUser === null) {
		// 		JWT.checkRefreshJWT();
		// 		const accessToken = JWT.decryptJWTAccessTokenPayload(localStorage.access);
		// 		auth.setters.setCurrentUser(accessToken.user_id);
		// 	}
		// }
	}, [auth.state.currentUser]);

	// =============================== //
	// ↓↓↓ Debugging Context State ↓↓↓ //
	// =============================== //

	// console.log("=====");
	// console.log("window width:", windows.state.width);
	// console.log("window height:", windows.state.height);
	// console.log("window scroll x:", windowScroll.state.x);
	// console.log("window scroll y:", windowScroll.state.y);
	// console.log("mouse position x:", mouse.state.x);
	// console.log("mouse position y:", mouse.state.y);
	// console.log("theme device:", theme.state.device);
	// console.log("theme mode:", theme.state.mode);
	// console.log("pathname", location.state.pathname);
	// console.log("user agent is mobile:", userAgent.state.isMobile);
	console.log("Current User:", auth.state.currentUser);

	// ====================== //
	// ↓↓↓ Provider Theme ↓↓↓ //
	// ====================== //

	const providerTheme = {
		// device: theme.state.device,
		mode: localStorage.mode,
	};

	return (
		<ThemeProvider theme={providerTheme}>
			<Styled.Observer>{children}</Styled.Observer>
		</ThemeProvider>
	);

	// Uncomment below to get access to mouse cursor position.
	// return <Styled.Observer ref={mouseRef}>{children}</Styled.Observer>;
};
