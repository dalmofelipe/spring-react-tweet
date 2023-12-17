import { useState } from "react";
import Tweet from "../types/Tweet";
import MessagesContext from "./MessagesContext";


function MessagesProvider ({ children } : { children: React.ReactNode }) {

    const [ tweets, setTweets ] = useState<Tweet[]>([]);

    const tweetContext = {
        tweets,
        setTweets,
    };

    return (
        <MessagesContext.Provider value={tweetContext}>
            {children}
        </MessagesContext.Provider>
    );
};

export default MessagesProvider;