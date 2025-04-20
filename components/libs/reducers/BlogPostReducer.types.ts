import { BlogPost } from "../../mainview/feed/Feed.types";

export enum ActionTypes {
  SET_BLOG_POST = "SET_BLOG_POST",
  DELETE_BLOG_POST = "DELETE_BLOG_POST",
  MUTATE_BLOG_POST = "MUTATE_BLOG_POST",
}

interface SetBlogPostsAction {
  type: ActionTypes.SET_BLOG_POST;
  blogPosts: BlogPost[];
}

interface DeleteBlogPostAction {
  type: ActionTypes.DELETE_BLOG_POST;
  blogPostId: number;
}

interface MutateBlogPostAction {
  type: ActionTypes.MUTATE_BLOG_POST;
  post: BlogPost;
}

export type Actions =
  | SetBlogPostsAction
  | DeleteBlogPostAction
  | MutateBlogPostAction;

export interface BlogPostReducerState {
  blogPosts: BlogPost[];
}
