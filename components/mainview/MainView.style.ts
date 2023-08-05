import styled from "@emotion/styled";
import { COLOURS } from "../../globals/colours";

export const MainViewWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const MainViewItemWrapper = styled.div<{ width: number }>`
  width: ${(p) => p.width}vw;
  height: 100vh;
`;
