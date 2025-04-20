import { ChangeEvent, useContext, useEffect, useState } from "react";
import { AppContext } from "../../libs/contexts/AppContext";
import {
  PostButton,
  NewPostTextArea,
  NewPostWrapper,
} from "./NewPostPanel.style";
import {
  patchBlogPostController,
  postNewBlogPostController,
} from "../../../lib/blog-posts/blogPostController";
import { WarningBanner } from "../../WarningBanner";
import {BlogPostContext} from "../../libs/contexts/BlogPostsContext";

/*
Todo: edit a post
1. on click of edit button assign post to appContext
2. If appContext !null then setEditMode(true) and swap post button for edit button
3. this makes a api request to PUT
*/

export const NewPostPanel = () => {
  const {
    lightMode,
    currentUser,
    editBlogPost,
    setEditBlogPost,
    setNewlyEditedBlogPost,
  } = useContext(AppContext);

  const {state, setBlogPosts} = useContext(BlogPostContext);

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [emptyWarning, setEmptyWarning] = useState(false);

  const {blogPosts} = state;

  const onTitleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setTitle(e.target.value);

  const onContentTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  const handlePostRequest = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (content.length && title.length) {
      setEmptyWarning(false);

      const newBlogPostReqBody = {
        Author: currentUser,
        Title: title,
        Content: content,
        Likes: 0,
        TimeStamp: new Date().toJSON(),
      };

      const res = await postNewBlogPostController(newBlogPostReqBody);
      const allBlogPosts = blogPosts.concat(res);
      setBlogPosts(allBlogPosts);

      const form = document.getElementById("post-form") as HTMLFormElement;
      form.reset();
      //error handling here
    } else {
      setEmptyWarning(true);
    }
  };

  const handleEditRequest = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    /*
    const mappedLikes: LikedByItem[] = editBlogPost!.likes.map((like) => {
      return { Id: like.id, UserName: like.username };
    });
    */

    const editBlogPostReqBody = {
      Id: editBlogPost!.id,
      Author: editBlogPost!.author,
      Title: title,
      Content: content,
      Likes: editBlogPost!.likes,
      TimeStamp: editBlogPost!.timeStamp,
    };

    const res = await patchBlogPostController(editBlogPostReqBody);

    if (res.status === 200) {
      setEditBlogPost(null);
      setNewlyEditedBlogPost(editBlogPostReqBody);
    }
  };

  useEffect(() => {
    setContent(editBlogPost ? editBlogPost.content : "");
    setTitle(editBlogPost ? editBlogPost.title : "");
  }, [editBlogPost]);

  return (
    <NewPostWrapper id="post-form" lightMode={lightMode}>
      <NewPostTextArea
        placeholder="Title:"
        aria-label="new blog post title input"
        onChange={(e) => onTitleTextAreaChange(e)}
        defaultValue={title}
      />
      <NewPostTextArea
        placeholder="Your post content here:"
        aria-label="new blog post content input"
        onChange={(e) => onContentTextAreaChange(e)}
        defaultValue={content}
      />
      {emptyWarning ? (
        <WarningBanner value="Please enter a value for title and content" />
      ) : null}
      {editBlogPost ? (
        <PostButton onClick={(e) => handleEditRequest(e)}>Edit</PostButton>
      ) : (
        <PostButton onClick={(e) => handlePostRequest(e)}>Post</PostButton>
      )}
    </NewPostWrapper>
  );
};
