import React from 'react';

import { PostsWithConstumer, PostsWithHooks } from 'components/Posts';
import { PostsProvider as PostsProviderWithClass } from 'context/PostsContextWithClass';
import { PostsProvider as PostsProviderWithHooks } from 'context/PostsContextWithHooks';
import { CodeBlockButton } from 'components/CodeBlock';

const ContextView = () => (
    <PostsProviderWithClass>
        <PostsProviderWithHooks>
            <h1>Context view</h1>
            <CodeBlockButton
                fileName='views/ContextView.js'
                text='ContextView.js'
            />

            <h2>With Class</h2>
            <PostsWithConstumer />
            <CodeBlockButton
                fileName='context/PostsContextWithClass.js'
                text='PostsContextWithClass.js'
            />
            <CodeBlockButton
                fileName='components/Posts/PostsWithConstumer.js'
                text='PostsWithConstumer.js'
            />

            <h2>With Hooks</h2>
            <PostsWithHooks />
            <CodeBlockButton
                fileName='context/PostsContextWithHooks.js'
                text='PostsContextWithHooks.js'
            />
            <CodeBlockButton
                fileName='components/Posts/PostsWithHooks.js'
                text='PostsWithHooks.js'
            />
        </PostsProviderWithHooks>
    </PostsProviderWithClass>
);

export default ContextView;
