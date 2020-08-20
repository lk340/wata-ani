import * as Redux from "redux";

import * as Reducers from "@/redux/reducers";

const entitiesReducer = Redux.combineReducers({});

const errorsReducer = Redux.combineReducers({});

const reducers = Redux.combineReducers({
	currentUser: Reducers.Session.Session,
	entities: entitiesReducer,
	session: Reducers.Session.Session,
	errors: errorsReducer,
});

export default (preloadedState = {}) => Redux.createStore(reducers, preloadedState);
