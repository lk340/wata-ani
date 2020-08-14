import * as React from "react";

import * as Icons from "@/icons/navbar";

import * as Styled from "./navbar.styled";

export const Navbar = () => {
	return (
		<Styled.Navbar>
			<Styled.NavbarMaxWidth>
        <Styled.NavbarLink to="/">
          <Styled.NavbarLogoIcon />
        </Styled.NavbarLink>
      </Styled.NavbarMaxWidth>
		</Styled.Navbar>
	);
};
