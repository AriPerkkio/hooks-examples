import React from 'react';

import PostList from './PostList';
import { usePosts, useComments } from 'hooks';

const PostListWithHooks = () => {
    const { posts, loading, error } = usePosts();
    const comments = useComments();

    if (loading) {
        return <h1>Loading</h1>;
    } else if (error) {
        return <h1>Error</h1>;
    }

    return <PostList posts={posts} comments={comments} />;
};

export default PostListWithHooks;
