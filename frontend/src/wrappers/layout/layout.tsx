import * as React from "react";

import { Providers } from "@/context/providers";
import { Observer } from "../observer/observer";
import * as Snippets from "@/utils/style/snippets";

import * as Styled from "./layout.styled";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	React.useEffect(() => Snippets.checkWebGLAvailable(), []);

	return (
		<Providers>
			<Observer>
				<Styled.Layout>
					<Styled.LayoutGlobalStyles />
					<Styled.LayoutChildren>{children}</Styled.LayoutChildren>
				</Styled.Layout>
			</Observer>
		</Providers>
	);
};
