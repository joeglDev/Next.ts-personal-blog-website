export const getBlogPosts = async () => {
    const res = await fetch('http://localhost:3001/api/BlogPost')
    return await res.json()
};