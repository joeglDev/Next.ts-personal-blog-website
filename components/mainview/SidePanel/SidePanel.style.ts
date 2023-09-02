import styled from "@emotion/styled";
import { COLOURS } from "../../../globals/colours";

export const SidePanelWrapper = styled.section<{ lightMode: boolean }>`
  padding: 1rem;
  margin: 1rem;
  background-color: ${(p) =>
    p.lightMode ? COLOURS.light.cardBackground : COLOURS.dark.cardBackground};
`;