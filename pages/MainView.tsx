import {useContext, useEffect, useReducer} from "react";
import { ThemeContainer } from "../components/ThemeContainer";
import { context } from "../components/Context";
import { SidePanel } from "../components/mainview/SidePanel/SidePanel";
import { Feed } from "../components/mainview/feed/Feed";
import { NavBar } from "../components/mainview/navbar/NavBar";
import {
  MainViewItemWrapper,
  MainViewWrapper,
} from "../components/mainview/MainView.style";
import {blogPostsReducer} from "../components/BlogPostsReducer";
import {getBlogPostServerProps} from "../lib/blog-posts/blogPostController";

export default function MainView() {
  const { lightMode } = useContext(context);

  const [state, dispatch] = useReducer(blogPostsReducer, {blogPosts: []});

  useEffect(() => {
      const fetchBlogPosts = async () => {
            try {
                const data = await getBlogPostServerProps();
                dispatch({ type: "SET_BLOG_POSTS", blogPosts: [...data] });
            } catch (error) {
                console.error("Failed to fetch blog posts:", error);
            }
        };

        fetchBlogPosts();
    }, []);

  return (
    <ThemeContainer lightMode={lightMode}>
      <NavBar />
      <MainViewWrapper>
        <MainViewItemWrapper width={25}>
          <SidePanel />
        </MainViewItemWrapper>
        <MainViewItemWrapper width={75}>
          <Feed blogPosts={state.blogPosts} />
        </MainViewItemWrapper>
      </MainViewWrapper>
    </ThemeContainer>
  );
}
