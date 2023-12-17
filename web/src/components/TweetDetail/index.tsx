import "./styles.css";
import Tweet from "../../types/Tweet";

const TweetDetail = (props:Tweet) => {
  return (
    <>
      <article className="tweet-detail">
        <h3>{props.autor}</h3>
        <p>{props.mensagem}</p>
      </article>
    </>
  );
};

export default TweetDetail;
