import { useContext } from "react";
import { WarningBanner } from "../../WarningBanner";
import { FeedWrapper } from "./Feed.style";
import { AppContext } from "../../libs/contexts/AppContext";
import { BlogPostCard } from "./blogpostCard/BlogPostCard";
import { BlogPost } from "./Feed.types";
import { BlogPostErrors } from "../../../lib/blog-posts/blogPostErrors";

interface FeedProps {
  blogPosts: BlogPost[] | undefined;
}

export const Feed = ({ blogPosts }: FeedProps) => {
  const { lightMode } = useContext(AppContext);

  return (
    <FeedWrapper lightMode={lightMode}>
      {blogPosts && blogPosts.length ? (
        blogPosts.map((post: BlogPost) => (
          <BlogPostCard post={post} key={post.id} />
        ))
      ) : (
        <WarningBanner value={BlogPostErrors.noPostsFoundWarning} />
      )}
    </FeedWrapper>
  );
};
