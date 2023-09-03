import { NewBlogPostReqBody } from "./api.types";

export const getBlogPosts = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/BlogPost");
    return await res.json();
  } catch (e) {
    console.log("error", e);
    return [];
  }
};

export const postNewBlogPost = async (req: NewBlogPostReqBody) => {
  try {
    const res = await fetch("http://localhost:5000/api/BlogPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    });
    return await res.json();
  } catch (e) {
    console.log("error", e);
    return [];
  }
};
