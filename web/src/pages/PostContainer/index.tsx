import { useEffect, useState } from "react";
import Post from "../../types/Post";
import "./styles.css";
import PostsApi from "../../http/PostsApi";
import PostDetail from "../PostDetail";


const PostContainer = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPostsData = () => {
    async function getData() {
      setPosts(await PostsApi.getAllPosts());
    }
    getData();
  };

  useEffect(() => {
    getPostsData()
  }, [])

  const listPosts = posts?.map(
    (p, index) => <PostDetail key={index} autor={p.autor} mensagem={p.mensagem}/>
  )

  return (
    <>
      <div className="posts">
        <div className="posts-container container">
          <h3>Feed</h3>

          {listPosts || "Nenhum Post encontrado..."}

        </div>
      </div>
    </>
  );
};

export default PostContainer;
