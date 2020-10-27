import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

export const Loading = styled(animated.div)`
	${Snippets.fixed("0", "0", "0", "0", 30)};
	${Snippets.flexRowCenter()};
	background-color: ${Colors.MODAL.overlay.light};
`;

export const LoadingCircle = styled(animated.div)`
	${Snippets.makeCircle()};
	${Snippets.square("50px")};
	border-top: ${Colors.PRIMARY_100} solid 6px !important;
	animation: spin 0.6s ease-out infinite;
	-webkit-animation: spin 0.6s ease-out infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@-webkit-keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}
`;

export const LoadingCircleCutout = styled("div")`
	${Snippets.absolute("0px", "auto", "auto", "auto")};
	${Snippets.square("10px")};
	${Snippets.makeCircle()};
	background-color: white;
`;
