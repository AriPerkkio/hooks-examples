import { Component } from 'react';

import Api from 'api';

class CommentSubscriber extends Component {
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
        return this.props.children({ ...this.state, ...this.props });
    }
}

export default CommentSubscriber;
