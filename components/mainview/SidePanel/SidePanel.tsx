import { useContext } from "react";
import { MainViewItemWrapper } from "../MainView.style";
import { FeedWrapper } from "../feed/Feed.style";
import { AppContext } from "../../libs/contexts/AppContext";
import { SidePanelWrapper } from "./SidePanel.style";
import { NewPostPanel } from "./NewPostPanel";

//stats
//user page from navbar
export const SidePanel = () => {
  const { lightMode } = useContext(AppContext);
  return (
    <SidePanelWrapper lightMode={lightMode}>
      <NewPostPanel />
    </SidePanelWrapper>
  );
};
