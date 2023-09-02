import { useContext } from "react";
import { MainViewItemWrapper } from "../MainView.style";
import { FeedWrapper } from "../feed/Feed.style";
import { context } from "../../Context";
import { SidePanelWrapper } from "./SidePanel.style";
import { NewPostPanel } from "./NewPostPanel";

//edit and post a new post
//stats
//user page from navbar
export const SidePanel = () => {
  const {lightMode} = useContext(context);
  return (
    <SidePanelWrapper lightMode={lightMode}>
      <NewPostPanel />
      </SidePanelWrapper>
  );
};
