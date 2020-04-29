import * as React from "react";

import * as Wrappers from "@/wrappers";
import * as Components from "@/components";

import * as Styled from "./home.styled";

export const Home = () => {
	return (
		<Wrappers.Layout>
			<Styled.Home>
				<Components.Welcome />
			</Styled.Home>
		</Wrappers.Layout>
	);
};
