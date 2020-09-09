import * as React from "react";

type Props = {
	fill: string;
	width: string;
};

export const Arrow = (props: Props) => {
	const { fill, width } = props;

	const f = fill || "#6ba6ff";

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width} viewBox="0 0 10 10" fill="none">
			<g clip-path="url(#A)">
				<path
					d="M0 1.11V8.89a1.11 1.11 0 0 0 .325.786 1.11 1.11 0 0 0 .786.325H8.89A1.11 1.11 0 0 0 10 8.889V1.11A1.11 1.11 0 0 0 8.889 0H1.11a1.11 1.11 0 0 0-.786.325A1.11 1.11 0 0 0 0 1.111zm2.222 3.333H5V2.222L7.778 5 5 7.778V5.556H2.222v-1.11z"
					fill={f}
				/>
			</g>
			<defs>
				<clipPath id="A">
					<path fill="#fff" d="M0 0h10v10H0z" />
				</clipPath>
			</defs>
		</svg>
	);
};
