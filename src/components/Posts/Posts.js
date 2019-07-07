import React, { useEffect } from 'react';

import Api from 'api';

const Posts = ({ posts, setPosts }) => {
    useEffect(() => {
        Api.getPosts().then(setPosts);
    }, [setPosts]);

    return <section>Posts: {(posts || []).length}</section>;
};

export default Posts;
