import styled from "@emotion/styled";
import { COLOURS } from "../../../globals/colours";

const heartSize = 5;

export const LikeButton = styled.button<{ lightMode: boolean; liked: boolean }>`
  position: relative;
  width: ${heartSize}rem;
  height: ${heartSize * 0.9}rem;

  border: none;
  background-color: ${(p) =>
    p.lightMode ? COLOURS.light.background : COLOURS.dark.background};
  color: ${COLOURS.dark.textColour};
  z-index: 0;

  &::before {
    z-index: 0;
    opacity: 1 !important;
    content: "";
    position: absolute;
    top: 0;
    width: ${heartSize * 0.52}rem;
    height: ${heartSize * 0.8}rem;
    border-radius: ${heartSize * 0.5}rem ${heartSize * 0.5}rem 0 0;
    background: ${(p) =>
      p.liked ? COLOURS.highlightPink : COLOURS.highlightBlue};
    left: 0.5remx;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &::after {
    z-index: 0;
    opacity: 1 !important;
    content: "";
    position: absolute;
    top: 0;
    width: ${heartSize * 0.52}rem;
    height: ${heartSize * 0.8}rem;
    border-radius: ${heartSize * 0.5}rem ${heartSize * 0.5}rem 0 0;
    background: ${(p) =>
      p.liked ? COLOURS.highlightPink : COLOURS.highlightBlue};
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }

  &:hover {
    scale: 1.2;
  }
`;

export const LikesText = styled.p`
  z-index: 1;
  position: relative;
  color: ${COLOURS.dark.textColour};
  font-weight: bold;
  font-size: 4vh;
  bottom: 3.5vh;
  left: 0.05vw;
`;
