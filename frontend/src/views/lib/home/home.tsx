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
	
	const postErrors = ReactRedux.useSelector(state => state.errors.posts);
	const tagErrors = ReactRedux.useSelector(state => state.errors.tags);
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
		personal_rating: 6
	}

	const tagPostData = {
		title: "Ecchi"
	}

	const tagPatchData = {
		title: "Hentai"
	}
	
	return (
		<Styled.Home style={animateBackground}>
			<Components.Navbar />
			<Styled.HomeComponents>

				<div>Home Components</div>
				<br/>
				<div onClick={() => Actions.Posts.thunkReceivePosts(postErrors,dispatch)}>Receive Posts</div>
				<div onClick={() => Actions.Posts.thunkReceivePost(250, postErrors, dispatch)}>Receive Post</div>
				<div onClick={() => Actions.Posts.thunkCreatePost(postPostData, postErrors, dispatch)}>Create Post</div>
				<div onClick={() => Actions.Posts.thunkUpdatePost(14, postPatchData, postErrors, dispatch)}>Update Post</div>
				<div onClick={() => Actions.Posts.thunkDeletePost(130, dispatch)}>Delete Post</div>
				<br/>
				<div onClick={() => Actions.Tags.thunkReceiveTags(tagErrors,dispatch)}>Receive Tags</div>
				<div onClick={() => Actions.Tags.thunkReceiveTag(1, tagErrors, dispatch)}>Receive Tag</div>
				<div onClick={() => Actions.Tags.thunkCreateTag(tagPostData, tagErrors, dispatch)}>Create Tag</div>
				<div onClick={() => Actions.Tags.thunkUpdateTag(5, tagPatchData, tagErrors, dispatch)}>Update Tag</div>
				<div onClick={() => Actions.Tags.thunkDeleteTag(6, dispatch)}>Delete Tag</div>

			</Styled.HomeComponents>
			<Components.NavbarMobile />
		</Styled.Home>
	);
};
