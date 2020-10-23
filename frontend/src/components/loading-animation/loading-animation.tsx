import * as React from "react";

import * as Styled from "./loading-animation.styled";
import * as Springs from "./loading-animation.springs";

export const Loading = () => {
	const animateLoading = Springs.loading();

	return <Styled.Loading>Loading</Styled.Loading>;
};
