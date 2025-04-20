import { PropsWithChildren, createContext, useState } from "react";
import { BlogPost } from "../../mainview/feed/Feed.types";
import { EditBlogPostReqBody } from "../../../lib/blog-posts/api.types";

interface defaultValueInterface {
  lightMode: boolean;
  setLightMode: (value: boolean) => void;
  currentUser: string | null;
  setCurrentUser: (value: string | null) => void;
  blogPosts: BlogPost[];
  setBlogPosts: (value: BlogPost[]) => void;
  editBlogPost: BlogPost | null;
  setEditBlogPost: (value: BlogPost | null) => void;
  newlyEditedBlogPost: EditBlogPostReqBody | null;
  setNewlyEditedBlogPost: (value: EditBlogPostReqBody | null) => void;
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
  newlyEditedBlogPost: null,
  setNewlyEditedBlogPost: () => {},
};

export const AppContext = createContext(defaultValue);

export const AppContextProvider = (props: PropsWithChildren) => {
  const [lightMode, setLightMode] = useState(defaultValue.lightMode);
  const [currentUser, setCurrentUser] = useState(defaultValue.currentUser);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [editBlogPost, setEditBlogPost] = useState<BlogPost | null>(
    defaultValue.editBlogPost,
  );
  const [newlyEditedBlogPost, setNewlyEditedBlogPost] =
    useState<EditBlogPostReqBody | null>(null);

  return (
    <AppContext.Provider
      value={{
        lightMode,
        setLightMode,
        currentUser,
        setCurrentUser,
        blogPosts,
        setBlogPosts,
        editBlogPost,
        setEditBlogPost,
        newlyEditedBlogPost,
        setNewlyEditedBlogPost,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
