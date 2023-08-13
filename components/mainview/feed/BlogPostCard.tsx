import { useContext } from "react";
import { BlogPost } from "./Feed";
import { BlogPostCardFlex, BlogPostCardwrapper } from "./Feed.style";
import { context } from "../../Context";

interface BlogPostCardProps {
post: BlogPost;
};

export const BlogPostCard = ({post}: BlogPostCardProps) => {
    const {title, likes, author, content} = post;
    const {lightMode, currentUser} = useContext(context);

return (
    <BlogPostCardwrapper lightMode={lightMode}>
        <h2>{title}</h2>
        <p>{content}</p>

        <BlogPostCardFlex>
            <p>{likes}</p> {/*convert to btn */}
            <p>{author}</p> {/*link to author bio */}
            {author === currentUser ? <button>delete post</button> : null}
        </BlogPostCardFlex>
        
         </BlogPostCardwrapper>
)
};