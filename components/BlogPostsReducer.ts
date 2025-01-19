import {BlogPost} from "./mainview/feed/Feed.types";

interface SetBlogPostsAction {
    type: "SET_BLOG_POSTS";
    blogPosts: BlogPost[];
}

type Actions = SetBlogPostsAction;

interface State {
    blogPosts: BlogPost[];
}

export const blogPostsReducer = (state: State, action: Actions): State => {
    switch (action.type) {
        case "SET_BLOG_POSTS":
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