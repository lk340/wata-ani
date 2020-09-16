import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Actions from "@/redux/actions";
import * as Types from "@/utils/types";

import * as Styled from "./home.styled";
import * as Springs from "./home.springs";

import { ATF } from "./ATF";
import { Reviews } from "./reviews";
import { Description } from "./description";
import { CTA } from "./CTA";

export const Home = () => {
	Context.Theme.useThemeContext();

	const animateHome = Springs.home();

	return (
		<Styled.Home style={animateHome}>
			<Components.Navbar />
			<Components.NavbarMobile />
			<NotAuthed />
			<Authed />
			<Components.Footer />
		</Styled.Home>
	);
};

// ================== //
// ↓↓↓ Not Authed ↓↓↓ //
// ================== //

const NotAuthed = () => {
	// Sections (when user ISN'T logged in)

	return (
		<Styled.HomeNotAuthed>
			<Styled.HomeNotAuthedSections>
				<ATF />
				<Reviews />
				<Description />
			</Styled.HomeNotAuthedSections>
			<CTA />
		</Styled.HomeNotAuthed>
	);
};

// ============== //
// ↓↓↓ Authed ↓↓↓ //
// ============== //

const username = "WataAni";
const seriesName = "Neon Genesis Evangelion";
const cardTitle = `"Timeless classic" is an understatement.`;
const cardDate = "August 3, 2020";
const cardText = `People refer to this piece as a timeless classic, but that description alone
fails to accurately portray why it has withstood the test of time. Not only are
its animation and character designs fluid and bold, but also, it experiments
with the human psyche - how we react to our surroundings as people, not as a
hyperbolic fictional character. It is this realism that allows us to see
ourselves in the characters' shoes. Evangelion has set the standard for its
descendants.`;

const Authed = () => {
	// Sections (when user IS logged in)

	const dispatch = ReactRedux.useDispatch();
	const currentUserId = ReactRedux.useSelector(
		(state: Types.ReduxState) => state.session.id,
	);
	const isCurrentUser = !!currentUserId;

	const posts = ReactRedux.useSelector((state: Types.ReduxState) => state.entities.posts);
	const postErrors = ReactRedux.useSelector(
		(state: Types.ReduxState) => state.errors.posts,
	);

	const userErrors = ReactRedux.useSelector(
		(state: Types.ReduxState) => state.errors.users,
	);

	React.useEffect(() => {
		if (isCurrentUser) {
			Actions.Posts.thunkGetPosts(dispatch, postErrors);
			Actions.Users.thunkGetUsers(dispatch, userErrors);
		}
	}, [currentUserId]);

	console.log(Object.values(posts));

	const reviewCards = Object.values(posts).map((post: any) => {
		const {
			id,
			title,
			series_title,
			text,
			personal_rating,
			user_rating,
			author,
			tags,
		} = post;

		return (
			<React.Fragment key={id}>
				<Components.ReviewCard
					username={"WataAni"}
					seriesName={series_title}
					title={title}
					date={""}
					text={text}
				/>
			</React.Fragment>
		);
	});

	return (
		<Styled.HomeAuthed>
			<Styled.HomeAuthedSections>
				{reviewCards}

				{/* <Components.ReviewCard
					username={username}
					seriesName={seriesName}
					title={cardTitle}
					date={cardDate}
					text={cardText}
				/> */}
			</Styled.HomeAuthedSections>
			<Components.Pagination />
		</Styled.HomeAuthed>
	);
};

// '14': {
// 	id: 14,
// 	title: 'Ash, the Chosen One',
// 	series_title: 'LAAAAAAA',
// 	text: 'Lest the world turns to ash.',
// 	personal_rating: 6,
// 	user_rating: 10,
// 	author: 2,
// 	tags: null
// },
