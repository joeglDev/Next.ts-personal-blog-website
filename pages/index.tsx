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

export default function Home() {
  const { lightMode, setLightMode, setCurrentUser } = useContext(context);
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginWarning, setLoginWarning] = useState<string | null>(null);

  const loginWarningInvalidUsernamePassword =
    "Please enter a valid username and / or password.";
  const loginWarningInvalidUnauthorised =
    "User is not authorised. Please create a new account.";
  const loginWarningInvalidWrongPassword = "The password is incorrect.";
  const loginWarningInvalidUnhandledException =
    "An unhandled exception occurred. Please contact the developer.";

  const pageWarning = () => {
    //idea from Mastodon: @jaseg@chaos.social
    //navigator.getEnvironmentIntergrity !== undefined
    if (global.navigator)
      return global.navigator.userAgent.includes("Chrome") ||
        global.navigator.userAgent.includes("Edge")
        ? true
        : false;
  };

  const checkValue = (value: string) => {
    value === ""
      ? setLoginWarning(loginWarningInvalidUsernamePassword)
      : setLoginWarning(null);
  };

  // TODO: handle sign out button
  const onLogin = async () => {
    if (username.length && !loginWarning && password.length) {
      try {
        const status = await fetchSignin(username, password);
        console.log("status", status);

        // TODO: move this section of code to controller and hande error in try catch block
        if (status === 200) {
          setCurrentUser(username);
          await router.push("/MainView");
        } else if (status === 401) {
          setLoginWarning(loginWarningInvalidWrongPassword);
        } else if (status === 404) {
          setLoginWarning(loginWarningInvalidUnauthorised);
        } else {
          setLoginWarning(loginWarningInvalidUnhandledException);
        }
      } catch (e) {
        console.error(e);
        setLoginWarning(loginWarningInvalidUnhandledException);
      }
    } else {
      setLoginWarning(loginWarningInvalidUsernamePassword);
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
