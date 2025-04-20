import {
  BlogPostReducerState,
  Actions,
  ActionTypes,
} from "./BlogPostReducer.types";

export const blogPostsReducer = (
  state: BlogPostReducerState,
  action: Actions,
): BlogPostReducerState => {
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
    case ActionTypes.MUTATE_BLOG_POST:
      const mutatedBogPosts = state.blogPosts.map((post) => {
        if (post.id === action.post.id) {
          return { ...action.post };
        }
        return post;
      });
      return {
        ...state,
        blogPosts: mutatedBogPosts,
      };

    default:
      return state;
  }
};

/*
TODO: write logic for patch blogposts
- TODO logic for getting current state
-TODO remove unused states from appContext
 */
