import React, { useState, useReducer } from 'react';

import { TextWithSubscription } from 'components/Text';
import Link from 'components/Link';
import UserCard, { UserCardInvalidDependencies } from 'components/UserCard';
import { TextWithEffectsList } from 'components/Text';
import { CodeBlockButton } from 'components/CodeBlock';
import Button from 'components/common/Button';
import { ApiSubscribers } from 'api';

const toggle = s => !s;

const EffectView = () => {
    const [visibleOne, toggleVisibilityOne] = useReducer(toggle, false);
    const [visibleTwo, toggleVisibilityTwo] = useReducer(toggle, false);
    const [visibleThree, toggleVisibilityThree] = useReducer(toggle, false);
    const [visibleFour, toggleVisibilityFour] = useReducer(toggle, false);
    const [id, setId] = useState(1);

    return (
        <>
            <h1>useEffect</h1>

            <h2>useEffect: onMount & onUnmount</h2>
            <CodeBlockButton fileName='components/Text/TextWithSubscription.js' />
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
                fileName='components/UserCard/UserCard.js'
                text='UserCard.js'
            />
            <Button onClick={toggleVisibilityThree}>
                {visibleThree ? 'Unmount' : 'Mount'}
            </Button>
            <div>{visibleThree && <UserCard userId={id} />}</div>

            {visibleTwo && (
                <pre className='quote'>
                    If you’re trying to write an effect that behaves differently
                    depending on whether the component renders for the first
                    time or not, you’re swimming against the tide! We’re failing
                    at synchronizing if our result depends on the “journey”
                    rather than the “destination”.
                    <Link href='https://overreacted.io/a-complete-guide-to-useeffect/#synchronization-not-lifecycle'>
                        overreacted.io/a-complete-guide-to-useeffect
                    </Link>
                </pre>
            )}

            <h2 className='margin-top-l'>useEffect, useLayoutEffect</h2>
            <input
                type='number'
                className='common-input block margin-top-m'
                onChange={({ target: { value } }) => setId(value)}
                value={id}
            />
            <CodeBlockButton
                fileName='components/Text/TextWithEffectsList.js'
                text='Code: Order of effects and cleanups'
            />
            <Button onClick={toggleVisibilityFour}>
                {visibleFour ? 'Unmount' : 'Mount'}
            </Button>
            <div>{visibleFour && <TextWithEffectsList id={id} />}</div>
        </>
    );
};

export default EffectView;
