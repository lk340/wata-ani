import styled from "styled-components";

type Spacer = {
	width?: string;
	height?: string;
};

export const Spacer = styled("div")<Spacer>`
	width: ${(props) => props.width || "0px"};
	height: ${(props) => props.height || "0px"};
`;
