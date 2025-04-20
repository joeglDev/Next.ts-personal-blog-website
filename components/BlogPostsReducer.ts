import { BlogPost } from "./mainview/feed/Feed.types";

export enum ActionTypes {
  SET_BLOG_POST = "SET_BLOG_POST",
  DELETE_BLOG_POST = "DELETE_BLOG_POST",
}

interface SetBlogPostsAction {
  type: ActionTypes.SET_BLOG_POST;
  blogPosts: BlogPost[];
}

interface DeleteBlogPostAction {
  type: ActionTypes.DELETE_BLOG_POST;
  blogPostId: number;
}

export type Actions = SetBlogPostsAction | DeleteBlogPostAction;

interface State {
  blogPosts: BlogPost[];
}

export const blogPostsReducer = (state: State, action: Actions): State => {
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
- remove unused states from context
- possible add reducers to context
 */
