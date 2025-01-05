import styled from "@emotion/styled";
import { COLOURS } from "../../../globals/colours";

export const FeedWrapper = styled.section<{ lightMode: boolean }>`
  padding: 2rem;
  margin: 1rem;
  background-color: ${(p) =>
    p.lightMode ? COLOURS.light.cardBackground : COLOURS.dark.cardBackground};
`;

export const BlogPostCardWrapper = styled.article<{ lightMode: Boolean }>`
  max-width: 50vw;
  max-font-size: 5vh;
  margin: 5vh auto 5vh auto;
  padding: 5vh;
  background-color: ${(p) =>
    p.lightMode ? COLOURS.light.background : COLOURS.dark.background};

  h2 {
    text-align: center;
  }
`;

export const BlogPostCardFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 5vw;
  font-weight: bold;
  overflow-wrap: word-break;
`;
