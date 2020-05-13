import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./welcome.styled";

import axios from "axios";

export const Welcome = () => {
	const { welcome } = Context.Welcome.useWelcomeContext();

	const { auth } = Context.Auth.useAuthContext();

	// auth.api.signOut();
	// auth.api.signIn("admin", "admin123");

	return <Styled.Hello>{welcome.state.message}</Styled.Hello>;
};
