import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Gatsby from "gatsby";

import * as Context from "@/context";
import * as Types from "@/utils/types";
import * as Animations from "@/utils/style/animations";

import * as Styled from "./auth-form.styled";
import { Input } from "./input";

export type FormType = "Registration" | "Sign In";

type Props = {
	formType: FormType;
	submitText: "Register" | "Sign In";
};

export const AuthForm = (props: Props) => {
	const { formType, submitText } = props;

	const { authForm } = Context.AuthForm.useAuthFormContext();

	React.useEffect(() => {
		const refreshToken = localStorage.refresh;
		const accessToken = localStorage.access;
		if (refreshToken && accessToken) Gatsby.navigate("/");
	}, []);

	const dispatch = ReactRedux.useDispatch();
	const sessionErrors = ReactRedux.useSelector((state) => state.errors.session);

	const animateTitle = Animations.text();

	return (
		<Styled.AuthForm
			onSubmit={(event: Types.Submit) =>
				authForm.handlers.handleSubmit(event, formType, dispatch, sessionErrors)
			}
		>
			{/* Logo, Title, & Inputs */}
			<Styled.AuthFormLogoTitleInputs>
				{/* Logo */}
				<Styled.AuthFormLogo />
				{/* Title */}
				<Styled.AuthFormTitle style={animateTitle}>{formType}</Styled.AuthFormTitle>
				{/* Input Fields */}
				<InputFields formType={formType} />
			</Styled.AuthFormLogoTitleInputs>

			{/* Submit Button & Redirect */}
			<SubmitButtonAndRedirect formType={formType} submitText={submitText} />
		</Styled.AuthForm>
	);
};

// ==================== //
// ↓↓↓ Input Fields ↓↓↓ //
// ==================== //

const InputFields: React.FC<{ formType: FormType }> = ({ formType }) => {
	const { authForm } = Context.AuthForm.useAuthFormContext();

	return (
		<Styled.AuthFormInputs>
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
		</Styled.AuthFormInputs>
	);
};

// ===================================== //
// ↓↓↓ Submit Button & Redirect Link ↓↓↓ //
// ===================================== //

const SubmitButtonAndRedirect = (props: Props) => {
	const { formType, submitText } = props;

	const animateRedirect = Animations.text();

	return (
		<Styled.AuthFormSubmitRedirect>
			{/* Submit Button */}
			<Styled.AuthFormSubmitButton>{submitText}</Styled.AuthFormSubmitButton>

			{/* Redirect */}
			<Styled.AuthFormRedirect style={animateRedirect}>
				{formType === "Registration" ? "Already a member?" : "Need an account?"}&nbsp;
				{/* Link */}
				<Styled.AuthFormRedirectLink form_type={formType}>
					{formType === "Registration" ? "Sign In" : "Register"}
				</Styled.AuthFormRedirectLink>
			</Styled.AuthFormRedirect>
		</Styled.AuthFormSubmitRedirect>
	);
};
