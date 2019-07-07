import React from 'react';

import PostList from './PostList';
import PostsFetcher from './PostsFetcher';
import CommentSubscriber from './CommentSubscriber';

const PostsListWithRenderProps = () => (
    <PostsFetcher>
        {({ posts, loading, error }) => (
            <CommentSubscriber>
                {({ comments }) => {
                    if (loading) {
                        return <h1>Loading</h1>;
                    } else if (error) {
                        return <h1>Error</h1>;
                    }

                    return <PostList posts={posts} comments={comments} />;
                }}
            </CommentSubscriber>
        )}
    </PostsFetcher>
);

export default PostsListWithRenderProps;
