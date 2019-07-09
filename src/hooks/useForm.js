import { useReducer, useEffect, useCallback } from 'react';

import Api from 'api';

const resetCommentAndError = { comment: null, error: null };

const initialState = {
    selectedUser: null,
    selectedPost: null,
    comment: null,
    error: null,
    users: [],
    posts: [],
    comments: [],
    isLoading: false,
    isSending: false,
};

const reducer = (state, next) => {
    if (typeof next === 'function') {
        return { ...state, ...next(state) };
    }

    return { ...state, ...next };
};

const useForm = () => {
    const [state, setState] = useReducer(reducer, initialState);

    const { selectedUser, selectedPost, comment } = state;

    const onUserChange = ({ target: { value } }) =>
        setState({ selectedUser: value, ...resetCommentAndError });

    const onPostChange = ({ target: { value } }) =>
        setState({ selectedPost: value, ...resetCommentAndError });

    const onCommentChange = ({ target: { value } }) =>
        setState({ comment: value, error: null });

    const onCommentsUpdate = useCallback(
        comment =>
            setState(({ comments }) => ({ comments: [...comments, comment] })),
        []
    );

    const onSubmit = e => {
        e.preventDefault();

        if (comment) {
            const formDdata = {
                user: selectedUser,
                post: selectedPost,
                comment: comment,
            };

            setState({ isSending: true });

            Api.postForm(formDdata)
                .then(() => setState({ isSending: false }))
                .then(() => alert('Form sent'));
        } else {
            setState({ error: 'Comment missing' });
        }
    };

    useEffect(() => {
        Api.subscribeComments(onCommentsUpdate);

        setState({ isLoading: true });

        Promise.all([Api.getUsers(), Api.getPosts()]).then(([users, posts]) =>
            setState({
                isLoading: false,
                users,
                posts,
            })
        );

        return () => Api.unsubscribeComments(onCommentsUpdate);
    }, [onCommentsUpdate]);

    return {
        ...state,
        onUserChange,
        onPostChange,
        onCommentChange,
        onSubmit,
    };
};

export default useForm;
