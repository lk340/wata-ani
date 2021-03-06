import * as React from "react";
import { animated } from "react-spring";

import * as Springs from "./profile.springs";

type Props = {
	fill: string;
};

export const Reviews = (props: Props) => {
	const { fill } = props;

	const f = fill || "#6ba6ff";

	const animateFill = Springs.fill();

	return (
		<animated.svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 10 10"
			fill={f}
			style={animateFill}
		>
			<path d="M.606 6.663l-.6 2.555c-.02.093-.02.2.002.283a.64.64 0 0 0 .124.255.64.64 0 0 0 .496.241.75.75 0 0 0 .134 0l2.565-.592L8.26 4.488 5.512 1.74.606 6.663zM9.8 2.026L7.975.188A.65.65 0 0 0 7.52 0c-.17 0-.333.068-.454.188L6.047 1.2l2.746 2.75 1.02-1.022a.72.72 0 0 0 .14-.2c.033-.07.05-.162.048-.247a.67.67 0 0 0-.05-.247.67.67 0 0 0-.14-.21z" />
		</animated.svg>
	);
};
