import { useEffect, useState } from "react";
import TweetService from "../../http/TweetService";
import Tweet from "../../types/Tweet";
import TweetDetail from "../TweetDetail";
import "./styles.css";


const TweetContainer = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    async function getData() {
      setTweets(await TweetService.list());
    }
    getData();
  }, [])

  const tweetList = tweets?.map(
    (t, index) => <TweetDetail key={index} autor={t.autor} mensagem={t.mensagem}/>
  )

  return (
    <>
      <div className="tweets">
        <div className="tweets-container container">
          {tweetList || "Nenhum Tweet encontrado..."}
        </div>
      </div>
    </>
  );
};

export default TweetContainer;
