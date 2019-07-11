import React from 'react';

import Stringify from 'components/Stringify';
import Form, { PostList, CommentInput } from './Form';

const FormPresentational = ({
    onUserChange,
    onPostChange,
    onCommentChange,
    onSubmit,
    selectedUser,
    selectedPost,
    comment,
    error,
    users,
    posts,
    comments,
    isLoading,
    isSending,
}) => {
    if (isLoading) {
        return <div className='form--loading'>Loading...</div>;
    }

    return (
        <>
            <Form
                onUserChange={onUserChange}
                selectedUser={selectedUser}
                users={users}>
                {posts
                    .filter(({ userId }) => userId.toString() === selectedUser)
                    .map(post => (
                        <PostList
                            {...post}
                            key={post.id}
                            isOpen={post.id === selectedPost}
                            onChange={onPostChange}
                            comments={comments.filter(
                                ({ postId }) => postId === post.id
                            )}>
                            <CommentInput
                                onSubmit={onSubmit}
                                error={error}
                                onChange={onCommentChange}
                                isOpen={post.id === selectedPost}
                                isSending={isSending}
                            />
                        </PostList>
                    ))}
            </Form>

            <Stringify indent={2}>
                {{
                    selectedUser,
                    selectedPost,
                    comment,
                    error,
                    users: `Array[${users.length}]`,
                    posts: `Array[${posts.length}]`,
                    comments: `Array[${comments.length}]`,
                    isLoading,
                    isSending,
                }}
            </Stringify>
        </>
    );
};

export default FormPresentational;
