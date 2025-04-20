import { useContext, useEffect } from "react";
import { ThemeContainer } from "../components/ThemeContainer";
import {AppContext} from "../components/libs/contexts/AppContext";
import { SidePanel } from "../components/mainview/SidePanel/SidePanel";
import { Feed } from "../components/mainview/feed/Feed";
import { NavBar } from "../components/mainview/navbar/NavBar";
import {
  MainViewItemWrapper,
  MainViewWrapper,
} from "../components/mainview/MainView.style";
import { getBlogPostServerProps } from "../lib/blog-posts/blogPostController";
import {BlogPostContext} from "../components/libs/contexts/BlogPostsContext";

export default function MainView() {
  const { lightMode } = useContext(AppContext);
  const {state, setBlogPosts} = useContext(BlogPostContext);
  console.log(state.blogPosts);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const data = await getBlogPostServerProps();
        setBlogPosts([...data]);
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
