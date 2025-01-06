import { useContext } from "react";
import { ThemeContainer } from "../components/ThemeContainer";
import { context } from "../components/Context";
import { SidePanel } from "../components/mainview/SidePanel/SidePanel";
import { Feed } from "../components/mainview/feed/Feed";
import { NavBar } from "../components/mainview/navbar/NavBar";
import {
  MainViewItemWrapper,
  MainViewWrapper,
} from "../components/mainview/MainView.style";

export default function MainView() {
  const { lightMode } = useContext(context);

  return (
    <ThemeContainer lightMode={lightMode}>
      <NavBar />
      <MainViewWrapper>
        <MainViewItemWrapper width={25}>
          <SidePanel />
        </MainViewItemWrapper>
        <MainViewItemWrapper width={75}>
          <Feed />
        </MainViewItemWrapper>
      </MainViewWrapper>
    </ThemeContainer>
  );
}
