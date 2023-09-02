import styled from "@emotion/styled";
import { COLOURS } from "../../../globals/colours";

export const FeedWrapper = styled.section<{ lightMode: boolean }>`
  padding: 2rem;
  margin: 2rem;
  background-color: ${(p) =>
    p.lightMode ? COLOURS.light.cardBackground : COLOURS.dark.cardBackground};
`;

export const BlogPostCardwrapper = styled.article<{ lightMode: Boolean }>`
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
  gap: 10vw;
  font-weight: bold;
  overflow-wrap: word-break;
`;
