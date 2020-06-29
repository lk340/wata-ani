import * as React from "react";

import * as Components from "@/components";

import * as Styled from "./home.styled";

export const Home = () => {
	return (
		<Styled.Home>
			<Styled.HomeComponents>
				<Components.Welcome />
			</Styled.HomeComponents>
		</Styled.Home>
	);
};
