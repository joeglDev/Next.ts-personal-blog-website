import { useContext } from "react";
import {
  NavBarLi,
  NavBarText,
  NavBarUl,
  NavBarWrapper,
  NavButton,
} from "./NavBar.style";
import { context } from "../../Context";
import { useRouter } from "next/router";

export const NavBar = () => {
  const { currentUser, setCurrentUser, lightMode, setLightMode } =
    useContext(context);
  const router = useRouter();

  const onSignOut = () => {
    setCurrentUser(null);
    router.push("/");
  };

  return (
    <NavBarWrapper lightMode={lightMode}>
      <NavBarUl>
        <NavBarLi>
          <NavBarText>Welcome {currentUser}</NavBarText>
        </NavBarLi>

        <NavBarLi>
          <NavButton
            lightMode={lightMode}
            onClick={() => {
              setLightMode(!lightMode);
            }}
          >
            {lightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
          </NavButton>
        </NavBarLi>

        <NavBarLi>
          <NavButton lightMode={lightMode} onClick={() => onSignOut()}>
            Sign out
          </NavButton>
        </NavBarLi>
      </NavBarUl>
    </NavBarWrapper>
  );
};
