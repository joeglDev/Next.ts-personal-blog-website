import { getBlogPosts } from "./blogPostModel";

export const getBlogPostStaticProps = async () => {
    const posts = await getBlogPosts();
    return posts
  }