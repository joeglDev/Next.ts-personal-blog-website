import { useContext, useState } from "react";
import {
  NavBarLi,
  NavBarText,
  NavBarUl,
  NavBarWrapper,
  NavButton,
} from "./NavBar.style";
import { context } from "../../Context";
import { useRouter } from "next/router";
import { fetchLogout } from "../../../lib/users/users-controller";
import { UserErrors } from "../../../lib/users/user-errors";
import { WarningBanner } from "../../WarningBanner";

export const NavBar = () => {
  const { currentUser, setCurrentUser, lightMode, setLightMode } =
    useContext(context);
  const router = useRouter();
  const [signoutError, setSignoutError] = useState<UserErrors | null>(null);

  const onSignOut = async () => {
    const { isError, errorMessage } = await fetchLogout();

    if (isError) {
      setSignoutError(errorMessage);
    } else {
      setSignoutError(null);
      setCurrentUser(null);
      router.push("/");
    }
  };

  return (
    <NavBarWrapper lightMode={lightMode}>
      <NavBarUl>
        {signoutError ? (
          <NavBarLi>
            <WarningBanner value={signoutError} />
          </NavBarLi>
        ) : null}

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
