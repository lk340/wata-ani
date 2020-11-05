import * as Redux from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "@/redux/reducers";

// ↓↓↓ Development ↓↓↓ //

// export default (preloadedState = {}) => {
// 	return Redux.createStore(
// 		rootReducer,
// 		preloadedState,
// 		composeWithDevTools(Redux.applyMiddleware(thunk)),
// 	);
// };

// ↓↓↓ Production ↓↓↓ //

export default (preloadedState = {}) => {
	return Redux.createStore(rootReducer, preloadedState, Redux.applyMiddleware(thunk));
};
