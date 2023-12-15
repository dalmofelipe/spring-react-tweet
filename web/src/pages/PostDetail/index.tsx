import "./styles.css";
import Post from "../../types/Post";

const PostDetail = (props:Post) => {
  return (
    <>
      <article className="post-detail">
        <h3>{props.autor}</h3>
        <p>{props.mensagem}</p>
      </article>
    </>
  );
};

export default PostDetail;
