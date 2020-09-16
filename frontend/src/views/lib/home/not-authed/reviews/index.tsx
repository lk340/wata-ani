import * as React from "react";

import * as Components from "@/components";

import * as Styled from "./reviews.styled";
import * as Springs from "./reviews.springs";

export const Reviews = () => {
	const animateBody = Springs.copyBody();

	return (
		<Styled.Reviews>
			{/* Images */}
			<Styled.ReviewsImageContainer>
				<Components.RevealOnScroll yOffset={-10} delay={150}>
					<Styled.ReviewsImageLight mode={localStorage.mode} />
					<Styled.ReviewsImageDark mode={localStorage.mode} />
				</Components.RevealOnScroll>
			</Styled.ReviewsImageContainer>

			{/* Copy */}
			<Components.RevealOnScroll yOffset={-10}>
				<Styled.ReviewsCopy>
					{/* Title */}
					<Styled.ReviewsCopyTitle>Reviews</Styled.ReviewsCopyTitle>
					{/* Body */}
					<Styled.ReviewsCopyBodyContainer>
						<Styled.ReviewsCopyBody style={animateBody}>
							WataAni’s one paragraph limit for reviews is largely inspired by the words
							of the late Albert Einstein: “If you can’t explain it simply, you don’t
							understand it well enough.”
						</Styled.ReviewsCopyBody>
						<Styled.ReviewsCopyBody style={animateBody}>
							WataAni wants to encourage its users to really think about the best ways
							they can make reviews as succinctly as they can.
						</Styled.ReviewsCopyBody>
					</Styled.ReviewsCopyBodyContainer>
				</Styled.ReviewsCopy>
			</Components.RevealOnScroll>
		</Styled.Reviews>
	);
};
