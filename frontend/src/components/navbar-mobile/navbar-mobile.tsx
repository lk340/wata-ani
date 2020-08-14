import * as React from "react";

import * as Icons from "@/icons/navbar";
import * as Constants from "@/utils/style/constants";

import * as Styled from "./navbar-mobile.styled";

export const NavbarMobile = () => {
	return (
		<Styled.NavbarMobile>
			<Option
				icon={<Icons.HomeHollow width={Constants.size.components.navbarMobile.icon} />}
				text="Home"
			/>
			<Option
				icon={<Icons.HomeHollow width={Constants.size.components.navbarMobile.icon} />}
				text="Home"
			/>
			<Option
				icon={<Icons.HomeHollow width={Constants.size.components.navbarMobile.icon} />}
				text="Home"
			/>
			<Option
				icon={<Icons.HomeHollow width={Constants.size.components.navbarMobile.icon} />}
				text="Home"
			/>
			<Option
				icon={<Icons.HomeHollow width={Constants.size.components.navbarMobile.icon} />}
				text="Home"
			/>
		</Styled.NavbarMobile>
	);
};

// ====================== //
// ↓↓↓ Option Content ↓↓↓ //
// ====================== //

type OptionProps = {
	icon: React.ReactNode;
	text: string;
};

const Option = (props: OptionProps) => {
	const { icon, text } = props;

	return (
		<Styled.NavbarMobileOption>
			<Styled.NavbarMobileOptionIcon>{icon}</Styled.NavbarMobileOptionIcon>
			<Styled.NavbarMobileOptionText>{text}</Styled.NavbarMobileOptionText>
		</Styled.NavbarMobileOption>
	);
};
