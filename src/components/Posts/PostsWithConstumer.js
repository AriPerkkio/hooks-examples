import React from 'react';

import Posts from './Posts';
import { PostsConsumer } from 'context/PostsContextWithClass';

// prettier-ignore
const PostsWithConstumer = () => (
    <PostsConsumer>
        {({ posts, setPosts }) => (
            <Posts posts={posts} setPosts={setPosts} />
        )}
    </PostsConsumer>
);

export default PostsWithConstumer;
