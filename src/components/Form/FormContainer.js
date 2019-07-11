import React, { Component } from 'react';

import FormPresentational from './FormPresentational';
import Api from 'api';

const resetCommentAndError = { comment: null, error: null };

class FormContainer extends Component {
    state = {
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

    onUserChange = ({ target: { value } }) =>
        this.setState({ selectedUser: value, ...resetCommentAndError });

    onPostChange = ({ target: { value } }) =>
        this.setState(prev => ({
            selectedPost: value === prev.selectedPost ? null : value,
            ...resetCommentAndError,
        }));

    onCommentsUpdate = comment =>
        this.setState(({ comments }) => ({ comments: [...comments, comment] }));

    onCommentChange = ({ target: { value } }) =>
        this.setState({ comment: value, error: null });

    onSubmit = e => {
        e.preventDefault();

        const { selectedUser, selectedPost, comment } = this.state;

        if (comment) {
            const formDdata = {
                user: selectedUser,
                post: selectedPost,
                comment: comment,
            };

            this.setState({ isSending: true });

            Api.postForm(formDdata)
                .then(() => this.setState({ isSending: false }))
                .then(() => alert('Form sent'));
        } else {
            this.setState({ error: 'Comment missing' });
        }
    };

    async componentDidMount() {
        Api.subscribeComments(this.onCommentsUpdate);

        this.setState({ isLoading: true });

        const [users, posts] = await Promise.all([
            Api.getUsers(),
            Api.getPosts(),
        ]);

        this.setState({
            isLoading: false,
            users,
            posts,
        });
    }

    componentWillUnmount() {
        Api.unsubscribeComments(this.onCommentsUpdate);
    }

    render() {
        const { onUserChange, onPostChange, onCommentChange, onSubmit } = this;
        const {
            selectedUser,
            selectedPost,
            comment,
            error,
            users,
            posts,
            comments,
            isLoading,
            isSending,
        } = this.state;

        return (
            <FormPresentational
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
                isLoading={isLoading}
            />
        );
    }
}

export default FormContainer;
