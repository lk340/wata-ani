import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./create.styled";
import * as Springs from "./create.springs";

export const Create = () => {
	const { navbar } = Context.Navbar.useNavbarContext();
	const { userAgent } = Context.UserAgent.useUserAgentContext();

	const transitionAnimation = Springs.transition(
		navbar.state.create,
		userAgent.state.isMobile,
	);

	const animateCreate = Springs.create();
	const animateHeader = Springs.header();
	const animateInput = Springs.input();

	return transitionAnimation.map(({ item, key, props }) => {
		return (
			item && (
				<Styled.CreateContainer key={key} style={props}>
					<Styled.Create style={animateCreate}>
						{/* Header */}
						<Styled.CreateHeader style={animateHeader}>
							<Styled.CreateHeaderTitle>Create A Review</Styled.CreateHeaderTitle>
							<Styled.CreateHeaderClose onClick={navbar.setters.toggleCreate} />
						</Styled.CreateHeader>
						{/* Body */}
						<Styled.CreateBody>
							{/* Body */}
							<Styled.CreateBodyForm>
								<Styled.CreateBodyFormSeriesTitleInput style={animateInput} />
								<Styled.CreateBodyFormPostTitleInput style={animateInput} />
								<Styled.CreateBodyFormReviewTextarea style={animateInput} />
								<Styled.CreateBodyFormSubmitButton>
									Submit
								</Styled.CreateBodyFormSubmitButton>
							</Styled.CreateBodyForm>
						</Styled.CreateBody>
					</Styled.Create>
				</Styled.CreateContainer>
			)
		);
	});
};
