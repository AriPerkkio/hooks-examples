import React, { useReducer, useEffect } from 'react';

import Stringify from 'components/Stringify';
import Api from 'api';

const commentReducer = (all, comment) => [...all, comment];

const TextWithSubscription = () => {
    const [comments, addComment] = useReducer(commentReducer, []);

    useEffect(() => {
        Api.subscribeComments(addComment);
        return () => Api.unsubscribeComments(addComment);
    }, []);

    return (
        <Stringify indent={2}>{{ commentCount: comments.length }}</Stringify>
    );
};

export default TextWithSubscription;
