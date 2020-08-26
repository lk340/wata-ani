import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Gatsby from "gatsby";

import * as Context from "@/context";
import * as Types from "@/utils/types";
import * as Animations from "@/utils/style/animations";

import * as Styled from "./auth-form.styled";
import { InputFields } from "./input-fields";
import { SubmitButtonAndRedirect } from "./submit-button-and-redirect";

export type FormType = "Registration" | "Sign In";

export type Props = {
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
				<Styled.AuthFormLogo />
				<Styled.AuthFormTitle style={animateTitle}>{formType}</Styled.AuthFormTitle>
				<InputFields formType={formType} />
			</Styled.AuthFormLogoTitleInputs>

			{/* Submit Button & Redirect */}
			<SubmitButtonAndRedirect formType={formType} submitText={submitText} />
		</Styled.AuthForm>
	);
};
