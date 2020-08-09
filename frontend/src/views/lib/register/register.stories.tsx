import * as React from "react";

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
	// Our exports that end in "Data" are not stories. (i.e. ignore taskData & actionsData)
	excludeStories: /.*Data$/,
};

export default story;

export const registerData = {};

export const Default = () => {
	return (
		<Wrappers.Layout>
			<Register />
		</Wrappers.Layout>
	);
};
