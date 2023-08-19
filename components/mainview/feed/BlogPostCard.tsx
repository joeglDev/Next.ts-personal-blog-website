import { useContext, useState } from "react";
import { BlogPost } from "./Feed.types";
import { BlogPostCardFlex, BlogPostCardwrapper } from "./Feed.style";
import { context } from "../../Context";
import { LikeButton, LikesText } from "./BlogPostCard.style";

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const { title, likes, author, content, timeStamp } = post;
  const { lightMode, currentUser } = useContext(context);
  const [liked, setLiked] = useState(false);
  const [likedCount, setLikedCount] = useState(0);

  //get original number of likes from post


  const handleLike = () => {
    const isFirstLike = !liked;
if (isFirstLike) {
  //optimistic rendering
  setLikedCount( likedCount + 1);

} else {
  //optimistic rendering
  setLikedCount( likedCount - 1);
  //remove like from api
}

setLiked(!liked);

  };

  return (
    <BlogPostCardwrapper lightMode={lightMode}>
      <h2>{title}</h2>
      <p>{content}</p>

      <BlogPostCardFlex>
        <p>{timeStamp}</p>
        <LikeButton onClick={handleLike} lightMode={lightMode} liked={liked}><LikesText>{likes + likedCount}</LikesText></LikeButton>
        <p>{author}</p> {/*link to author bio */}
        {author === currentUser ? <button>delete post</button> : null}
      </BlogPostCardFlex>
    </BlogPostCardwrapper>
  );
};
