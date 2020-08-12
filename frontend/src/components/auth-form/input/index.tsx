import * as React from "react";

import * as Styled from "./input.styled";

type InputProps = {
	inputType: "Username" | "Email" | "Password" | "Confirm Password";
};

export const Input = (props: InputProps) => {
	const { inputType } = props;

	const [passwordHidden, setPasswordHidden] = React.useState(true);
	function togglePasswordHidden(): void {
		setPasswordHidden(!passwordHidden);
	}

	const inputIcon =
		inputType === "Username" ? (
			<Styled.InputIconUsername />
		) : inputType === "Email" ? (
			<Styled.InputIconEmail />
		) : (
			<Styled.InputIconPassword />
		);

	const inputField =
		inputType === "Username" ? (
			<Styled.InputUsername />
		) : inputType === "Email" ? (
			<Styled.InputEmail />
		) : inputType === "Password" ? (
			<Styled.InputPassword password_hidden={passwordHidden} />
		) : (
			<Styled.InputPasswordConfirmation password_hidden={passwordHidden} />
		);

	return (
		<Styled.Input>
			<Styled.InputTitle>{inputType}</Styled.InputTitle>
			<Styled.InputFieldGroup>
				{inputIcon}
				{inputField}
				<Styled.InputFieldPasswordIcons
					onClick={togglePasswordHidden}
					input_type={inputType}
				>
					<Styled.InputIconPasswordHide password_hidden={passwordHidden} />
					<Styled.InputIconPasswordShow password_hidden={passwordHidden} />
				</Styled.InputFieldPasswordIcons>
			</Styled.InputFieldGroup>
		</Styled.Input>
	);
};
