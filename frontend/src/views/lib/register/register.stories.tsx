import * as React from "react";
import * as Reach from "@reach/router";

import * as Wrappers from "@/wrappers";

import { Register } from "./register";

type Story = {
	component: React.ReactNode;
	title: string;
	excludeStories: RegExp;
};

const story: Story = {
	component: Register,
	title: "Register",
	excludeStories: /.*Data$/,
};

export default story;

export const registerData = {};

export const Default = () => {
	return (
		<Reach.LocationProvider>
			<Wrappers.Layout>
				<Register />
			</Wrappers.Layout>
		</Reach.LocationProvider>
	);
};
