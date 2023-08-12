import styled from "@emotion/styled";
import { COLOURS } from "../../../globals/colours";

export const FeedWrapper = styled.section<{lightMode: boolean}>`
padding: 2rem;
margin: 2rem;
background-color: ${(p) =>
    p.lightMode ? COLOURS.light.cardBackground : COLOURS.dark.cardBackground};
`;