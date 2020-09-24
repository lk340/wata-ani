export type Post = {
	title: string;
	seriesTitle: string;
	review: string;
	personalRating: number;
	dateCreated: string;
	tags: number[];
	ratings: number[];
	ratingId: number;
};

export type ReviewCardProps = {
	username: string;
};

export type RatingAndLikesProps = {
	belongsToCurrentUser: boolean;
};

export type RatingProps = {
	postId: number;
	userRating: number | "N/A";
	userRatingCount: number;
	currentUserRating: number;
	userHasRated: boolean;
	ratingId: number;
};

export type LikesProps = {
	likes: number;
};
