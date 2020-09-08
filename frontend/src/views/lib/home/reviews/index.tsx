import * as React from "react";

import * as Components from "@/components";

import * as Styled from "./reviews.styled";
import * as Springs from "./reviews.springs";

export const Reviews = () => {
	const animateBody = Springs.copyBody();

	return (
		<Styled.Reviews>
			<Styled.ReviewsImageContainer>
				<Styled.ReviewsImageLight mode={localStorage.mode} />
				<Styled.ReviewsImageDark mode={localStorage.mode} />
			</Styled.ReviewsImageContainer>

			<Styled.ReviewsCopy>
				<Styled.ReviewsCopyTitle>Reviews</Styled.ReviewsCopyTitle>
				<Styled.ReviewsCopyBodyContainer>
					<Styled.ReviewsCopyBody style={animateBody}>
						WataAni’s one paragraph limit for reviews is largely inspired by the words of
						the late Albert Einstein: “If you can’t explain it simply, you don’t
						understand it well enough.”
					</Styled.ReviewsCopyBody>
					<Styled.ReviewsCopyBody style={animateBody}>
						WataAni wants to encourage its users to really think about the best ways they
						can make reviews as succinctly as they can.
					</Styled.ReviewsCopyBody>
				</Styled.ReviewsCopyBodyContainer>
			</Styled.ReviewsCopy>
		</Styled.Reviews>
	);
};
