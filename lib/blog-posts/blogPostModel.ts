import { EditBlogPostReqBody, NewBlogPostReqBody } from "./api.types";

const localhostPort = 3001;

export const getBlogPosts = async () => {
  try {
    const res = await fetch(`http://localhost:${localhostPort}/api/BlogPost`);
    return await res.json();
  } catch (e) {
    console.log("error", e);
    return [];
  }
};

export const postNewBlogPost = async (req: NewBlogPostReqBody) => {
  try {
    const res = await fetch(`http://localhost:${localhostPort}/api/BlogPost`, {
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
      `http://localhost:${localhostPort}/api/BlogPost/${id}`,
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
      `http://localhost:${localhostPort}/api/BlogPost/${req.Id}`,
      {
        method: "PUT",
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
