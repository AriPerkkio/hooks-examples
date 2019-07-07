import React, { Component, createContext } from 'react';

const PostsContext = createContext();
const PostsConsumer = PostsContext.Consumer;

class PostsProvider extends Component {
    state = { posts: [] };

    setPosts = posts => this.setState({ posts });

    render() {
        const context = {
            ...this.state,
            setPosts: this.setPosts,
        };

        return (
            <PostsContext.Provider value={context}>
                {this.props.children}
            </PostsContext.Provider>
        );
    }
}

export { PostsConsumer, PostsProvider };
