import * as React from "react";
import * as Reach from "@reach/router";

import * as Wrappers from "@/wrappers";

import { Navbar } from "./navbar";

type Story = {
	component: React.ReactNode;
	title: string;
	excludeStories: RegExp;
};

const story: Story = {
	component: Navbar,
	title: "Navbar",
	excludeStories: /.*Data$/,
};

export default story;

export const navbarData = {};

export const Default = () => {
	return (
		<Reach.LocationProvider>
			<Wrappers.Layout>
				<Navbar />
			</Wrappers.Layout>
		</Reach.LocationProvider>
	);
};
