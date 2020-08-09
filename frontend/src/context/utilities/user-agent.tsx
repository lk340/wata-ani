import * as React from "react";

import * as Helpers from "@/context/helpers";

// var isMobile = {
// 	Android: function () {
// 		return navigator.userAgent.match(/Android/i);
// 	},
// 	BlackBerry: function () {
// 		return navigator.userAgent.match(/BlackBerry/i);
// 	},
// 	iOS: function () {
// 		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
// 	},
// 	Opera: function () {
// 		return navigator.userAgent.match(/Opera Mini/i);
// 	},
// 	InternetExplorer: function () {
// 		return navigator.userAgent.match(/IEMobile/i);
// 	},
// 	any: function () {
// 		return (
// 			isMobile.Android() ||
// 			isMobile.BlackBerry() ||
// 			isMobile.iOS() ||
// 			isMobile.Opera() ||
// 			isMobile.InternetExplorer()
// 		);
// 	},
// };

type State = {
	isMobile: boolean;
};

const initialState = Object.freeze<State>({
	isMobile: false,
});

export const useUserAgentContext = Helpers.createUseContext(() => {
	const [userAgent, _setUserAgent] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Getters ↓↓↓ //
	// =============== //

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	const setUserAgent = (state: Partial<State>) =>
		_setUserAgent({ ...userAgent, ...state });

	// ================ //
	// ↓↓↓ Handlers ↓↓↓ //
	// ================ //

	// =========== //
	// ↓↓↓ API ↓↓↓ //
	// =========== //

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = userAgent;

	const getters = {};

	const setters = {
		setUserAgent,
	};

	const handlers = {};

	const api = {};

	return {
		userAgent: { state, getters, setters, handlers, api },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useUserAgentContext.Provider>{children}</useUserAgentContext.Provider>;
};
