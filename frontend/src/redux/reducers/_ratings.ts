import * as Lodash from "lodash";

import * as Actions from "@/redux/actions";

type State = StateCopy | {};

type StateCopy = {
	[key: string]: Actions.Ratings.Rating;
};

type Action = {
	type:
		| typeof Actions.Ratings.GET_RATINGS
		| typeof Actions.Ratings.GET_RATING
		| typeof Actions.Ratings.CREATE_RATING
		| typeof Actions.Ratings.UPDATE_RATING
		| typeof Actions.Ratings.DELETE_RATING;
	[key: string]: any;
};

export function ratingsReducer(state: State = {}, action: Action) {
	Object.freeze(state);
	const stateCopy: StateCopy = Lodash.merge({}, state);

	switch (action.type) {
		case Actions.Ratings.GET_RATINGS:
			return action.ratings;

		case Actions.Ratings.GET_RATING:
			stateCopy[action.rating.id] = action.rating;
			return stateCopy;

		case Actions.Ratings.CREATE_RATING:
			stateCopy[action.rating.id] = action.rating;
			return stateCopy;

		case Actions.Ratings.UPDATE_RATING:
			stateCopy[action.rating.id] = action.rating;
			return stateCopy;

		case Actions.Ratings.DELETE_RATING:
			delete stateCopy[action.id];
			return stateCopy;

		default:
			return stateCopy;
	}
}
