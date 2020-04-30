import * as React from "react";

import * as Wrappers from "@/wrappers";
import * as Components from "@/components";

import * as Styled from "./404.styled";

export const NotFound = () => {
	return (
		<Wrappers.Layout>
			<Components.SEO title="404: Not found" />
			<Styled.NotFound>
				<Styled.NotFoundHeader>404 NOT FOUND</Styled.NotFoundHeader>
				<Styled.NotFoundBody>
					You just hit a route that doesn't exist... the sadness.
				</Styled.NotFoundBody>
			</Styled.NotFound>
		</Wrappers.Layout>
	);
};
