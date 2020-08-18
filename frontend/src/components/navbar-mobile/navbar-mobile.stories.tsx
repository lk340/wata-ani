import * as React from "react";
import * as Reach from "@reach/router";

import * as Wrappers from "@/wrappers";

import { NavbarMobile } from "./navbar-mobile";

type Story = {
	component: React.ReactNode;
	title: string;
	excludeStories: RegExp;
};

const story: Story = {
	component: NavbarMobile,
	title: "NavbarMobile",
	excludeStories: /.*Data$/,
};

export default story;

export const navbarMobileData = {};

export const Default = () => {
	return (
		<Reach.LocationProvider>
			<Wrappers.Layout>
				<NavbarMobile />
			</Wrappers.Layout>
		</Reach.LocationProvider>
	);
};
