import {PropsWithChildren, createContext, useReducer, ActionDispatch} from "react";
import { blogPostsReducer } from "../reducers/BlogPostsReducer";
import {Actions, ActionTypes, BlogPostReducerState} from "../reducers/BlogPostReducer.types";
import {BlogPost} from "../../mainview/feed/Feed.types";

interface BlogPostContextTypes {
    state: BlogPostReducerState;
    setBlogPosts: (posts: BlogPost[]) => void;
    removeBlogPost: (id: number) => void;

}
const initialState: BlogPostContextTypes = {state: {blogPosts: []}, setBlogPosts: () => {}, removeBlogPost: () => {}};

export const BlogPostContext = createContext(initialState);

export const BlogPostContextProvider = (props: PropsWithChildren) => {
    const [state, dispatch] = useReducer(blogPostsReducer, { blogPosts: [] });
    const setBlogPosts = (posts: BlogPost[]) => dispatch({ type: ActionTypes.SET_BLOG_POST, blogPosts: [...posts] });
    const removeBlogPost = (id: number) => dispatch({ type: ActionTypes.DELETE_BLOG_POST, blogPostId: id });

    return (
        <BlogPostContext.Provider
            value={{
                state,
                setBlogPosts,
                removeBlogPost
            }}
        >
            {props.children}
        </BlogPostContext.Provider>
    );
};
