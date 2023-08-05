import { getBlogPostStaticProps } from "../../../lib/blog-posts/blogPostController";

export const Feed = () => {
const initialBlogPosts = getBlogPostStaticProps().then((data) => {
console.log(data)
})


  return (
    <>
      <h1>feed with cards for posts</h1>
    </>
  );
};
