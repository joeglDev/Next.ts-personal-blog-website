import { PropsWithChildren, createContext, useState } from "react";

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

export const context = createContext(defaultValue);

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
