import { ChangeEvent, useContext, useState } from "react";
import { context } from "../../Context";
import { NewPostTextArea, NewPostWrapper } from "./NewPostPanel.style";
import { postNewBlogPostController } from "../../../lib/blog-posts/blogPostController";

export const NewPostPanel = () => {
  const { lightMode, currentUser, blogPosts, setBlogPosts } =
    useContext(context);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const onTitleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setTitle(e.target.value);
  const onContentTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);
  const handlePostRequest = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

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
    
    const form = document.getElementById('post-form') as HTMLFormElement;
    form.reset();
    //error handling here
  };

  return (
    <NewPostWrapper id='post-form' lightMode={lightMode}>
      <NewPostTextArea
        placeholder="Title:"
        aria-label="new blog post title input"
        onChange={(e) => onTitleTextAreaChange(e)}
      />
      <NewPostTextArea
        placeholder="Your post content here:"
        aria-label="new blog post content input"
        onChange={(e) => onContentTextAreaChange(e)}
      />
      <button onClick={(e) => handlePostRequest(e)}>Post</button>
    </NewPostWrapper>
  );
};
