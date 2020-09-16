import * as Session from "./_session";
import * as Users from "./_users";
import * as Posts from "./_posts";
import * as Tags from "./_tags";

export const sessionErrorsReducer = Session.errorsReducer;
export const usersErrorsReducer = Users.errorsReducer;
export const postsErrorsReducer = Posts.errorsReducer;
export const tagsErrorsReducer = Tags.tagsReducer;
