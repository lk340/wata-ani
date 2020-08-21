import * as React from "react";

import * as Helpers from "@/context/helpers";

type State = {
	isMobile: boolean;
};

const initialState = Object.freeze<State>({
	isMobile: false,
});

export const useUserAgentContext = Helpers.createUseContext(() => {
	const [userAgent, _setUserAgent] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	const setUserAgent = (state: Partial<State>) =>
		_setUserAgent({ ...userAgent, ...state });

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = userAgent;

	const setters = {
		setUserAgent,
	};

	return {
		userAgent: { state, setters },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useUserAgentContext.Provider>{children}</useUserAgentContext.Provider>;
};

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
