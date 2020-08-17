import * as React from "react";
import { animated } from "react-spring";

import * as Types from "./__types";
import * as Springs from "./navbar.springs";


export const LikeHollow = (props: Types.Props) => {
	const { width, fill, mode, state } = props;

	const w = width || "10";
	const f = fill || "#6ba6ff";

	const animateFill = Springs.fill(mode, state);

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={w} viewBox="0 0 10 10" fill="none">
			<animated.path
				d="M9.758 2.336a3.01 3.01 0 0 0-.659-.958 3.06 3.06 0 0 0-.972-.642A3.07 3.07 0 0 0 6.942.5 3.09 3.09 0 0 0 5.33.951a3.02 3.02 0 0 0-.33.233c-.104-.085-.214-.162-.33-.233A3.09 3.09 0 0 0 3.059.5a3.07 3.07 0 0 0-1.185.235c-.363.15-.69.367-.972.642a2.99 2.99 0 0 0-.659.958A2.97 2.97 0 0 0 0 3.515a3.35 3.35 0 0 0 .235 1.196c.13.34.318.696.558 1.053.38.566.902 1.156 1.55 1.755 1.074.992 2.138 1.677 2.183 1.705L4.8 9.4a.37.37 0 0 0 .399 0l.274-.176a17.55 17.55 0 0 0 2.183-1.705c.648-.598 1.17-1.19 1.55-1.755.24-.358.428-.712.558-1.053A3.35 3.35 0 0 0 10 3.515a2.95 2.95 0 0 0-.242-1.18zM5 8.485S.88 5.844.88 3.515c0-1.18.976-2.136 2.18-2.136.846 0 1.58.472 1.94 1.162.36-.7 1.095-1.162 1.94-1.162 1.204 0 2.18.956 2.18 2.136 0 2.33-4.12 4.97-4.12 4.97z"
				fill={f}
				style={animateFill}
			/>
		</svg>
	);
};
