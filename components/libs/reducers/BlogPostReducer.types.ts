import {BlogPost} from "../../mainview/feed/Feed.types";

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

export interface BlogPostReducerState {
    blogPosts: BlogPost[];
}