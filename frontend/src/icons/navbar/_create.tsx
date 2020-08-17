import * as React from "react";
import { animated } from "react-spring";

import * as Types from "./__types";
import * as Springs from "./navbar.springs";

export const Create = (props: Types.Props) => {
	const { width, fill, mode, state } = props;

	const w = width || "10";
	const f = fill || "#6ba6ff";

	const animateFill = Springs.fill(mode, state);

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={w} fill={f} viewBox="0 0 10 10">
			<animated.path d="M6 1a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0V1z" style={animateFill} />
			<animated.path d="M1 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H1z" style={animateFill} />
		</svg>
	);
};
