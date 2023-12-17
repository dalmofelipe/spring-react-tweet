import { createContext } from "react";
import TweetContext from "../types/TweetContext";

const MessagesContext = createContext({} as TweetContext);

export default MessagesContext;