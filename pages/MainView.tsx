import { useContext } from "react";
import { ThemeContainer } from "../components/ThemeContainer";
import { context } from "../components/Context";
import { NavBar } from "../components/navbar/NavBar";

export default function MainView() {
  const { lightMode } = useContext(context);

  return (
    <ThemeContainer lightMode={lightMode}>
      <NavBar />
    </ThemeContainer>
    // navigation (id needed long term)

    // view of mapped cards

    //  sussinct ypur profile and add a thought box
  );
}
