import * as Session from "./_session";
import * as User from "./_user";
import * as Posts from "./_posts";

export const sessionErrors = Session.errorsReducer;
export const userErrors = () => {};
export const postsErrors = Posts.errorsReducer;
