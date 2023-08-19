import { useContext, useState } from "react";
import { getBlogPostStaticProps } from "../../../lib/blog-posts/blogPostController";
import { WarningBanner } from "../../WarningBanner";
import { FeedWrapper } from "./Feed.style";
import { context } from "../../Context";
import { BlogPostCard } from "./BlogPostCard";
import { BlogPost } from "./Feed.types";

export const Feed = () => {
  const [foundPosts, setFoundposts] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const { lightMode } = useContext(context);

  const noPostsFoundWarning = "404 - Cannot retrieve posts.";

  const fetchPosts = getBlogPostStaticProps().then((data: BlogPost[]) => setBlogPosts(data));

  return (
    <FeedWrapper lightMode={lightMode}>
      {blogPosts.length ? (
        blogPosts.map((post: BlogPost) => (
          <BlogPostCard post={post} key={post.id} />
        ))
      ) : (
        <WarningBanner value={noPostsFoundWarning} />
      )}
      <button>Post</button>
    </FeedWrapper>
  );
};
