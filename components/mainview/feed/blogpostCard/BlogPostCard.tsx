import { Fragment, useContext, useEffect, useState } from "react";
import { BlogPost } from "../Feed.types";
import { BlogPostCardFlex, BlogPostCardWrapper } from "../Feed.style";
import { AppContext } from "../../../libs/contexts/AppContext";
import { LikeButton, LikesText } from "./BlogPostCard.style";
import { deleteBlogPostController } from "../../../../lib/blog-posts/blogPostController";
import { PostButton } from "../../SidePanel/NewPostPanel.style";
import { BlogpostImageContainer } from "../blogpostImageContainer/BlogpostImageContainer";
import { BlogPostContext } from "../../../libs/contexts/BlogPostsContext";

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const { title, likes, author, content, timeStamp, id: blogpostId } = post;
  const { lightMode, currentUser } = useContext(AppContext);

  const [liked, setLiked] = useState(false);
  const [likedCount, setLikedCount] = useState(0);

  const { removeBlogPost, state, editedBlogPost, setEditedBlogPost } =
    useContext(BlogPostContext);

  const { blogPosts } = state;
  const dateTime = new Date(timeStamp);
  const years = dateTime.getFullYear();
  const months =
    dateTime.getMonth() < 10
      ? `0${dateTime.getMonth() + 1}`
      : dateTime.getMonth() + 1;
  const days =
    dateTime.getDate() < 10 ? `0${dateTime.getDate()}` : dateTime.getDate();
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
    removeBlogPost(id);
  };

  const editPost = (id: number) => {
    const post = blogPosts.filter((post) => post.id === id);
    setEditedBlogPost(post[0]);
  };

  useEffect(
    () => {
      if (editedBlogPost) {
        /*
      const newPosts = blogPosts.map((post) => {
        if (post.id === editedBlogPost.Id) {
          const editedPost: BlogPost = {
            id: editedBlogPost.Id,
            title: editedBlogPost.Title,
            author: editedBlogPost.Author!,
            content: editedBlogPost.Content,
            likes: likes,
            timeStamp: editedBlogPost.TimeStamp,
          };
          return editedPost;
        } else return post;
      });
      setBlogPosts(newPosts);
      setNewlyEditedBlogPost(null);
      */
      }
    },
    [
      /*
    newlyEditedBlogPost,
    blogPosts,
    setBlogPosts,
    likes,
    setNewlyEditedBlogPost,*/
    ],
  );

  return (
    <BlogPostCardWrapper lightMode={lightMode}>
      <h2>{title}</h2>
      <p>{content}</p>

      <BlogpostImageContainer blogpostId={blogpostId} />

      <BlogPostCardFlex>
        <p>{dateToDisplay}</p>
        <LikeButton onClick={handleLike} lightMode={lightMode} liked={liked}>
          <LikesText>{likes + likedCount}</LikesText>
        </LikeButton>
        <p>{author}</p> {/*link to author bio */}
        {author === currentUser ? (
          <Fragment>
            <PostButton onClick={() => handleDeletePost(blogpostId)}>
              Delete post
            </PostButton>
            <PostButton onClick={() => editPost(blogpostId)}>
              Edit post
            </PostButton>
          </Fragment>
        ) : null}
      </BlogPostCardFlex>
    </BlogPostCardWrapper>
  );
};
