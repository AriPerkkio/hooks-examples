import { Component } from 'react';

import Api from 'api';

class PostsFetcher extends Component {
    state = {
        posts: [],
        loading: false,
        error: false,
    };

    componentDidMount() {
        this.setState({ loading: true });

        Api.getPosts()
            .then(posts => this.setState({ posts, loading: false }))
            .catch(() => this.setState({ error: true }));
    }

    render() {
        return this.props.children({ ...this.state, ...this.props });
    }
}

export default PostsFetcher;
