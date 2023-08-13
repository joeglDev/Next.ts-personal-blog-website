import { useContext, useState } from "react";
import { getBlogPostStaticProps } from "../../../lib/blog-posts/blogPostController";
import { WarningBanner } from "../../WarningBanner";
import { FeedWrapper } from "./Feed.style";
import { context } from "../../Context";
import { BlogPostCard } from "./BlogPostCard";

export interface BlogPost {
  id: number;
  author: string;
  title: string;
  content: string;
  likes: number;
  //add a datetime sometime
};

export const Feed = () => {
const [foundPosts, setFoundposts] = useState(false);
const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
const {lightMode} = useContext(context);

const noPostsFoundWarning = '404 - Cannot retrieve posts.';

const initialBlogPosts = getBlogPostStaticProps().then((data: BlogPost[]) => setBlogPosts(data));


  return (
    <FeedWrapper lightMode={lightMode}>
    {
      blogPosts.length ? 
      
        blogPosts.map((post: BlogPost) =>  <BlogPostCard post={post}/>)
         : (<WarningBanner value={noPostsFoundWarning}/>)
    }
    <button>Post a new one</button>
    </FeedWrapper>
  );
};
