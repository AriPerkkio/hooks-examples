import React, { useReducer } from 'react';

import Stringify from 'components/Stringify';
import Button from 'components/common/Button';
import Api from 'api';

const InputWithReducerAndProps = ({ userId }) => {
    const [state, dispatch] = useReducer(reducer, {});

    function reducer(prevState, action) {
        const { type, payload } = action || {};

        switch (type) {
            case 'GET_POSTS':
                return {
                    ...prevState,
                    loading: false,
                    [userId]: {
                        ...prevState[userId],
                        posts: `Post count: ${payload.length}`,
                    },
                };
            case 'GET_COMMENTS':
                return {
                    ...prevState,
                    loading: false,
                    [userId]: {
                        ...prevState[userId],
                        comments: `Comment count: ${payload.length}`,
                    },
                };
            case 'LOADING':
                return { ...prevState, loading: true };
            default:
                return prevState;
        }
    }

    const thunkDispatch = async action => {
        if (typeof action === 'function') {
            action().then(r => dispatch(r));
            return dispatch({ type: 'LOADING' });
        }

        return dispatch(action);
    };

    return (
        <>
            <Button
                onClick={() =>
                    thunkDispatch(() =>
                        Api.getUsersPosts(userId).then(payload => ({
                            payload,
                            type: 'GET_POSTS',
                        }))
                    )
                }>
                GET /users/{userId}/posts
            </Button>

            <Button
                onClick={() =>
                    thunkDispatch(() =>
                        Api.getUsersComments(userId).then(payload => ({
                            payload,
                            type: 'GET_COMMENTS',
                        }))
                    )
                }>
                GET /users/{userId}/comments
            </Button>

            <Stringify indent={2} className='block'>
                {state}
            </Stringify>
        </>
    );
};

export default InputWithReducerAndProps;
