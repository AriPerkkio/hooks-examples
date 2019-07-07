import React, { useContext } from 'react';

import Posts from './Posts';
import { PostsContext } from 'context/PostsContextWithHooks';

const PostsWithHooks = () => {
    const { posts, setPosts } = useContext(PostsContext);

    return <Posts posts={posts} setPosts={setPosts} />;
};

export default PostsWithHooks;
