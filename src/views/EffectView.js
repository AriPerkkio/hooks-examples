import React, { useState, useReducer } from 'react';

import { TextWithSubscription } from 'components/Text';
import UserCard, { UserCardInvalidDependencies } from 'components/UserCard';
import { CodeBlockButton } from 'components/CodeBlock';
import Button from 'components/common/Button';
import { ApiSubscribers } from 'api';

const toggle = s => !s;

const EffectView = () => {
    const [visibleOne, toggleVisibilityOne] = useReducer(toggle, false);
    const [visibleTwo, toggleVisibilityTwo] = useReducer(toggle, false);
    const [visibleThree, toggleVisibilityThree] = useReducer(toggle, false);
    const [id, setId] = useState(1);

    return (
        <>
            <h1>useEffect</h1>

            <h2>useEffect: onMount & onUnmount</h2>
            <CodeBlockButton
                className='block'
                fileName='components/Text/TextWithSubscription.js'
                text='TextWithSubscription.js'
            />
            <Button onClick={toggleVisibilityOne}>
                {visibleOne ? 'Unmount' : 'Mount'}
            </Button>
            <div>
                <ApiSubscribers />
                {visibleOne && <TextWithSubscription />}
            </div>

            <h2 className='margin-top-l'>useEffect: Dependency array</h2>
            <input
                type='number'
                className='common-input block margin-top-m'
                onChange={({ target: { value } }) => setId(value)}
                value={id}
            />
            <CodeBlockButton
                className='block'
                fileName='components/UserCard/UserCardInvalidDependencies.js'
                text='UserCardInvalidDependencies.js'
            />
            <Button onClick={toggleVisibilityTwo}>
                {visibleTwo ? 'Unmount' : 'Mount'}
            </Button>

            <div>
                {visibleTwo && <UserCardInvalidDependencies userId={id} />}
            </div>

            <CodeBlockButton
                className='block'
                fileName='components/UserCard/UserCard.js'
                text='UserCard.js'
            />
            <Button onClick={toggleVisibilityThree}>
                {visibleThree ? 'Unmount' : 'Mount'}
            </Button>

            <div>{visibleThree && <UserCard userId={id} />}</div>
        </>
    );
};

export default EffectView;
