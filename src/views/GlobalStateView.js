import React, { useReducer } from 'react';

import { CodeBlockButton } from 'components/CodeBlock';
import Button from 'components/common/Button';
import { InputWithStore, InputWithShouldUpdate } from 'components/Input';
import { listeners } from 'hooks/useStore';
import { useForceRender } from 'hooks';

const GlobalStateView = () => {
    const [visible, toggleVisible] = useReducer(s => !s, true);

    return (
        <>
            <h1>Global State</h1>
            <div>
                <CodeBlockButton
                    fileName='views/GlobalStateView.js'
                    text='GlobalStateView.js'
                />
                <CodeBlockButton
                    fileName='hooks/useStore.js'
                    text='useStore.js'
                />
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
            <Button onClick={toggleVisible}>
                {visible ? 'Unmount one' : 'Mount one'}
            </Button>
            {visible && <InputWithStore id='one' />}

            <h2>InputWithStore: two</h2>
            <InputWithStore id='two' />

            <h2>InputWithShouldUpdate: three</h2>
            <InputWithShouldUpdate id='three' />

            <Listeners />
        </>
    );
};

const Listeners = () => {
    useForceRender(500);

    return <h2>Listeners {listeners.length}</h2>;
};

export default GlobalStateView;