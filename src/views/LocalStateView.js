import React from 'react';

import { InputWithComponents, InputWithHooks } from 'components/Input';
import { CodeBlockButton } from 'components/CodeBlock';

const LocalStateView = () => (
    <>
        <h1>Local State</h1>

        <h2>InputWithComponents</h2>
        <InputWithComponents />
        <CodeBlockButton fileName='components/Input/InputWithComponents.js' />

        <h2>InputWithHooks</h2>
        <InputWithHooks />
        <CodeBlockButton fileName='components/Input/InputWithHooks.js' />
    </>
);

export default LocalStateView;
