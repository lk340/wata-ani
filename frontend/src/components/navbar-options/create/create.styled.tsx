import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

export const CreateFormReviewTextarea = styled(animated.textarea).attrs(() => ({
	placeholder: "Your review here (max 500 characters)",
}))`
	${Snippets.size("400px", "50px")};
	height: 100px;
	margin-bottom: 30px;
	padding: 20px;
	color: inherit;
	border-radius: ${Constants.borderRadius.components.navbarOption.create.form};
	font-size: ${Constants.fontSizes.components.navbarOption.create.form.input};
	outline: none;

	@media (max-width: 625px) {
		width: 100%;
	}
`;
