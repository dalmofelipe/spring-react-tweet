import Post from "./Post"

interface PostContext {
    posts: Post[],
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export default PostContext;