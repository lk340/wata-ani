import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Functions from "@/utils/functions";

import * as Styled from "./home.styled";
import * as Springs from "./home.springs";

import { NotAuthed } from "./not-authed";
import { Authed } from "./authed";

export const Home = () => {
	Context.Theme.useThemeContext();

	const [page, setPage] = React.useState<"" | React.ReactNode>("");

	const animateHome = Springs.home();

	const currentUser = Functions.getSession();
	const userLoggedIn = !!currentUser.id;

	React.useEffect(() => {
		setTimeout(() => {
			if (userLoggedIn) setPage(<Authed />);
			else setPage(<NotAuthed />);
		}, 400);
	}, [userLoggedIn]);

	return (
		<Styled.Home style={animateHome}>
			<Components.Navbar />
			<Components.NavbarMobile />

			{/* <NotAuthed /> */}
			{/* <Authed /> */}

			{userLoggedIn ? <Authed /> : <NotAuthed />}
			{/* {page} */}
			<Components.Footer />
		</Styled.Home>
	);
};
