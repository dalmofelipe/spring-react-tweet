import { useState } from "react";
import ContextPost from "../types/ContextPost"
import messagesContext from "./messagesContext";
import Post from "../types/Post";

function MessagesProvider ({ children } : { children: React.ReactNode }) {

    const [ posts, setPosts ] = useState<Post[]>([]);

    const postContext = {
        posts,
        setPosts,
    };

    return (
        <messagesContext.Provider value={postContext}>
            {children}
        </messagesContext.Provider>
    );
};

export default MessagesProvider;