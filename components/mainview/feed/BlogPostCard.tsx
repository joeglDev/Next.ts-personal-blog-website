import { Fragment, useContext, useEffect, useState } from "react";
import { BlogPost, LikeItem } from "./Feed.types";
import { BlogPostCardFlex, BlogPostCardwrapper } from "./Feed.style";
import { context } from "../../Context";
import { LikeButton, LikesText } from "./BlogPostCard.style";
import { deleteBlogPostController } from "../../../lib/blog-posts/blogPostController";
import { PostButton } from "../SidePanel/NewPostPanel.style";

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const { title, likes, author, content, timeStamp, id } = post;
  const {
    lightMode,
    currentUser,
    blogPosts,
    setBlogPosts,
    setEditBlogPost,
    newlyEditedBlogPost,
    setNewlyEditedBlogPost,
  } = useContext(context);
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

  const editPost = (id: number) => {
    const post = blogPosts.filter((post) => post.id === id);
    setEditBlogPost(post[0]);
  };

  useEffect(() => {
    if (newlyEditedBlogPost) {
      const mappedLikes: LikeItem[] = newlyEditedBlogPost!.Likes.map((like) => {
        return { id: like.Id, username: like.UserName };
      });

      const newPosts = blogPosts.map((post) => {
        if (post.id === newlyEditedBlogPost.Id) {
          const editedPost: BlogPost = {
            id: newlyEditedBlogPost.Id,
            title: newlyEditedBlogPost.Title,
            author: newlyEditedBlogPost.Author!,
            content: newlyEditedBlogPost.Content,
            likes: mappedLikes,
            timeStamp: newlyEditedBlogPost.TimeStamp,
          };
          return editedPost;
        } else return post;
      });
      setBlogPosts(newPosts);
      setNewlyEditedBlogPost(null);
    }
  }, [newlyEditedBlogPost]);

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
          <Fragment>
            <PostButton onClick={() => handleDeletePost(id)}>
              Delete post
            </PostButton>
            <PostButton onClick={() => editPost(id)}>Edit post</PostButton>
          </Fragment>
        ) : null}
      </BlogPostCardFlex>
    </BlogPostCardwrapper>
  );
};
