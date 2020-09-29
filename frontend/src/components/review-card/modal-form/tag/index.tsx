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

	React.useEffect(() => {
		// console.log(props.title, ":", reviewCardTags.getters.isTagSelected(props.title));
		console.log(props.title, ":", !!reviewCardTags.state.tags[props.title]);

		// if (reviewCardTags.getters.isTagSelected(props.title)) {
		// 	setSelected(true);
		// } else {
		// 	setSelected(false);
		// }
	}, [reviewCardTags.state.tags]);

	function handleClick(): void {
		if (selected) reviewCardTags.setters.removeTag(props.title);
		else reviewCardTags.setters.addTag(props.title);
	}

	const animateTag = Springs.tag(selected);

	// console.log("Title:", props.title);
	console.log("Tags:", reviewCardTags.state.tags);
	// console.log(`${props.title}'s selected is ${selected}`);
	// console.log(`${props.title}: ${reviewCardTags.getters.isTagSelected(props.title)}`);
	// console.log(`${props.title} Selected: ${selected}`);

	return (
		<Styled.Tag onClick={handleClick} margin={props.margin.toString()} style={animateTag}>
			{props.title}
		</Styled.Tag>
	);
};
