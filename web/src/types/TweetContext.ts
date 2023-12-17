import Tweet from "./Tweet"

interface TweetContext {
    tweets: Tweet[],
    setTweets: React.Dispatch<React.SetStateAction<Tweet[]>>;
}

export default TweetContext;