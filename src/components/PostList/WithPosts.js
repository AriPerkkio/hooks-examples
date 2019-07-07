import React, { Component } from 'react';

import Api from 'api';

const WithPosts = WrappedComponent =>
    class PostsHOC extends Component {
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
            return <WrappedComponent {...this.state} {...this.props} />;
        }
    };

export default WithPosts;
