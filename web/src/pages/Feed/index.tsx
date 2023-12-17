import Mensagem from "../../components/Mensagem";
import TweetContainer from "../../components/TweetContainer";
import "./styles.css";

const Feed = () => {
  return (
    <>
      <div className="feed">
        <div className="feed-container container">
            <Mensagem />
            <TweetContainer />
        </div>
      </div>
    </>
  );
};

export default Feed;
