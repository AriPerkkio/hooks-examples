import React from 'react';

import { InputWithReducer, InputWithReducerAndProps } from 'components/Input';
import { useEventTargetValue } from 'hooks';
import { CodeBlockButton } from 'components/CodeBlock';

const ReducerView = () => {
    const [value, onChange] = useEventTargetValue(1);

    return (
        <>
            <h1>useReducer</h1>
            <InputWithReducer />
            <CodeBlockButton
                className='block'
                fileName='components/Input/InputWithReducer.js'
                text='useReducer'
            />

            <h2>New reducer on each render</h2>
            <input
                className='common-input block'
                type='number'
                value={value}
                onChange={onChange}
            />
            <InputWithReducerAndProps userId={value} />
            <CodeBlockButton
                className='block'
                fileName='components/Input/InputWithReducerAndProps.js'
            />
        </>
    );
};

export default ReducerView;
