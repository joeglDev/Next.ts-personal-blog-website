export const getBlogPosts = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/BlogPost");
    return await res.json();
  } catch (e) {
    console.log("error", e);
    return [];
  }
};
