import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Animations from "@/utils/style/animations";
import * as Constants from "@/utils/style/constants";

import * as Actions from "@/redux/actions";
import * as ReactRedux from "react-redux";

import * as Styled from "./home.styled";

export const Home = () => {
	Context.Theme.useThemeContext();

	const animateBackground = Animations.background(
		Constants.theme.pages.home.background.light,
		Constants.theme.pages.home.background.dark,
	);

	const dispatch = ReactRedux.useDispatch();

	const postData = {
		
	}
	
	return (
		<Styled.Home style={animateBackground}>
			<Components.Navbar />
			<Styled.HomeComponents>
				Home Components

				<div onClick={() => Actions.Posts.thunkReceivePosts(dispatch)}>Receive Posts</div>
				<div onClick={() => Actions.Posts.thunkReceivePost(3, dispatch)}>Receive Post</div>
				<div onClick={() => Actions.Posts.thunkReceivePost(3, dispatch)}>Create Post</div>
				<div onClick={() => Actions.Posts.thunkReceivePost(3, dispatch)}>Update Post</div>
				<div onClick={() => Actions.Posts.thunkReceivePost(3, dispatch)}>Delete Post</div>

			</Styled.HomeComponents>
			<Components.NavbarMobile />
		</Styled.Home>
	);
};
