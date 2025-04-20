import { ActionDispatch, useContext } from "react";
import { WarningBanner } from "../../WarningBanner";
import { FeedWrapper } from "./Feed.style";
import { context } from "../../Context";
import { BlogPostCard } from "./blogpostCard/BlogPostCard";
import { BlogPost } from "./Feed.types";
import { Actions, ActionTypes } from "../../BlogPostsReducer";
import { BlogPostErrors } from "../../../lib/blog-posts/blogPostErrors";

interface FeedProps {
  dispatch: ActionDispatch<[action: Actions]>;
  blogPosts: BlogPost[] | undefined;
}

export const Feed = ({ blogPosts, dispatch }: FeedProps) => {
  const { lightMode } = useContext(context);

  return (
    <FeedWrapper lightMode={lightMode}>
      {blogPosts && blogPosts.length ? (
        blogPosts.map((post: BlogPost) => (
          <BlogPostCard post={post} key={post.id} dispatch={dispatch} />
        ))
      ) : (
        <WarningBanner value={BlogPostErrors.noPostsFoundWarning} />
      )}
    </FeedWrapper>
  );
};
