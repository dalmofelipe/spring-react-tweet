import { createContext } from "react";
import Post from "../types/Post";
import ContextPost from "../types/ContextPost";

const messagesContext = createContext({} as ContextPost);

export default messagesContext;