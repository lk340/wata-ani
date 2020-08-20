import * as React from "react";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";

import * as Reducers from "@/redux/reducers";

const reducers = Redux.combineReducers({
	currentUser: Reducers.User.CurrentUser,
});

const store = Redux.createStore(reducers);

type Props = { children: React.ReactNode };

export const ReduxStore = (props: Props) => {
	const { children } = props;

	return <ReactRedux.Provider store={store}>{children}</ReactRedux.Provider>;
};
