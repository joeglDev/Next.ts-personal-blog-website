import { NewBlogPostReqBody } from "./api.types";
import { getBlogPosts, postNewBlogPost } from "./blogPostModel";

export const getBlogPostServerProps = async () => {
  const res = await getBlogPosts();
  return res;
};

export const postNewBlogPostController = async (req: NewBlogPostReqBody) => {
  const res = await postNewBlogPost(req);
  return res;
};
