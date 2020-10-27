import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Reach from "@reach/router";
import * as Router from "react-router-dom";
import * as Use from "react-use";
import { ThemeProvider } from "styled-components";
import axios from "axios";

import * as Context from "@/context";
import * as Actions from "@/redux/actions";
import * as Types from "@/utils/types";
import * as Functions from "@/utils/functions";
import * as AxiosHelpers from "@/utils/api/axios-helpers";
import * as JWT from "@/utils/api/jwt";

import * as Styled from "./observer.styled";

/**
 * Axios Defaults
 * Window Size
 * Window Scroll Position
 * Mouse Position
 * Theme
 * Location
 * User Agent
 * Setting Theme
 * Setting Context State Values
 * JWT Refresh & Setting Current User On Page Refresh
 * Debugging Context State
 * Provider Theme
 */

export const Observer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	// ====================== //
	// ↓↓↓ Axios Defaults ↓↓↓ //
	// ====================== //

	axios.defaults.baseURL = "http://localhost:7000";
	axios.defaults.xsrfCookieName = "Co6kpjZ4jUn61vnF15QRXu";

	const accessToken = localStorage.access;
	if (accessToken) {
		axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
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
	const { elX, elY } = Use.useMouse(mouseRef);

	// ============= //
	// ↓↓↓ Theme ↓↓↓ //
	// ============= //

	const { theme } = Context.Theme.useThemeContext();

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
		} else {
			if (theme.state.mode !== localStorage.mode) {
				theme.setters.setTheme({ mode: localStorage.mode });
			}
		}
	}, [theme.state.mode]);

	// ==================================== //
	// ↓↓↓ Setting Context State Values ↓↓↓ //
	// ==================================== //

	React.useEffect(() => {
		windows.setters.setWindows({ width, height });
		// scroll.setters.setScroll({ x, y });
		// mouse.setters.setMouse({ x: elX, y: elY });
		location.setters.setLocation({ pathname });

		const deviceIsiPhone = navigator.userAgent.includes("iPhone");
		const deviceIsiPad = navigator.userAgent.includes("iPad");
		const deviceIsAndroid = navigator.userAgent.includes("Android");

		if (deviceIsiPhone || deviceIsiPad || deviceIsAndroid) {
			userAgent.setters.setUserAgent({ isMobile: true });
		} else {
			userAgent.setters.setUserAgent({ isMobile: false });
		}
	}, [navigator.userAgent]);
	// }, [width, height, x, y, elX, elY, navigator.userAgent]);

	// ========================================================== //
	// ↓↓↓ JWT Refresh & Setting Current User On Page Refresh ↓↓↓ //
	// ========================================================== //

	const dispatch = ReactRedux.useDispatch();

	async function getCurrentUser(): Promise<void> {
		try {
			const accessToken = localStorage.access;
			const decryptedToken = JWT.decryptAccessToken(accessToken);
			const currentUserId = decryptedToken.user_id;

			const endpoint = `/api/users/${currentUserId}/`;
			const validateStatus = AxiosHelpers.validateStatus;
			const response = await axios.get(endpoint, { validateStatus });
			const currentUser = response.data;

			console.log("Current User:", currentUser);

			// Success
			if (response.status < 400) {
				console.log("Observer Response Success:", response);
				dispatch(Actions.Session.receiveCurrentUser(currentUser));
			}
			// Failure
			else {
				console.log("Observer Response Failure:", response);
				// If there is a JWT error on the server side, just log the user out.
				if (response.status >= 500) dispatch(Actions.Session.signOut(dispatch));
				dispatch(Actions.Session.sessionErrors(response.data.non_field_errors));
			}
		} catch (error) {
			// Dev debug log
			console.log(error);
		}
	}

	const username = ReactRedux.useSelector(
		(state: Types.ReduxState) => state.session.username,
	);

	const email = ReactRedux.useSelector((state: Types.ReduxState) => state.session.email);

	React.useEffect(() => {
		JWT.checkRefresh();

		if (!username && !email && localStorage.access) {
			getCurrentUser();
		}
	}, []);

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
	// console.log("Current User:", auth.state.currentUser);

	// ====================== //
	// ↓↓↓ Provider Theme ↓↓↓ //
	// ====================== //

	const currentUserId = Functions.getSession().id;
	const isCurrentUser = !!currentUserId;

	const isMobile = userAgent.state.isMobile;

	const providerTheme = {
		mode: localStorage.mode,
		isCurrentUser,
		isMobile,
	};

	return (
		<ThemeProvider theme={providerTheme}>
			<Styled.Observer>{children}</Styled.Observer>
		</ThemeProvider>
	);
};
