import {BlogPost} from "./mainview/feed/Feed.types";

export enum ActionTypes {
    SET_BLOG_POST = "SET_BLOG_POST",
}

interface SetBlogPostsAction {
    type: ActionTypes.SET_BLOG_POST;
    blogPosts: BlogPost[];
}

type Actions = SetBlogPostsAction;

interface State {
    blogPosts: BlogPost[];
}

export const blogPostsReducer = (state: State, action: Actions): State => {
    switch (action.type) {
        case ActionTypes.SET_BLOG_POST:
            return {
                blogPosts: action.blogPosts,
            }
        default:
            return state;
    }
};

/*
TODO: write logic for patch blogposts
- write logic for delete blog posts
- remove unused states from context
- possible add reducers to context
 */