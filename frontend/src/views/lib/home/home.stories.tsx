import * as React from "react";
import * as Reach from "@reach/router";

import * as Wrappers from "@/wrappers";

import { Home } from "./home";

type Story = {
	component: React.ReactNode;
	title: string;
	excludeStories: RegExp;
};

const story: Story = {
	component: Home,
	title: "Home",
	excludeStories: /.*Data$/,
};

export default story;

export const homeData = {};

export const Default = () => {
	return (
		<Reach.LocationProvider>
			<Wrappers.Layout>
				<Home />
			</Wrappers.Layout>
		</Reach.LocationProvider>
	);
};
