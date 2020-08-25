import * as React from "react";

import * as Context from "@/context";
import * as Animations from "@/utils/style/animations";

import * as Styled from "./theme-button.styled";

export const ThemeButton = () => {
	const { theme } = Context.Theme.useThemeContext();

	const animateLightModeIcon = Animations.opacity(theme.state.mode === "dark");

	return (
		<Styled.ThemeButton onClick={theme.setters.toggleMode}>
			<Styled.ThemeButtonLightModeIcon style={animateLightModeIcon} />
			<Styled.ThemeButtonDarkModeIcon />
		</Styled.ThemeButton>
	);
};
