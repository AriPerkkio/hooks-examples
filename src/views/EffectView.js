import React, { useState } from 'react';

import Link from 'components/Link';
import MountToggle from 'components/MountToggle';
import UserCard, { UserCardInvalidDependencies } from 'components/UserCard';
import { TextWithSubscription } from 'components/Text';
import { TextWithEffectsList } from 'components/Text';
import { CodeBlockButton } from 'components/CodeBlock';
import { ApiSubscribers } from 'api';

const EffectView = () => {
    const [id, setId] = useState(1);

    return (
        <>
            <h1>useEffect</h1>

            <h2>onMount & onUnmount</h2>
            <CodeBlockButton fileName='components/Text/TextWithSubscription.js' />

            <MountToggle>
                <div>
                    <TextWithSubscription />
                </div>
            </MountToggle>
            <ApiSubscribers />

            <h2 className='margin-top-l'>Dependency array</h2>
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
            <MountToggle>
                <UserCardInvalidDependencies userId={id} />
            </MountToggle>

            <div>
                <CodeBlockButton
                    fileName='components/UserCard/UserCard.js'
                    text='UserCard.js'
                />
                <MountToggle>
                    <UserCard userId={id} />

                    <pre className='quote'>
                        If you’re trying to write an effect that behaves
                        differently depending on whether the component renders
                        for the first time or not, you’re swimming against the
                        tide! We’re failing at synchronizing if our result
                        depends on the “journey” rather than the “destination”.
                        <Link href='https://overreacted.io/a-complete-guide-to-useeffect/#synchronization-not-lifecycle'>
                            overreacted.io/a-complete-guide-to-useeffect
                        </Link>
                    </pre>
                </MountToggle>
            </div>

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
            <MountToggle>
                <TextWithEffectsList id={id} />
            </MountToggle>
        </>
    );
};

export default EffectView;
