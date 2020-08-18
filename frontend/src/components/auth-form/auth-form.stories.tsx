import * as React from "react";
import * as Reach from "@reach/router";

import * as Wrappers from "@/wrappers";

import { AuthForm } from "./auth-form";

type Story = {
	component: React.ReactNode;
	title: string;
	excludeStories: RegExp;
};

const story: Story = {
	component: AuthForm,
	title: "AuthForm",
	excludeStories: /.*Data$/,
};

export default story;

export const authFormData = {};

export const Register = () => {
	return (
		<Reach.LocationProvider>
			<Wrappers.Layout>
				<AuthForm formType="Registration" submitText="Register" />
			</Wrappers.Layout>
		</Reach.LocationProvider>
	);
};

export const SignIn = () => {
	return (
		<Reach.LocationProvider>
			<Wrappers.Layout>
				<AuthForm formType="Sign In" submitText="Sign In" />
			</Wrappers.Layout>
		</Reach.LocationProvider>
	);
};
