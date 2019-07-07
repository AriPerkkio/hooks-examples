import React, { Component } from 'react';

import Api from 'api';

const WithComments = WrappedComponent =>
    class CommentsHOC extends Component {
        state = { comments: [] };

        addComment = comment =>
            this.setState(({ comments }) => ({
                comments: [...comments, comment],
            }));

        componentDidMount() {
            Api.subscribeComments(this.addComment);
        }

        componentWillUnmount() {
            Api.unsubscribeComments(this.addComment);
        }

        render() {
            return <WrappedComponent {...this.state} {...this.props} />;
        }
    };

export default WithComments;
