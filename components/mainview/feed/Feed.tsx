import {useContext, useEffect, useReducer, useState} from "react";
import { getBlogPostServerProps } from "../../../lib/blog-posts/blogPostController";
import { WarningBanner } from "../../WarningBanner";
import { FeedWrapper } from "./Feed.style";
import { context } from "../../Context";
import { BlogPostCard } from "./blogpostCard/BlogPostCard";
import { BlogPost } from "./Feed.types";
import {blogPostsReducer} from "../../BlogPostsReducer";

interface FeedProps {
  blogPosts: BlogPost[];
}

export const Feed = ({blogPosts}: FeedProps) => {
  const { lightMode } = useContext(context);

  // TODO: abstract
  const noPostsFoundWarning = "404 - Cannot retrieve posts.";

  return (
    <FeedWrapper lightMode={lightMode}>
      {blogPosts.length ? (
        blogPosts.map((post: BlogPost) => (
          <BlogPostCard post={post} key={post.id} />
        ))
      ) : (
        <WarningBanner value={noPostsFoundWarning} />
      )}
    </FeedWrapper>
  );
};
