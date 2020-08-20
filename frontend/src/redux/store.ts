import * as Redux from "redux";
import thunk from "redux-thunk";

import * as Reducers from "@/redux/reducers";

const entitiesReducer = Redux.combineReducers({});

const errorsReducer = Redux.combineReducers({});

const rootReducer = Redux.combineReducers({
	entities: entitiesReducer,
	session: Reducers.Session.Session,
	errors: errorsReducer,
});

export default (preloadedState = {}) => {
	return Redux.createStore(rootReducer, preloadedState, Redux.applyMiddleware(thunk));
};
