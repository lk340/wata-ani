import * as React from "react";
import * as Reach from "@reach/router";

import * as Wrappers from "@/wrappers";

import { Hamburger } from "./hamburger";

type Story = {
	component: React.ReactNode;
	title: string;
	excludeStories: RegExp;
};

const story: Story = {
	component: Hamburger,
	title: "Hamburger",
	excludeStories: /.*Data$/,
};

export default story;

export const hamburgerData = {};

export const Default = () => {
	return (
		<Reach.LocationProvider>
			<Wrappers.Layout>
				<Hamburger />
			</Wrappers.Layout>
		</Reach.LocationProvider>
	);
};
