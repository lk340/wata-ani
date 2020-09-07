import * as React from "react";

import * as Components from "@/components";

import * as Styled from "./cta.styled";
import * as Springs from "./cta.springs";

export const CTA = () => {
	const animateCTA = Springs.CTA();

	return (
		<Styled.CTA style={animateCTA}>
			<Styled.CTAContainer>
				<Styled.CTACopy>
					<Styled.CTACopyTitle>Become A Member Of The Community</Styled.CTACopyTitle>
					<Styled.CTACopyBody>
						Sign up to become a member of the community and gain member perks, such as
						being able to write reviews, favorite reviews, rate reviews, and more!
					</Styled.CTACopyBody>
				</Styled.CTACopy>
				<Components.CTAButton to="/registration" text="Get Started" />
			</Styled.CTAContainer>
		</Styled.CTA>
	);
};
