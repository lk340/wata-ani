import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Context from "@/context";
import * as Functions from "@/utils/functions";
import * as Types from "@/utils/types";

import * as OptionStyled from "../navbar-options.styled";
import * as OptionSprings from "../navbar-options.springs";

export const Settings = () => {
	const {
		navbarOptionsSettings,
	} = Context.NavbarOptionsSettings.useNavbarOptionsSettings();
	const { navbar } = Context.Navbar.useNavbarContext();
	const { userAgent } = Context.UserAgent.useUserAgentContext();

	// --- Fetching Redux State --- //
	const dispatch = ReactRedux.useDispatch();
	const currentUser = Functions.getSession();
	const userErrorsRedux = Functions.getSessionErrors();

	React.useEffect(() => {
		if (currentUser.id) {
			navbarOptionsSettings.setters.setNavbarOptionsSettings({
				username: currentUser.username,
				email: currentUser.email,
			});
		}
	}, [currentUser.id]);

	// --- Animations --- //
	const transitionAnimation = OptionSprings.transition(
		navbar.state.settings,
		userAgent.state.isMobile,
	);

	const animateWrapper = OptionSprings.wrapper();
	const animateHeader = OptionSprings.header();
	const animateInput = OptionSprings.input();

	return transitionAnimation.map(({ item, key, props }) => {
		return (
			item && (
				<OptionStyled.Container key={key} style={props}>
					<OptionStyled.Wrapper style={animateWrapper}>
						{/* Header */}
						<OptionStyled.Header style={animateHeader}>
							<OptionStyled.HeaderTitle>Settings</OptionStyled.HeaderTitle>
							<OptionStyled.HeaderClose onClick={navbar.setters.closeAll} />
						</OptionStyled.Header>

						{/* Body */}
						<OptionStyled.Body>
							{/* Form */}
							<OptionStyled.Form
								onSubmit={(event: Types.Submit) =>
									navbarOptionsSettings.handlers.handleSubmit(
										event,
										navbar.setters.closeAll,
										currentUser.id,
										dispatch,
										userErrorsRedux,
									)
								}
							>
								{/* Username Input */}
								<OptionStyled.FormGroup>
									<FormTitleGroup
										title="Username"
										characterCount={navbarOptionsSettings.state.username.length}
										errorMessage={navbarOptionsSettings.state.usernameError}
									/>
									<OptionStyled.FormInput
										onChange={(event: Types.Input) =>
											navbarOptionsSettings.handlers.handleChange(event, "username")
										}
										placeholder="Enter a new username."
										value={navbarOptionsSettings.state.username}
										style={animateInput}
									/>
								</OptionStyled.FormGroup>

								{/* Email Input */}
								<OptionStyled.FormGroup>
									<FormTitleGroup
										title="Email"
										characterCount={navbarOptionsSettings.state.email.length}
										errorMessage={navbarOptionsSettings.state.emailError}
									/>
									<OptionStyled.FormInput
										onChange={(event: Types.Input) =>
											navbarOptionsSettings.handlers.handleChange(event, "email")
										}
										placeholder="Enter a new email."
										value={navbarOptionsSettings.state.email}
										style={animateInput}
									/>
								</OptionStyled.FormGroup>

								{/* Current Password Input */}
								<OptionStyled.FormGroup>
									<FormTitleGroup
										title="Current Password"
										characterCount={navbarOptionsSettings.state.currentPassword.length}
										errorMessage={navbarOptionsSettings.state.currentPasswordError}
									/>
									<OptionStyled.FormInput
										onChange={(event: Types.Input) =>
											navbarOptionsSettings.handlers.handleChange(
												event,
												"currentPassword",
											)
										}
										placeholder="Enter your current password."
										style={animateInput}
									/>
								</OptionStyled.FormGroup>

								{/* New Password Input */}
								<OptionStyled.FormGroup>
									<FormTitleGroup
										title="New Password"
										characterCount={navbarOptionsSettings.state.newPassword.length}
										errorMessage={navbarOptionsSettings.state.newPasswordError}
									/>
									<OptionStyled.FormInput
										onChange={(event: Types.Input) =>
											navbarOptionsSettings.handlers.handleChange(event, "newPassword")
										}
										placeholder="Enter a new password."
										style={animateInput}
									/>
								</OptionStyled.FormGroup>

								{/* New Password Confirm Input */}
								<OptionStyled.FormGroup>
									<FormTitleGroup
										title="Confirm New Password"
										characterCount={navbarOptionsSettings.state.newPasswordConfirm.length}
										errorMessage={navbarOptionsSettings.state.newPasswordError}
									/>
									<OptionStyled.FormInput
										onChange={(event: Types.Input) =>
											navbarOptionsSettings.handlers.handleChange(
												event,
												"newPasswordConfirm",
											)
										}
										placeholder="Confirm new password."
										style={animateInput}
									/>
								</OptionStyled.FormGroup>

								{/* Submit Button */}
								<OptionStyled.FormSubmitButton>Submit</OptionStyled.FormSubmitButton>
							</OptionStyled.Form>
						</OptionStyled.Body>
					</OptionStyled.Wrapper>
				</OptionStyled.Container>
			)
		);
	});
};

// ======================== //
// ↓↓↓ Form Title Group ↓↓↓ //
// ======================== //

type FormTitleGroupProps = {
	title: string;
	characterCount?: number;
	errorMessage: string;
};

const FormTitleGroup = (props: FormTitleGroupProps) => {
	const animateCharacterCount = OptionSprings.characterCount();
	const animateError = OptionSprings.error();

	let characterCount: React.ReactNode | "" = "";

	if (props.characterCount) {
		characterCount = (
			<OptionStyled.FormCharacterCount style={animateCharacterCount}>
				{props.characterCount}
			</OptionStyled.FormCharacterCount>
		);
	}

	return (
		<>
			<OptionStyled.FormTitle_Count>
				<OptionStyled.FormTitle>{props.title}</OptionStyled.FormTitle>
				{characterCount}
			</OptionStyled.FormTitle_Count>
			<OptionStyled.FormError style={animateError}>
				{props.errorMessage}
			</OptionStyled.FormError>
		</>
	);
};
