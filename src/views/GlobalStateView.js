import React from 'react';

import MountToggle from 'components/MountToggle';
import { CodeBlockButton } from 'components/CodeBlock';
import { InputWithStore, InputWithShouldUpdate } from 'components/Input';
import { listeners } from 'hooks/useStore';
import { useForceRender } from 'hooks';

const GlobalStateView = () => (
    <>
        <h1>Global State</h1>
        <div>
            <CodeBlockButton
                fileName='views/GlobalStateView.js'
                text='GlobalStateView.js'
            />
            <CodeBlockButton fileName='hooks/useStore.js' text='useStore.js' />
        </div>

        <div>
            <CodeBlockButton
                fileName='components/Input/InputWithStore.js'
                text='InputWithStore.js'
            />
            <CodeBlockButton
                fileName='components/Input/InputWithShouldUpdate.js'
                text='InputWithShouldUpdate.js'
            />
        </div>

        <h2>InputWithStore: one</h2>
        <MountToggle>
            <InputWithStore id='one' />
        </MountToggle>

        <h2>InputWithStore: two</h2>
        <InputWithStore id='two' />

        <h2>InputWithShouldUpdate: three</h2>
        <InputWithShouldUpdate id='three' />

        <Listeners />
    </>
);

const Listeners = () => {
    useForceRender(500);

    return <h2>Listeners {listeners.length}</h2>;
};

export default GlobalStateView;
