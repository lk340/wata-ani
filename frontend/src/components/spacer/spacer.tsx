import * as React from "react";

import * as Styled from "./spacer.styled";

type Props = {
	width?: string;
	height?: string;
};

export const Spacer = (props: Props) => {
	const { width, height } = props;

	return <Styled.Spacer width={width} height={height} />;
};
