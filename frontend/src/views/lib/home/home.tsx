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

	console.log("Current User:", currentUser)
	
	const postError = ReactRedux.useSelector(state => state.errors.posts);
	const dispatch = ReactRedux.useDispatch();

	const postData = {
		title: "Ash, the Chosen One",
		series_title: "Pokémon the Movie 2000",
		text: "Lest the world turns to ash.",
		personal_rating: 7,
		author: currentUser.id
	}

	const patchData = {
		title: "Ash, the Chosen Two",
		text: "Lemons!",
		personal_rating: 6,
	}
	
	return (
		<Styled.Home style={animateBackground}>
			<Components.Navbar />
			<Styled.HomeComponents>
				Home Components

				<div onClick={() => Actions.Posts.thunkReceivePosts(postError,dispatch)}>Receive Posts</div>
				<div onClick={() => Actions.Posts.thunkReceivePost(3, postError, dispatch)}>Receive Post</div>
				<div onClick={() => Actions.Posts.thunkCreatePost(postData, dispatch)}>Create Post</div>
				<div onClick={() => Actions.Posts.thunkUpdatePost(3, patchData, dispatch)}>Update Post</div>
				<div onClick={() => Actions.Posts.thunkDeletePost(3, dispatch)}>Delete Post</div>

			</Styled.HomeComponents>
			<Components.NavbarMobile />
		</Styled.Home>
	);
};
