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

	const currentUser = ReactRedux.useSelector(state => state.session);

	// console.log("Current User:", currentUser)
	
	const postError = ReactRedux.useSelector(state => state.errors.posts);
	const dispatch = ReactRedux.useDispatch();

	const postPostData = {
		title: "AHHHHHH",
		series_title: "LAAAAAAA",
		text: "Who are you?",
		personal_rating: 7,
		author: currentUser.id
	}

	const postPatchData = {
		title: "Ash, the Chosen One",
		text: "Lest the world turns to ash.",
		personal_rating: 6,
	}
	
	return (
		<Styled.Home style={animateBackground}>
			<Components.Navbar />
			<Styled.HomeComponents>

				<div>Home Components</div>
				<br/>
				<div onClick={() => Actions.Posts.thunkReceivePosts(postError,dispatch)}>Receive Posts</div>
				<div onClick={() => Actions.Posts.thunkReceivePost(13, postError, dispatch)}>Receive Post</div>
				<div onClick={() => Actions.Posts.thunkCreatePost(postPostData, postError, dispatch)}>Create Post</div>
				<div onClick={() => Actions.Posts.thunkUpdatePost(11, postPatchData, postError, dispatch)}>Update Post</div>
				<div onClick={() => Actions.Posts.thunkDeletePost(34, postError, dispatch)}>Delete Post</div>

			</Styled.HomeComponents>
			<Components.NavbarMobile />
		</Styled.Home>
	);
};
