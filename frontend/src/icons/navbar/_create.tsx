import * as React from "react";

import { Props } from "./__types";

export const Create = (props: Props) => {
	const { width, fill } = props;

	const w = width || "10";
	const f = fill || "#6ba6ff";

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={w} fill={f} viewBox="0 0 10 10">
			<path d="M6 1a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0V1z" />
			<path d="M1 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H1z" />
		</svg>
	);
};
