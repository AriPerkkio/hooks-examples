import React from 'react';

import Stringify from 'components/Stringify';
import Form from './Form';
import { useForm } from 'hooks';

const FormWithHooks = () => {
    const {
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
    } = useForm();

    if (isLoading) {
        return <div className='form--loading'>Loading...</div>;
    }

    return (
        <>
            <Form
                onUserChange={onUserChange}
                onPostChange={onPostChange}
                onCommentChange={onCommentChange}
                onSubmit={onSubmit}
                selectedUser={selectedUser}
                selectedPost={selectedPost}
                comment={comment}
                error={error}
                users={users}
                posts={posts}
                comments={comments}
                isSending={isSending}
            />

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

export default FormWithHooks;
