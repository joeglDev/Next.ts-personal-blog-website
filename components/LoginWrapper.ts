import styled from "@emotion/styled";
import { COLOURS } from "../globals/colours";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${COLOURS.dark.cardBackground};
  color: ${COLOURS.dark.textColour};
  height: 80%;
  padding: 3rem;
`;

export const LoginWrapperElement = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const LoginButton = styled.button`
  width: 10%;
`;
