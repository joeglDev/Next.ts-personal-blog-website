import { useContext, useEffect, useState } from "react";
import { getBlogPostServerProps } from "../../../lib/blog-posts/blogPostController";
import { WarningBanner } from "../../WarningBanner";
import { FeedWrapper } from "./Feed.style";
import { context } from "../../Context";
import { BlogPostCard } from "./BlogPostCard";
import { BlogPost } from "./Feed.types";

export const Feed = () => {
  const { lightMode, blogPosts, setBlogPosts } = useContext(context);

  const noPostsFoundWarning = "404 - Cannot retrieve posts.";

  const blogPostData = async () => await getBlogPostServerProps();

  useEffect(() => {
    blogPostData().then((data) => setBlogPosts(data));
  }, [setBlogPosts]);

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
