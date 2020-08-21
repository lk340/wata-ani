import * as Redux from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "@/redux/reducers";

export default (preloadedState = {}) => {
	return Redux.createStore(
		rootReducer,
		preloadedState,
		composeWithDevTools(Redux.applyMiddleware(thunk)),
	);
};
