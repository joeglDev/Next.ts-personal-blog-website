import { useContext } from "react";
import { BlogPost } from "./Feed.types";
import { BlogPostCardFlex, BlogPostCardwrapper } from "./Feed.style";
import { context } from "../../Context";
import { LikeButton } from "./BlogPostCard.style";

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const { title, likes, author, content, timeStamp } = post;
  const { lightMode, currentUser } = useContext(context);

  return (
    <BlogPostCardwrapper lightMode={lightMode}>
      <h2>{title}</h2>
      <p>{content}</p>

      <BlogPostCardFlex>
        <p>{timeStamp}</p>
        <LikeButton lightMode={lightMode}><button>{likes}</button></LikeButton>
        <p>{author}</p> {/*link to author bio */}
        {author === currentUser ? <button>delete post</button> : null}
      </BlogPostCardFlex>
    </BlogPostCardwrapper>
  );
};
