import React, { useReducer } from 'react';

import Stringify from 'components/Stringify';
import Button from 'components/common/Button';

const initialState = 0;
const reducer = (state, action) => {
    const { type, value } = action;

    switch (type) {
        case 'ADD':
            return state + value;
        case 'MINUS':
            return state - value;
        case 'MULTIPLY':
            return state * value;
        default:
            return state;
    }
};

const InputWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <Button onClick={() => dispatch({ type: 'ADD', value: 15 })}>
                ADD 15
            </Button>

            <Button onClick={() => dispatch({ type: 'MINUS', value: 23 })}>
                MINUS 23
            </Button>

            <Button onClick={() => dispatch({ type: 'MULTIPLY', value: 3 })}>
                MULTIPLY 3
            </Button>

            <Stringify>{state}</Stringify>
        </>
    );
};

export default InputWithReducer;
