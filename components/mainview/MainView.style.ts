import styled from "@emotion/styled";

export const MainViewWrapper = styled.div`
display: flex;
flex-flow: row;
height: 100vh;
flex: 3 1;
`;

export const MainViewItemWrapper = styled.div<{width: string}>`
display: flex;
flex: 3 1;
width: ${(p) => p.width};
gap: 0;
`;