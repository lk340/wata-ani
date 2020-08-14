import * as React from "react";

import * as Components from "@/components";

import * as Styled from "./home.styled";

export const Home = () => {
	return (
		<Styled.Home>
			<Components.Navbar />
			<Styled.HomeComponents>Home Components</Styled.HomeComponents>
		</Styled.Home>
	);
};
