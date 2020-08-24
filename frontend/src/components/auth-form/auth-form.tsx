import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Gatsby from "gatsby";

import * as Context from "@/context";
import * as FormTypes from "@/utils/types/form";
import * as Animations from "@/utils/style/animations";

import * as AuthTypes from "./auth-form.types";
import * as Styled from "./auth-form.styled";
import { Input } from "./input";

type Props = {
	formType: AuthTypes.FormType;
	submitText: "Register" | "Sign In";
};

export const AuthForm = (props: Props) => {
	const { formType, submitText } = props;

	const { authForm } = Context.AuthForm.useAuthFormContext();
	const { theme } = Context.Theme.useThemeContext();

	React.useEffect(() => {
		// "sign-in" and "registration" endpoints are not accessible to users who are logged in.
		if (localStorage.refresh && localStorage.access) {
			Gatsby.navigate("/");
		}
	}, []);

	const dispatch = ReactRedux.useDispatch();

	const animateTitle = Animations.text(theme.state.mode);

	return (
		<Styled.AuthForm
			onSubmit={(event: FormTypes.Submit) =>
				authForm.handlers.handleSubmit(event, formType, dispatch)
			}
		>
			{/* Logo, Title, & Inputs */}
			<Styled.AuthFormLogoTitleInputs>
				{/* Logo */}
				<Styled.AuthFormLogo />
				{/* Title */}
				<Styled.AuthFormTitle style={animateTitle}>{formType}</Styled.AuthFormTitle>
				{/* Input Fields */}
				<InputFields formType={formType} submitText={submitText} />
			</Styled.AuthFormLogoTitleInputs>

			{/* Submit Button & Redirect */}
			<SubmitButtonAndRedirect formType={formType} submitText={submitText} />

			<div onClick={signOut}>SIGN OUT, BABY</div>
		</Styled.AuthForm>
	);
};

// ==================== //
// ↓↓↓ Input Fields ↓↓↓ //
// ==================== //

const InputFields = (props: Props) => {
	const { formType } = props;

	const { authForm } = Context.AuthForm.useAuthFormContext();

	return (
		<Styled.AuthFormInputs>
			<Input
				onChange={authForm.handlers.handleUsernameOrEmailChange}
				formType={formType}
				inputType="Username Or Email"
			/>

			<Input
				onChange={authForm.handlers.handleUsernameChange}
				formType={formType}
				inputType="Username"
			/>
			<Input
				onChange={authForm.handlers.handleEmailChange}
				formType={formType}
				inputType="Email"
			/>
			<Input
				onChange={authForm.handlers.handlePasswordChange}
				formType={formType}
				inputType="Password"
			/>
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

	const { theme } = Context.Theme.useThemeContext();

	const animateRedirect = Animations.text(theme.state.mode);

	return (
		<Styled.AuthFormSubmitRedirect>
			{/* Submit Button */}
			<Styled.AuthFormSubmitButton>{submitText}</Styled.AuthFormSubmitButton>

			{/* Redirect */}
			<Styled.AuthFormRedirect style={animateRedirect}>
				{formType === "Registration" ? "Already a member?" : "Need an account?"}&nbsp;
				<Styled.AuthFormRedirectLink form_type={formType}>
					{formType === "Registration" ? "Sign In" : "Register"}
				</Styled.AuthFormRedirectLink>
			</Styled.AuthFormRedirect>
		</Styled.AuthFormSubmitRedirect>
	);
};
