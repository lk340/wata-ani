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
	const tagError = ReactRedux.useSelector(state => state.errors.tags);
	
	const dispatch = ReactRedux.useDispatch();

	const postPostData = {
		title: "Ash, the Chosen One",
		series_title: "Pokémon the Movie 2000",
		text: "Lest the world turns to ash.",
		personal_rating: 7,
		author: currentUser.id
	}

	const postPatchData = {
		title: "Ash, the Chosen Two",
		text: "Lemons!",
		personal_rating: 6,
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
				Home Components

				<br/>

				<div onClick={() => Actions.Posts.thunkReceivePosts(postError,dispatch)}>Receive Posts</div>
				<div onClick={() => Actions.Posts.thunkReceivePost(60, postError, dispatch)}>Receive Post</div>
				<div onClick={() => Actions.Posts.thunkCreatePost(postPostData, dispatch)}>Create Post</div>
				<div onClick={() => Actions.Posts.thunkUpdatePost(3, postPatchData, dispatch)}>Update Post</div>
				<div onClick={() => Actions.Posts.thunkDeletePost(3, dispatch)}>Delete Post</div>

				<br/>

				<div onClick={() => Actions.Tags.thunkReceiveTags(tagError, dispatch)}>Receive Tags</div>
				<div onClick={() => Actions.Tags.thunkReceiveTag(1, tagError, dispatch)}>Receive Tag</div>
				<div onClick={() => Actions.Tags.thunkCreateTag(tagPostData, tagError, dispatch)}>Create Tag</div>
				<div onClick={() => Actions.Tags.thunkUpdateTag(2, tagPatchData, tagError, dispatch)}>Update Tag</div>
				<div onClick={() => Actions.Tags.thunkDeleteTag(2, tagError, dispatch)}>Delete Tag</div>

			</Styled.HomeComponents>
			<Components.NavbarMobile />
		</Styled.Home>
	);
};
