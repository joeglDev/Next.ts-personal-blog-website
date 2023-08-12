import { useContext, useState } from "react";
import { getBlogPostStaticProps } from "../../../lib/blog-posts/blogPostController";
import { WarningBanner } from "../../WarningBanner";
import { FeedWrapper } from "./Feed.style";
import { context } from "../../Context";

export const Feed = () => {
const [foundPosts, setFoundposts] = useState(false);
const {lightMode} = useContext(context);

const noPostsFoundWarning = '404 - Cannot retrieve posts.';

const initialBlogPosts = getBlogPostStaticProps().then((data) => {
console.log(data);
data.length ? setFoundposts(true) : setFoundposts(false);
});


  return (
    <FeedWrapper lightMode={lightMode}>
    {
      foundPosts ? (<h1>posts found</h1>) : (<WarningBanner value={noPostsFoundWarning}/>)
    }
    
    </FeedWrapper>
  );
};
