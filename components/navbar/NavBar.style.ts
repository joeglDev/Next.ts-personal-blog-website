import styled from "@emotion/styled";
import { COLOURS } from "../../globals/colours";

export const NavBarWrapper = styled.nav<{ lightMode: boolean }>`
  display: flex;
  justify-content: right;
  align-items: center;
  height: 8vh;
  color: ${(p) =>
    p.lightMode ? COLOURS.light.textColour : COLOURS.dark.textColour};
  background-color: ${(p) =>
    p.lightMode ? COLOURS.light.cardBackground : COLOURS.dark.cardBackground};
`;

export const NavBarUl = styled.ul`
  text-decoration: none;
  list-style: none;
`;

export const NavBarLi = styled.li`
  display: inline-block;
  margin: auto 4vw auto 4vw;
`;

export const NavButton = styled.button<{ lightMode: boolean }>`
  height: 3vh;
  font-size: 2vh;
  padding: 4.9vh 2vw 5.2vh 2vw;
  border: none;

  color: ${(p) =>
    p.lightMode ? COLOURS.light.textColour : COLOURS.dark.textColour};

  background-color: ${(p) =>
    p.lightMode ? COLOURS.light.cardBackground : COLOURS.dark.cardBackground};

  &:hover {
    border-color: ${COLOURS.highlightBlue};
    background-color: ${COLOURS.highlightBlue};
    color: white;
  }
`;

export const NavBarText = styled.p`
  font-size: 2vh;
  font-weight: bold;
  background-color: ${COLOURS.highlightBlue};
  color: white;
  padding: 2.8vh 2vw 2.8vh 2vw;
`;
