import { useContext, useState } from "react";
import { BlogPost } from "./Feed.types";
import { BlogPostCardFlex, BlogPostCardwrapper } from "./Feed.style";
import { context } from "../../Context";
import { LikeButton, LikesText } from "./BlogPostCard.style";
import { deleteBlogPostController } from "../../../lib/blog-posts/blogPostController";

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const { title, likes, author, content, timeStamp, id } = post;
  const { lightMode, currentUser, blogPosts, setBlogPosts } =
    useContext(context);
  const [liked, setLiked] = useState(false);
  const [likedCount, setLikedCount] = useState(0);

  const dateTime = new Date(timeStamp);
  const years = dateTime.getFullYear();
  const months =
    dateTime.getMonth() < 10 ? `0${dateTime.getMonth()}` : dateTime.getMonth();
  const days =
    dateTime.getDay() < 10 ? `0${dateTime.getDay()}` : dateTime.getDay();
  const dateToDisplay = `${years}-${months}-${days}`;

  const handleLike = () => {
    const isFirstLike = !liked;
    if (isFirstLike) {
      //optimistic rendering
      setLikedCount(likedCount + 1);
    } else {
      //optimistic rendering
      setLikedCount(likedCount - 1);
      //remove like from api
    }

    setLiked(!liked);
  };

  const handleDeletePost = async (id: number) => {
    const res = await deleteBlogPostController(id);
    const newPosts = blogPosts.filter((post) => post.id !== id);
    setBlogPosts(newPosts);
  };

  return (
    <BlogPostCardwrapper lightMode={lightMode}>
      <h2>{title}</h2>
      <p>{content}</p>

      <BlogPostCardFlex>
        <p>{dateToDisplay}</p>
        <LikeButton onClick={handleLike} lightMode={lightMode} liked={liked}>
          <LikesText>{likes.length + likedCount}</LikesText>
        </LikeButton>
        <p>{author}</p> {/*link to author bio */}
        {author === currentUser ? (
          <button onClick={() => handleDeletePost(id)}>delete post</button>
        ) : null}
      </BlogPostCardFlex>
    </BlogPostCardwrapper>
  );
};
