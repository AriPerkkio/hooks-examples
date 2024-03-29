import { useReducer, useEffect } from 'react';

import Api from 'api';

const initialState = {
    posts: [],
    loading: false,
    error: false,
};

const reducer = (state, next) => ({ ...state, ...next });

const usePosts = () => {
    const [state, setState] = useReducer(reducer, initialState);

    useEffect(() => {
        setState({ loading: true });

        Api.getPosts()
            .then(posts => setState({ posts, loading: false }))
            .catch(() => setState({ error: true, loading: false }));
    }, []);

    return state;
};

export default usePosts;
