import styled from "@emotion/styled";
import { COLOURS } from "../globals/colours";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginWrapper = styled.div<{ lightMode: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10%;
  background-color: ${(p) =>
    p.lightMode ? COLOURS.light.cardBackground : COLOURS.dark.cardBackground};
  margin: 0;
  height: 80vh;
  width: 50vw;
  padding: 3rem;
  border-radius: 5%;
  box-sizing: border-box;
  font-size: 3vh;
`;

export const LoginInput = styled.input`
  width: 50%;
  height: 5vh;
  margin: auto;
`;

export const LoginButton = styled.button`
  margin: auto;
  width: 30%;
  height: 5vh;
  font-size: 3vh;

  &:hover {
    border-color: ${COLOURS.highlightBlue};
    background-color: ${COLOURS.highlightBlue};
    color: white;
  }
`;

export const ThemeButton = styled(LoginButton)`
  display: block;
  position: relative;
  margin: 2% auto 2% auto;
  height: 10vh;
`;
