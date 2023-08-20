import { getBlogPosts } from "./blogPostModel";

export const getBlogPostServerProps = async () => {
  const posts = await getBlogPosts();
  return posts;
};
