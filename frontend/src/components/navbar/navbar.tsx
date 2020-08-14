import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Icons from "@/icons/navbar";
import * as Constants from "@/utils/style/constants";
import * as Colors from "@/utils/style/colors";

import * as Styled from "./navbar.styled";

import logoJapanese from "@/images/logo/japanese.svg";

export const Navbar = () => {
	const { theme } = Context.Theme.useThemeContext();
	const [fill, setFill] = React.useState("");

	React.useEffect(() => {
		if (theme.state.mode === "light") setFill(Colors.LIGHT.seven);
		else setFill(Colors.LIGHT.five);
	}, [theme.state.mode]);

	return (
		<Styled.Navbar>
			<Styled.NavbarMaxWidth>
				{/* Logo Link */}
				<Styled.NavbarLink to="/">
					<Styled.NavbarLogoIcon />
				</Styled.NavbarLink>

				{/* Links */}
				<Styled.NavbarLinks>
					{/* Home */}
					<Styled.NavbarLink to="/">
						<Icons.HomeHollow width={Constants.size.components.navbar.icon} fill={fill} />
					</Styled.NavbarLink>
					<Components.Spacer width={Constants.size.components.navbar.spacer} />

					{/* Like */}
					<Styled.NavbarModalButton>
						<Icons.LikeHollow width={Constants.size.components.navbar.icon} fill={fill} />
					</Styled.NavbarModalButton>
					<Components.Spacer width={Constants.size.components.navbar.spacer} />

					{/* Create */}
					<Styled.NavbarModalButton>
						<Icons.Plus width={Constants.size.components.navbar.icon} fill={fill} />
					</Styled.NavbarModalButton>
					<Components.Spacer width={Constants.size.components.navbar.spacer} />

					{/* Search */}
					<Styled.NavbarModalButton>
						<Icons.Search width={Constants.size.components.navbar.icon} fill={fill} />
					</Styled.NavbarModalButton>
					<Components.Spacer width={Constants.size.components.navbar.spacer} />

					{/* Settings */}
					<Styled.NavbarModalButton>
						<Icons.SettingsHollow
							width={Constants.size.components.navbar.icon}
							fill={fill}
						/>
					</Styled.NavbarModalButton>
					<Components.Spacer width={Constants.size.components.navbar.spacer} />

					{/* Profile */}
					<Styled.NavbarLink to="/">
						<Styled.NavbarProfileIcon src={logoJapanese} />
					</Styled.NavbarLink>
					<Components.Spacer width={Constants.size.components.navbar.spacer} />

					{/* Theme */}
					<Styled.NavbarThemeButton onClick={theme.setters.toggleMode}>
						<Styled.NavbarThemeButtonLightIcon mode={theme.state.mode} />
						<Styled.NavbarThemeButtonDarkIcon mode={theme.state.mode} />
					</Styled.NavbarThemeButton>

					{/* Sign In */}

					{/* Register */}
				</Styled.NavbarLinks>
			</Styled.NavbarMaxWidth>
		</Styled.Navbar>
	);
};
