import { useContext, useState } from "react";
import { DRMWarningBanner } from "../components/DRMWarningBanner ";
import {
  LoginButton,
  LoginContainer,
  LoginWrapper,
  LoginInput,
  ThemeButton,
} from "../components/LoginWrapper";
import { WarningBanner } from "../components/WarningBanner";
import { context } from "../components/Context";
import { ThemeContainer } from "../components/ThemeContainer";
import { useRouter } from "next/router";
import { fetchSignin } from "../lib/users/users-controller";
import { UserErrors } from "../lib/users/user-errors";

export default function Home() {
  const { lightMode, setLightMode, setCurrentUser } = useContext(context);
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginWarning, setLoginWarning] = useState<string | null>(null);

  const pageWarning = () => {
    //idea from Mastodon: @jaseg@chaos.social
    //navigator.getEnvironmentIntegrity !== undefined
    if (global.navigator)
      return global.navigator.userAgent.includes("Chrome") ||
        global.navigator.userAgent.includes("Edge")
        ? true
        : false;
  };

  const checkValue = (value: string) => {
    value === ""
      ? setLoginWarning(UserErrors.invalidUsernamePassword)
      : setLoginWarning(null);
  };

  const onLogin = async () => {
    if (username.length && !loginWarning && password.length) {
      const { isError, errorMessage } = await fetchSignin(username, password);

      if (isError) {
        setLoginWarning(errorMessage);
      } else {
        setCurrentUser(username);
        await router.push("/MainView");
      }
    } else {
      setLoginWarning(UserErrors.invalidUsernamePassword);
    }
  };

  return (
    <>
      {pageWarning() ? (
        <ThemeContainer lightMode={lightMode}>
          <DRMWarningBanner />
        </ThemeContainer>
      ) : (
        <ThemeContainer lightMode={lightMode}>
          <LoginContainer>
            <LoginWrapper lightMode={lightMode}>
              <LoginInput
                type="text"
                id="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                onBlur={(e) => {
                  checkValue(e.target.value);
                }}
              ></LoginInput>

              <LoginInput
                type="text"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                onBlur={(e) => {
                  checkValue(e.target.value);
                }}
              ></LoginInput>

              {loginWarning !== null ? (
                <WarningBanner value={loginWarning} />
              ) : null}

              <LoginButton onClick={() => onLogin()}>Sign in</LoginButton>

              <ThemeButton
                onClick={() => {
                  setLightMode(!lightMode);
                }}
              >
                {lightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
              </ThemeButton>
            </LoginWrapper>
          </LoginContainer>
        </ThemeContainer>
      )}
    </>
  );
}
