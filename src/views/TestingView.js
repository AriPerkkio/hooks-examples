import React from 'react';

import { CodeBlockButton } from 'components/CodeBlock';

const TestingView = () => (
    <>
        <h1>Unit testing custom hook</h1>

        <CodeBlockButton fileName='hooks/useForm.js' text='useForm.js' />
        <CodeBlockButton
            fileName='hooks/__tests__/useForm.test.js'
            text='useForm.test.js'
        />

        <div>
            <CodeBlockButton
                fileName='components/Form/FormWithHooks.js'
                text='FormWithHooks.js'
            />
            <CodeBlockButton
                fileName='components/Form/__tests__/FormWithHooks.test.js'
                text='FormWithHooks.test.js'
            />
        </div>
    </>
);

export default TestingView;
