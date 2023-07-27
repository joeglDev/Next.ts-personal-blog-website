import { useState } from "react";
import { BrowserWarningBanner } from "../components/BrowserWarningBanner";
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
        <BrowserWarningBanner />
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
            <LoginButton aria-label="click here to access non-login test preview">
              Test preview
            </LoginButton>
          </LoginWrapperElement>

          <LoginWrapperElement>
            <LoginButton>Sign in</LoginButton>
          </LoginWrapperElement>
        </LoginWrapper>
      )}
    </>
  );
}
