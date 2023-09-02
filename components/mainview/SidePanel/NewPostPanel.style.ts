import styled from "@emotion/styled";
import { COLOURS } from "../../../globals/colours";

export const NewPostWrapper = styled.article<{ lightMode: Boolean }>`
  padding: 2vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.5vh;
  background-color: ${(p) =>
    p.lightMode ? COLOURS.light.background : COLOURS.dark.background};

  h2 {
    text-align: center;
  }
`;

export const NewPostTextArea = styled.textarea`
  width: 90%;
`;
