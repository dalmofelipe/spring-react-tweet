import { useEffect, useState } from "react";
import PostService from "../../http/PostService";
import Post from "../../types/Post";
import PostDetail from "../PostDetail";
import "./styles.css";


const PostContainer = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPostsData = () => {
    async function getData() {
      setPosts(await PostService.list());
    }
    getData();
  };

  useEffect(() => {
    getPostsData()
  }, [posts])

  const listPosts = posts?.map(
    (p, index) => <PostDetail key={index} autor={p.autor} mensagem={p.mensagem}/>
  )

  return (
    <>
      <div className="posts">
        <div className="posts-container container">
          {listPosts || "Nenhum Post encontrado..."}
        </div>
      </div>
    </>
  );
};

export default PostContainer;
