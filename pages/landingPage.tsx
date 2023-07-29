import { useState } from "react";
import { DRMWarningBanner } from "../components/DRMWarningBanner ";
import {
  LoginButton,
  LoginWrapper,
  LoginWrapperElement,
} from "../components/LoginWrapper";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const pageWarning = () => {
    //idea from Mastodon: @jaseg@chaos.social
    //navigator.getEnvironmentIntergrity !== undefined
    if (global.navigator)
      return global.navigator.userAgent.includes("Chrome") ||
        global.navigator.userAgent.includes("Edge")
        ? true
        : false;
  };

  return (
    <>
      {pageWarning() ? (
        <DRMWarningBanner/>
      ) : (
        /** page content here - night/day login or if not test button */
        <LoginWrapper>
          <LoginWrapperElement>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </LoginWrapperElement>

          <LoginWrapperElement>
            <label htmlFor="password">{`Password:`}</label>
            <input
              type="text"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </LoginWrapperElement>

          <LoginWrapperElement>
            <LoginButton>Sign in</LoginButton>
          </LoginWrapperElement>
        </LoginWrapper>
      )}
    </>
  );
}
