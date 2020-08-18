import * as React from "react";
import * as Reach from "@reach/router";

import * as Wrappers from "@/wrappers";

import { SignIn } from "./sign-in";

type Story = {
	component: React.ReactNode;
	title: string;
	excludeStories: RegExp;
};

const story: Story = {
	component: SignIn,
	title: "SignIn",
	excludeStories: /.*Data$/,
};

export default story;

export const signInData = {};

export const Default = () => {
	return (
		<Reach.LocationProvider>
			<Wrappers.Layout>
				<SignIn />
			</Wrappers.Layout>
		</Reach.LocationProvider>
	);
};
