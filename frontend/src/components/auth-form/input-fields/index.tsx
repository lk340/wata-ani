import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./input-fields.styled";

import { FormType } from "../auth-form";
import { Input } from "../input";

type Props = { formType: FormType };

export const InputFields = (props: Props) => {
	const { formType } = props;

	const { authForm } = Context.AuthForm.useAuthFormContext();

	return (
		<Styled.InputFields>
			{/* Username Or Email */}
			<Input
				onChange={authForm.handlers.handleUsernameOrEmailChange}
				formType={formType}
				inputType="Username Or Email"
			/>

			{/* Username */}
			<Input
				onChange={authForm.handlers.handleUsernameChange}
				formType={formType}
				inputType="Username"
			/>

			{/* Email */}
			<Input
				onChange={authForm.handlers.handleEmailChange}
				formType={formType}
				inputType="Email"
			/>

			{/* Password */}
			<Input
				onChange={authForm.handlers.handlePasswordChange}
				formType={formType}
				inputType="Password"
			/>

			{/* Confirm Password */}
			<Input
				onChange={authForm.handlers.handlePasswordConfirmationChange}
				formType={formType}
				inputType="Confirm Password"
			/>
		</Styled.InputFields>
	);
};
