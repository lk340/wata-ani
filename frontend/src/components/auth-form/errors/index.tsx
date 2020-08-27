import * as React from "react";
import * as ReactRedux from "react-redux";
import * as UUID from "uuid";

import * as Styled from "./errors.styled";
import * as Springs from "./errors.springs";

export const Errors = () => {
	const animateText = Springs.text();

	const errors = ReactRedux.useSelector((state) => state.errors.session);

	const errorMessages = errors.map((error: string) => {
		return <Styled.ErrorsText key={UUID.v4()}>{error}</Styled.ErrorsText>;
	});

	return <Styled.Errors style={animateText}>{errorMessages}</Styled.Errors>;
};
