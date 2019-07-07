import React, { createContext, useState } from 'react';

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const context = {
        posts,
        setPosts,
    };

    return (
        <PostsContext.Provider value={context}>
            {children}
        </PostsContext.Provider>
    );
};

export { PostsContext, PostsProvider };
