import * as React from "react";

import * as Styled from "./tag.styled";
import * as Springs from "./tag.springs";

import { SelectedTags } from "../index";

type Props = {
	tagId: string;
	title: string;
	margin: boolean;
	selectedTags: SelectedTags;
	addToSelectedTags: Function;
	removeFromSelectedTags: Function;
	isTagSelected: Function;
};

export const Tag = (props: Props) => {
	const [selected, setSelected] = React.useState(false);

	const selectedTagIds = Object.keys(props.selectedTags);
	React.useEffect(() => {
		if (selectedTagIds.length > 0) {
			if (selectedTagIds.includes(props.tagId)) setSelected(true);
			else setSelected(false);
		}

		console.log("Tag Ids:", selectedTagIds);
	}, [selectedTagIds.length]);

	function handleClick(): void {
		if (props.isTagSelected(props.tagId)) {
			props.removeFromSelectedTags(props.tagId);
			setSelected(false);
		} else {
			props.addToSelectedTags(props.tagId);
			setSelected(true);
		}
	}

	const animateTag = Springs.tag(selected);

	return (
		<Styled.Tag onClick={handleClick} margin={props.margin.toString()} style={animateTag}>
			{props.title}
		</Styled.Tag>
	);
};
