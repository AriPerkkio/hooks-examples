import React from 'react';

import { InputWithReducer } from 'components/Input';
import { CodeBlockButton } from 'components/CodeBlock';

const ReducerView = () => (
    <>
        <h1>useReducer</h1>
        <InputWithReducer />
        <CodeBlockButton fileName='components/Input/InputWithReducer.js' />
    </>
);

export default ReducerView;
