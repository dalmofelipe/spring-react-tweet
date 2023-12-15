import Mensagem from "../../components/Mensagem";
import PostContainer from "../../components/PostContainer";
import "./styles.css";

const Feed = () => {
  return (
    <>
      <div className="feed">
        <div className="feed-container container">
            <Mensagem />
            <PostContainer />
        </div>
      </div>
    </>
  );
};

export default Feed;
