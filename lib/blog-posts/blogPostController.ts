import { NewBlogPostReqBody } from "./api.types";
import { deleteBlogPost, getBlogPosts, postNewBlogPost } from "./blogPostModel";

export const getBlogPostServerProps = async () => {
  const res = await getBlogPosts();
  return res;
};

export const postNewBlogPostController = async (req: NewBlogPostReqBody) => {
  const res = await postNewBlogPost(req);
  return res;
};

export const deleteBlogPostController = async (id: number) => {
  const res = await deleteBlogPost(id);
  return res
}
