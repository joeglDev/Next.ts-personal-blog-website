import { PropsWithChildren, createContext, useReducer, useState } from "react";
import { blogPostsReducer } from "../reducers/BlogPostsReducer";
import {
  ActionTypes,
  BlogPostReducerState,
} from "../reducers/BlogPostReducer.types";
import { BlogPost } from "../../mainview/feed/Feed.types";

interface BlogPostContextTypes {
  state: BlogPostReducerState;
  setBlogPosts: (posts: BlogPost[]) => void;
  removeBlogPost: (id: number) => void;
  mutateBlogPost: (post: BlogPost) => void;
  editedBlogPost: BlogPost | null;
  setEditedBlogPost: (post: BlogPost | null) => void;
}
const initialState: BlogPostContextTypes = {
  state: { blogPosts: [] },
  setBlogPosts: () => {},
  removeBlogPost: () => {},
  mutateBlogPost: () => {},
  editedBlogPost: null,
  setEditedBlogPost: () => {},
};

export const BlogPostContext = createContext(initialState);

export const BlogPostContextProvider = (props: PropsWithChildren) => {
  const [state, dispatch] = useReducer(blogPostsReducer, { blogPosts: [] });
  const setBlogPosts = (posts: BlogPost[]) =>
    dispatch({ type: ActionTypes.SET_BLOG_POST, blogPosts: [...posts] });
  const removeBlogPost = (id: number) =>
    dispatch({ type: ActionTypes.DELETE_BLOG_POST, blogPostId: id });
  const mutateBlogPost = (mutatedPost: BlogPost) =>
    dispatch({ type: ActionTypes.MUTATE_BLOG_POST, post: mutatedPost });

  const [editedBlogPost, setEditedBlogPost] = useState<BlogPost | null>(null);

  return (
    <BlogPostContext.Provider
      value={{
        state,
        setBlogPosts,
        removeBlogPost,
        mutateBlogPost,
        editedBlogPost,
        setEditedBlogPost,
      }}
    >
      {props.children}
    </BlogPostContext.Provider>
  );
};
