import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";

// =========== //
// ↓↓↓ Tag ↓↓↓ //
// =========== //

type TagProps = { margin: string };

export const Tag = styled(animated.div)<TagProps>`
	margin-right: ${(props) => (props.margin === "true" ? "10px" : "0px")};
	padding: 10px 14px;
	border-radius: ${Constants.borderRadius.components.post.tag};
	font-size: ${Constants.fontSizes.components.post.tag};
	font-weight: 400;
	cursor: pointer;
`;
