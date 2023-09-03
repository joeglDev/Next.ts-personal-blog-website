import { PropsWithChildren, createContext, useState } from "react";
import { BlogPost } from "./mainview/feed/Feed.types";

interface defaultValueInterface {
  lightMode: boolean;
  setLightMode: (value: boolean) => void;
  currentUser: string | null;
  setCurrentUser: (value: string | null) => void;
  blogPosts: BlogPost[];
  setBlogPosts: (value: BlogPost[]) => void;
}

const defaultValue: defaultValueInterface = {
  lightMode: true,
  setLightMode: () => {},
  currentUser: null,
  setCurrentUser: () => {},
  blogPosts: [],
  setBlogPosts: () => {},
};

export const context = createContext(defaultValue);

export const ContextProvider = (props: PropsWithChildren) => {
  const [lightMode, setLightMode] = useState(defaultValue.lightMode);
  const [currentUser, setCurrentUser] = useState(defaultValue.currentUser);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  return (
    <context.Provider
      value={{
        lightMode,
        setLightMode,
        currentUser,
        setCurrentUser,
        blogPosts,
        setBlogPosts,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
