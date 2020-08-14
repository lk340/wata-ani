import * as React from "react";

import { Props } from "./__types";

export const Search = (props: Props) => {
	const { width, fill } = props;

	const w = width || "10";
	const f = fill || "#6ba6ff";

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={w} fill="none" viewBox="0 0 10 10">
			<path
				fill-rule="evenodd"
				d="M7.577 6.83c.66-.85.97-1.92.87-2.993S7.84 1.77 7.032 1.06a4.23 4.23 0 0 0-5.791.179C.48 2 .036 3.023.002 4.1s.344 2.126 1.056 2.934a4.23 4.23 0 0 0 5.772.541l.023.024 2.244 2.245a.53.53 0 0 0 .374.155.53.53 0 0 0 .374-.155.53.53 0 0 0 .155-.374.53.53 0 0 0-.155-.374L7.577 6.83zM6.48 1.987c.3.294.536.644.7 1.03s.247.8.25 1.22-.08.834-.24 1.222-.394.74-.7 1.036-.648.53-1.036.69-.803.24-1.222.24-.833-.086-1.22-.25-.736-.4-1.03-.7c-.587-.597-.915-1.402-.91-2.24s.338-1.64.93-2.232 1.394-.927 2.23-.93 1.642.324 2.24.912z"
				fill={f}
			/>
		</svg>
	);
};
