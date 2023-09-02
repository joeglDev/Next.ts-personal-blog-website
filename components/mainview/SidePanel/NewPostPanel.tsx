import styled from "@emotion/styled";
import { ChangeEvent, useContext, useState } from "react";
import { context } from "../../Context";
import { NewPostTextArea, NewPostWrapper } from "./NewPostPanel.style";

export const NewPostPanel = () => {
    const {lightMode} = useContext(context);
    const [content, setContent] = useState('');

    const onTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);
    const handlePostRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
        //make post req body
        //send
        //get data back
    }
    return (
        <NewPostWrapper lightMode={lightMode}>
            <NewPostTextArea onChange={(e) => onTextAreaChange(e)}/>
            <button onClick={(e) => handlePostRequest(e)}>Post</button>

        </NewPostWrapper>
    )
}