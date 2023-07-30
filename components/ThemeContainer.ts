import styled from "@emotion/styled";
import { COLOURS } from "../globals/colours";

/* Sets the colour of global background */
export const ThemeContainer = styled.div<{ lightMode: boolean }>`
  color: ${(p) =>
    p.lightMode ? COLOURS.light.textColour : COLOURS.dark.textColour};
  background-color: ${(p) =>
    p.lightMode ? COLOURS.light.background : COLOURS.dark.background};
`;
