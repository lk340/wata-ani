import * as Redux from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "@/redux/reducers";

export default (preloadedState = {}) => {
	return Redux.createStore(rootReducer, preloadedState, Redux.applyMiddleware(thunk));
};
