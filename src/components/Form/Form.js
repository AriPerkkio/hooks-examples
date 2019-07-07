import React, { Fragment } from 'react';

const BASE_CLASS = 'form';

const Form = ({
    onUserChange,
    onPostChange,
    onCommentChange,
    onSubmit,
    selectedUser,
    selectedPost,
    error,
    users,
    posts,
    comments,
    isSending,
}) => (
    <div className={`${BASE_CLASS}-wrapper`}>
        <form className={BASE_CLASS}>
            <label htmlFor='user' className={`${BASE_CLASS}-select-label`}>
                User
            </label>
            <select
                id='user'
                className={`${BASE_CLASS}-select`}
                onChange={onUserChange}>
                {!selectedUser && <option>-- SELECT USER --</option>}

                {users.map(({ name, id }) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </select>

            {selectedUser && (
                <label htmlFor='posts' className={`${BASE_CLASS}-select-label`}>
                    Posts
                </label>
            )}

            {posts
                .filter(({ userId }) => userId.toString() === selectedUser)
                .map(post => (
                    <Fragment key={post.id}>
                        <ul className={`${BASE_CLASS}-list`}>
                            <Post
                                {...post}
                                isOpen={post.id === selectedPost}
                                onChange={onPostChange}
                                comments={comments.filter(
                                    ({ postId }) => postId === post.id
                                )}
                            />
                        </ul>
                        <CommentInput
                            onSubmit={onSubmit}
                            error={error}
                            isOpen={post.id === selectedPost}
                            onCommentChange={onCommentChange}
                            isSending={isSending}
                        />
                    </Fragment>
                ))}
        </form>
    </div>
);

const Post = ({ id, title, body, isOpen, comments, onChange }) => (
    <li key={id} className={`${BASE_CLASS}-list-item ${isOpen ? 'open' : ''}`}>
        <h2
            className={`${BASE_CLASS}-list-item-header`}
            onClick={() => onChange({ target: { value: id } })}>
            {title}
        </h2>

        <legend>Comments: {comments.length}</legend>

        <section className={`${BASE_CLASS}-list-item-body`}>{body}</section>

        {comments.map(({ id, email, body }) => (
            <section key={id} className={`${BASE_CLASS}-list-item-comment`}>
                {email}: {body}}
            </section>
        ))}
    </li>
);

const CommentInput = ({
    onSubmit,
    isOpen,
    onCommentChange,
    isSending,
    error,
}) => (
    <section
        className={`${BASE_CLASS}-comment-input-wrapper ${
            isOpen ? 'open' : ''
        }`}>
        <input
            type='text'
            className={`${BASE_CLASS}-comment-input`}
            invalid={error ? 'true' : 'false'}
            onChange={onCommentChange}
        />
        {error}
        <button
            type='submit'
            onClick={onSubmit}
            disabled={isSending}
            className={`${BASE_CLASS}-btn--submit`}>
            {isSending ? 'Sending...' : 'Submit'}
        </button>
    </section>
);

export default Form;
