import styled from "@emotion/styled";
import { ChangeEvent, useContext, useState } from "react";
import { context } from "../../Context";
import { NewPostTextArea, NewPostWrapper } from "./NewPostPanel.style";

export const NewPostPanel = () => {
  const { lightMode, currentUser } = useContext(context);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const onTitleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setTitle(e.target.value);
  const onContentTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);
  const handlePostRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newBlogPostReqBody = {
      Author: currentUser,
      Title: title,
      Content: content,
      Likes: [],
      TimeStamp: new Date().toJSON(),
    };
    console.log(newBlogPostReqBody);

    //send
    //get data back
  };
  return (
    <NewPostWrapper lightMode={lightMode}>
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
