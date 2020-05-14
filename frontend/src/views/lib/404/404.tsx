import * as React from "react";

import * as Styled from "./404.styled";

export const NotFound = () => {
	return (
		<Styled.NotFound>
			<Styled.NotFoundHeader>404 NOT FOUND</Styled.NotFoundHeader>
			<Styled.NotFoundBody>
				You just hit a route that doesn't exist... the sadness.
			</Styled.NotFoundBody>
		</Styled.NotFound>
	);
};
