import React from 'react';

import PostList from './PostList';
import WithPosts from './WithPosts';
import WithComments from './WithComments';
import { compose } from 'utils';

const PostListWithHOC = ({ posts, loading, error, comments }) => {
    if (loading) {
        return <h1>Loading</h1>;
    } else if (error) {
        return <h1>Error</h1>;
    }

    return <PostList posts={posts} comments={comments} />;
};

// prettier-ignore
export default compose(WithPosts, WithComments)(PostListWithHOC);
