import { PropsWithChildren, createContext, useState } from "react";
import { BlogPost } from "../../mainview/feed/Feed.types";
import { EditBlogPostReqBody } from "../../../lib/blog-posts/api.types";

interface defaultValueInterface {
  lightMode: boolean;
  setLightMode: (value: boolean) => void;
  currentUser: string | null;
  setCurrentUser: (value: string | null) => void;
}

const defaultValue: defaultValueInterface = {
  lightMode: true,
  setLightMode: () => {},
  currentUser: null,
  setCurrentUser: () => {},
};

export const AppContext = createContext(defaultValue);

export const AppContextProvider = (props: PropsWithChildren) => {
  const [lightMode, setLightMode] = useState(defaultValue.lightMode);
  const [currentUser, setCurrentUser] = useState(defaultValue.currentUser);

  return (
    <AppContext.Provider
      value={{
        lightMode,
        setLightMode,
        currentUser,
        setCurrentUser,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
