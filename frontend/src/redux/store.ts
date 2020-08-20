import * as Redux from "redux";

import * as Reducers from "@/redux/reducers";

const reducers = Redux.combineReducers({
	currentUser: Reducers.User.UserReducer,
});

export const store = Redux.createStore(reducers);
