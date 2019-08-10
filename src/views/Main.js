import React from 'react';

import Link from 'components/Link';

const Main = () => (
    <>
        <h1>Hooks examples</h1>

        <h2>
            <Link href='https://github.com/AriPerkkio/hooks-examples'>
                Source codes
            </Link>
        </h2>

        <h3>Reading / Watching list</h3>
        <ul>
            <li>
                <Link href='https://youtu.be/KJP1E-Y-xyo'>
                    Getting Closure on React Hooks by Shawn Wang | JSConf.Asia
                    2019
                </Link>
            </li>
            <li>
                <Link href='https://overreacted.io/a-complete-guide-to-useeffect'>
                    overreacted.io/a-complete-guide-to-useeffect
                </Link>
            </li>
            <li>
                <Link href='https://github.com/testing-library/react-hooks-testing-library'>
                    @testing-library/react-hooks-testing-library
                </Link>
            </li>
            <li>
                <Link href='https://github.com/reactjs/rfcs/pull/119'>
                    RFC: useContextSelector
                </Link>
            </li>
        </ul>
    </>
);

export default Main;
