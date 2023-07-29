import { useState } from "react";
import { DRMWarningBanner } from "../components/DRMWarningBanner ";
import {
  LoginButton,
  LoginContainer,
  LoginWrapper,
  LoginInput
} from "../components/LoginWrapper";
import { WarningBanner } from "../components/WarningBanner";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginWarning, setLoginWarning] = useState(false);

  const loginWarningString = 'Please enter a valid username and / or password.';
            

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
    value === "" ?
      setLoginWarning(true) 
      :
      setLoginWarning(false);
  };

  return (
    <>
      {pageWarning() ? (
        <DRMWarningBanner/>
         
      ) : (
        /** page content here - night/day login or if not test button */
        <LoginContainer>

        <LoginWrapper>

  
            <LoginInput
              type="text"
              id="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}     
              onBlur={(e) => { checkValue(e.target.value)}}
            ></LoginInput>
    

     
            <LoginInput
              type="text"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              onBlur={(e) => { checkValue(e.target.value)}}
            ></LoginInput>

            { loginWarning ? (<WarningBanner value={loginWarningString} />) : (null)}

      

     
            <LoginButton
            >
              Sign in</LoginButton>
      

        </LoginWrapper>

        </LoginContainer>
      )}
    </>
  );
}
