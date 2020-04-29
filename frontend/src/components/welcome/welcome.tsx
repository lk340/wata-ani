import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./welcome.styled";

export const Welcome = () => {
	const { welcome } = Context.welcome.useWelcomeContext();

	return <Styled.Hello>{welcome.state.message}</Styled.Hello>;
};
