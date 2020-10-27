import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./loading-animation.styled";
import * as Springs from "./loading-animation.springs";

export const Loading = () => {
	const { loading } = Context.Loading.useLoadingContext();

	const animateLoading = Springs.loading(loading.state.loading);
	const animateCircle = Springs.circle();

	return animateLoading.map(({ item, key, props }) => {
		return (
			item && (
				<Styled.Loading key={key} style={props}>
					<Styled.LoadingCircle style={animateCircle} />
				</Styled.Loading>
			)
		);
	});
};
