import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./tag.styled";
import * as Springs from "./tag.springs";

type Props = {
	title: string;
	margin: boolean;
};

export const Tag = (props: Props) => {
	const { reviewCardTags } = Context.ReviewCardTags.useReviewCardTagsContext();

	const [selected, setSelected] = React.useState(false);

	function handleClick(): void {
		if (selected) reviewCardTags.setters.removeTag(props.title);
		else reviewCardTags.setters.addTag(props.title);
	}

	const animateTag = Springs.tag(selected);

	return (
		<Styled.Tag onClick={handleClick} margin={props.margin.toString()} style={animateTag}>
			{props.title}
		</Styled.Tag>
	);
};
