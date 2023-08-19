import styled from "@emotion/styled"; 
import { COLOURS } from "../../../globals/colours";

const heartSize = 2.5;

export const LikeButton = styled.div<{ lightMode: boolean }>`
    position: relative;
    width: 100px;
    height: 90px;
    margin-top: 10px;
    border: none;
    background-color: ${(p) =>
        p.lightMode ? COLOURS.light.background : COLOURS.dark.background};
    color: ${COLOURS.dark.textColour};

  
  &::before {
    opacity: 100 !important;
    content: "";
    position: absolute;
    top: 0;
    width: 52px;
    height: 80px;
    border-radius: 50px 50px 0 0;
    background: ${COLOURS.highlightPink};
    left: 50px;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  
  &::after {
    opacity: 100 !important;
    content: "";
    position: absolute;
    top: 0;
    width: 52px;
    height: 80px;
    border-radius: 50px 50px 0 0;
    background: ${COLOURS.highlightPink};
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }


`;