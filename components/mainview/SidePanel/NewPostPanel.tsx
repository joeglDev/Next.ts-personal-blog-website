import { ChangeEvent, useContext, useEffect, useState } from "react";
import { context } from "../../Context";
import {
  PostButton,
  NewPostTextArea,
  NewPostWrapper,
} from "./NewPostPanel.style";
import { postNewBlogPostController } from "../../../lib/blog-posts/blogPostController";
import { WarningBanner } from "../../WarningBanner";

/*
Todo: edit a post
1. on click of edit button assign post to context
2. If context !null then setEditMode(true) and swap post button for edit button
3. this makes a api request to PUT
*/

export const NewPostPanel = () => {
  const {
    lightMode,
    currentUser,
    blogPosts,
    setBlogPosts,
    editBlogPost,
    setEditBlogPost,
  } = useContext(context);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [emptyWarning, setEmptyWarning] = useState(false);

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
        Likes: [],
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

  const handleEditRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditBlogPost(null);
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
