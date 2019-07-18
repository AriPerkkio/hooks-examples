import React, { useReducer, useEffect } from 'react';

import Stringify from 'components/Stringify';
import Button from 'components/common/Button';

const initialState = 0;

const InputWithReducerAndProps = ({ multiplier }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
        const { type, value } = action;

        switch (type) {
            case 'ADD':
                return state + value * multiplier;
            case 'MINUS':
                return state - value * multiplier;
            case 'RESET':
                return 0;
            default:
                return state;
        }
    }

    useEffect(() => {
        if (state > 1000 && multiplier > 10) {
            dispatch({ type: 'RESET' });
        }
    }, [multiplier, state]);

    return (
        <>
            <Button onClick={() => dispatch({ type: 'ADD', value: 15 })}>
                ADD 15
            </Button>

            <Button onClick={() => dispatch({ type: 'MINUS', value: 23 })}>
                MINUS 23
            </Button>

            <Stringify>{state}</Stringify>
        </>
    );
};

export default InputWithReducerAndProps;
