import {BlogPostReducerState, Actions, ActionTypes} from "./BlogPostReducer.types";

export const blogPostsReducer = (state: BlogPostReducerState, action: Actions): BlogPostReducerState => {
  switch (action.type) {
    case ActionTypes.SET_BLOG_POST:
      return {
        ...state,
        blogPosts: action.blogPosts,
      };
    case ActionTypes.DELETE_BLOG_POST:
      const postsWithRemoval = state.blogPosts.filter(
        (post) => post.id !== action.blogPostId,
      );
      return {
        ...state,
        blogPosts: postsWithRemoval,
      };
    default:
      return state;
  }
};

/*
TODO: write logic for patch blogposts
- TODO logic for getting current state
-TODO remove unused states from context
 */
