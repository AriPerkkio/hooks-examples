import React, { useReducer } from 'react';

const BASE_CLASS = 'post-list';

const toggleReducer = (state, next) => (state === next ? null : next);

const PostList = ({ posts, comments }) => {
    const [selectedPost, selectPost] = useReducer(toggleReducer);

    return (
        <div className={`${BASE_CLASS}-wrapper`}>
            <ul className={BASE_CLASS}>
                {(posts || []).map(post => (
                    <Post
                        {...post}
                        key={post.id}
                        isOpen={post.id === selectedPost}
                        onChange={selectPost}
                        comments={comments.filter(
                            ({ postId }) => postId === post.id
                        )}
                    />
                ))}
            </ul>
        </div>
    );
};

const Post = ({ id, title, body, isOpen, comments, onChange }) => (
    <li key={id} className={`${BASE_CLASS}-item ${isOpen ? 'open' : ''}`}>
        <h2
            className={`${BASE_CLASS}-item-header`}
            onClick={() => onChange(id)}>
            {title}
        </h2>

        <legend className={`${BASE_CLASS}-item-legend`}>
            Comments: {comments.length}
        </legend>

        <section className={`${BASE_CLASS}-item-body`}>{body}</section>

        {comments.map(({ id, email, body }) => (
            <section key={id} className={`${BASE_CLASS}-item-comment`}>
                {email}: {body}}
            </section>
        ))}
    </li>
);

export default PostList;
