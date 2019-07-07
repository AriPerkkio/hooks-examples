import { useReducer, useEffect } from 'react';

import Api from 'api';

const reducer = (state, newComment) => [...state, newComment];

const useComments = () => {
    const [comments, addComment] = useReducer(reducer, []);

    useEffect(() => {
        Api.subscribeComments(addComment);

        return () => Api.unsubscribeComments(addComment);
    }, []);

    return comments;
};

export default useComments;
