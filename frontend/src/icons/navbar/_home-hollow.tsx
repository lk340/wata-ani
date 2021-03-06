import * as React from "react";
import { animated } from "react-spring";

import * as Types from "./__types";
import * as Springs from "./navbar.springs";

export const HomeHollow = (props: Types.Props) => {
	const { width, fill, mode, state } = props;

	const w = width || "10";
	const f = fill || "#6ba6ff";

	const animateFill = Springs.fill(mode, false);

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={w} viewBox="0 0 10 10" fill="none">
			<g clipPath="url(#A)">
				<animated.path
					d="M9 8.983V3.457l-4-2.44-4 2.44v5.526h2V7.585a2.05 2.05 0 0 1 .586-1.438C3.96 5.765 4.47 5.55 5 5.55s1.04.214 1.414.596A2.05 2.05 0 0 1 7 7.585v1.398h2zM6 10V7.585c0-.27-.105-.528-.293-.72a.99.99 0 0 0-1.414 0c-.188.19-.293.45-.293.72V10H1a.99.99 0 0 1-.707-.298C.105 9.51 0 9.253 0 8.983V3.457a1.03 1.03 0 0 1 .13-.501 1.01 1.01 0 0 1 .356-.371l4-2.44C4.64.05 4.82 0 5 0s.36.05.515.145l4 2.44a1.01 1.01 0 0 1 .356.371 1.03 1.03 0 0 1 .13.501v5.526c0 .27-.105.528-.293.72A.99.99 0 0 1 9 10H6z"
					fill={f}
					style={animateFill}
				/>
			</g>
			<defs>
				<clipPath id="A">
					<animated.path fill="#fff" d="M0 0h10v10H0z" style={animateFill} />
				</clipPath>
			</defs>
		</svg>
	);
};
