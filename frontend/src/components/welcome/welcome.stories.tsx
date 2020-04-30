import * as React from "react";

import { Providers } from "@/context/providers";

import { Welcome } from "./welcome";

type Story = {
	component: React.ReactNode;
	title: string;
	excludeStories: RegExp;
};

const story: Story = {
	component: Welcome,
	title: "Welcome",
	// Our exports that end in "Data" are not stories. (i.e. ignore taskData & actionsData)
	excludeStories: /.*Data$/,
};

export default story;

export const taskData = {};

export const Default = () => {
	return (
		<Providers>
			<Welcome />
		</Providers>
	);
};
