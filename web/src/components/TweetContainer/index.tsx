import { useContext, useEffect, useState } from "react";
import TweetService from "../../http/TweetService";
import Tweet from "../../types/Tweet";
import TweetDetail from "../TweetDetail";
import "./styles.css";
import MessagesContext from "../../context/MessagesContext";


const TweetContainer = () => {
  //const [ tweetsList, setTweetList ] = useState<Tweet[]>([]);
  const { tweets, setTweets } = useContext(MessagesContext);
  const tweetList = tweets?.map(
    (t, index) => <TweetDetail key={index} autor={t.autor} mensagem={t.mensagem}/>
  )

  useEffect(() => {
    async function getData() {
      setTweets(await TweetService.list());
    }
    getData();
  }, [])

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
