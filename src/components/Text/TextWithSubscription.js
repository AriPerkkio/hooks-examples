import { useReducer, useEffect } from 'react';

import Api from 'api';

const commentReducer = (all, comment) => [...all, comment];

const TextWithSubscription = () => {
    const [comments, addComment] = useReducer(commentReducer, []);

    useEffect(() => {
        Api.subscribeComments(addComment);
        return () => Api.unsubscribeComments(addComment);
    }, []);

    return `Comments: ${comments.length}`;
};

export default TextWithSubscription;
