import { PropsWithChildren, createContext, useState } from "react";
import { BlogPost } from "./mainview/feed/Feed.types";

interface defaultValueInterface {
  lightMode: boolean;
  setLightMode: (value: boolean) => void;
  currentUser: string | null;
  setCurrentUser: (value: string | null) => void;
  blogPosts: BlogPost[];
  setBlogPosts: (value: BlogPost[]) => void;
  editBlogPost: BlogPost | null;
  setEditBlogPost: (value: BlogPost | null) => void;
}

const defaultValue: defaultValueInterface = {
  lightMode: true,
  setLightMode: () => {},
  currentUser: null,
  setCurrentUser: () => {},
  blogPosts: [],
  setBlogPosts: () => {},
  editBlogPost: null,
  setEditBlogPost: () => {},
};

export const context = createContext(defaultValue);

export const ContextProvider = (props: PropsWithChildren) => {
  const [lightMode, setLightMode] = useState(defaultValue.lightMode);
  const [currentUser, setCurrentUser] = useState(defaultValue.currentUser);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [editBlogPost, setEditBlogPost] = useState<BlogPost | null>(
    defaultValue.editBlogPost,
  );

  return (
    <context.Provider
      value={{
        lightMode,
        setLightMode,
        currentUser,
        setCurrentUser,
        blogPosts,
        setBlogPosts,
        editBlogPost,
        setEditBlogPost,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
