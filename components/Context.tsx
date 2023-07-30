import { PropsWithChildren, ReactNode, createContext, useState } from "react";
import "lodash/noop";
import { NextComponentType, NextPageContext } from "next";

interface defaultValueInterface {
  lightMode: boolean;
  setLightMode: (value: boolean) => void;
  currentUser: string;
  setCurrentUser: (value: string) => void;
}

const defaultValue: defaultValueInterface = {
  lightMode: true,
  setLightMode: () => {},
  currentUser: "",
  setCurrentUser: () => {},
};

const context = createContext(defaultValue);

export const ContextProvider = (props: PropsWithChildren) => {
  const [lightMode, setLightMode] = useState(defaultValue.lightMode);
  const [currentUser, setCurrentUser] = useState(defaultValue.currentUser);

  return (
    <context.Provider
      value={{
        lightMode,
        setLightMode,
        currentUser,
        setCurrentUser,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
