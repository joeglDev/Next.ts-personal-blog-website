import { EditBlogPostReqBody, NewBlogPostReqBody } from "./api.types";

const localhostPort = 5000;

export const getBlogPosts = async () => {
  try {
    const res = await fetch(`http://localhost:${localhostPort}/api/posts`);
    return await res.json();
  } catch (e) {
    console.log("error", e);
    return [];
  }
};

export const postNewBlogPost = async (req: NewBlogPostReqBody) => {
  try {
    const res = await fetch(`http://localhost:${localhostPort}/api/post`, {
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

export const deleteBlogPost = async (id: number) => {
  try {
    const res = await fetch(
      `http://localhost:${localhostPort}/api/post/${id}`,
      {
        method: "DELETE",
      },
    );
    return await res.json();
  } catch (e) {
    console.log("error", e);
    return [];
  }
};

export const patchBlogPost = async (req: EditBlogPostReqBody) => {
  try {
    const res = await fetch(
      `http://localhost:${localhostPort}/api/post/${req.Id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      },
    );

    return { status: res.status, content: req };
  } catch (e) {
    console.log("error", e);
    return { status: 500, error: e };
  }
};
