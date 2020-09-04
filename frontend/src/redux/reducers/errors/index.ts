import * as Session from "./_session";
import * as User from "./_user";
import * as Posts from "./_posts";
import * as Tags from "./_tags";

export const sessionErrorsReducer = Session.errorsReducer;
export const userErrorsReducer = () => {};
export const postsErrorsReducer = Posts.errorsReducer;
export const tagsErrorsReducer = Tags.tagsReducer;
