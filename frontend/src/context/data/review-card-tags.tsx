import * as React from "react";

import * as Helpers from "@/context/helpers";

type Tag = { [key: string]: string };

type State = {
	tags: Tag;
};

const initialState = Object.freeze<State>({
	tags: {},
});

export const useReviewCardTagsContext = Helpers.createUseContext(() => {
	const [reviewCardTags, _setReviewCardTags] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Getters ↓↓↓ //
	// =============== //

	function isTagSelected(tag: string): boolean {
		// console.log("Whoa:", !!reviewCardTags.tags[tag]);

		return !!reviewCardTags.tags[tag];
	}

	function getTags(): string[] {
		return Object.values(reviewCardTags.tags);
	}

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	const setReviewCardTags = (state: Partial<State>): void =>
		_setReviewCardTags({ ...reviewCardTags, ...state });

	function addTag(tag: string): void {
		const newTags = reviewCardTags.tags;
		newTags[tag] = tag;
		setReviewCardTags({ tags: newTags });
	}

	function removeTag(tag: string): void {
		const newTags = reviewCardTags.tags;
		delete newTags[tag];
		setReviewCardTags({ tags: newTags });
	}

	// ================ //
	// ↓↓↓ Handlers ↓↓↓ //
	// ================ //

	// =============== //
	// ↓↓↓ API ↓↓↓ //
	// =============== //

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = reviewCardTags;

	const getters = {
		isTagSelected,
		getTags,
	};

	const setters = {
		setReviewCardTags,
		addTag,
		removeTag,
	};

	const handlers = {};

	const api = {};

	return {
		reviewCardTags: { state, getters, setters, handlers, api },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<useReviewCardTagsContext.Provider>{children}</useReviewCardTagsContext.Provider>
	);
};
