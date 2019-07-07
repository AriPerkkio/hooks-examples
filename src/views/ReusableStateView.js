import React from 'react';

import { PostListWithHooks } from 'components/PostList';
import { CodeBlockButton } from 'components/CodeBlock';

const ReducerView = () => (
    <>
        <PostListWithHooks />

        <h2>Render Props</h2>
        <CodeBlockButton
            fileName='components/PostList/PostsFetcher.js'
            text='PostsFetcher.js'
        />
        <CodeBlockButton
            fileName='components/PostList/CommentSubscriber.js'
            text='CommentSubscriber.js'
        />
        <CodeBlockButton
            fileName='components/PostList/PostsListWithRenderProps.js'
            text='PostsListWithRenderProps.js'
        />

        <h2>HOC</h2>
        <CodeBlockButton
            fileName='components/PostList/WithPosts.js'
            text='WithPosts.js'
        />
        <CodeBlockButton
            fileName='components/PostList/WithComments.js'
            text='WithComments.js'
        />
        <CodeBlockButton
            fileName='components/PostList/PostListWithHOC.js'
            text='PostListWithHOC.js'
        />

        <h2>Hooks</h2>
        <CodeBlockButton fileName='hooks/usePosts.js' text='usePosts.js' />
        <CodeBlockButton
            fileName='hooks/useComments.js'
            text='useComments.js'
        />
        <CodeBlockButton
            fileName='components/PostList/PostListWithHooks.js'
            text='PostListWithHooks.js'
        />
        <div>
            <CodeBlockButton fileName='api/Api.js' text='Api.js' />
        </div>
    </>
);

export default ReducerView;
