import { useContext } from "react";
import { ThemeContainer } from "../components/ThemeContainer";
import { context } from "../components/Context";
import { Statistics } from "../components/mainview/statistics/Statistics";
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
          
          <Statistics />
        </MainViewItemWrapper>
        <MainViewItemWrapper width={75}>
          
          <Feed />
        </MainViewItemWrapper>
      </MainViewWrapper>
    </ThemeContainer>
    // navigation (id needed long term)

    // view of mapped cards

    //  sussinct ypur profile and add a thought box
  );
}
