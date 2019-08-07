import React from 'react';

import { InputsWithResizer, InputWithEventTarget } from 'components/Input';
import { CodeBlockButton } from 'components/CodeBlock';
import Link from 'components/Link';

const CustomHookExamplesView = () => {
    return (
        <>
            <h1>Extra: Custom hook examples</h1>

            <h2>useWindowResize</h2>
            <CodeBlockButton
                fileName='hooks/useWindowResize.js'
                text='useWindowResize.js'
            />
            <CodeBlockButton
                fileName='components/Input/InputsWithResizer.js'
                text='InputsWithResizer.js'
            />
            <InputsWithResizer />

            <h2>useEventTargetValue</h2>
            <CodeBlockButton
                fileName='hooks/useEventTargetValue.js'
                text='useEventTargetValue.js'
            />
            <CodeBlockButton
                fileName='components/Input/InputWithEventTarget.js'
                text='InputWithEventTarget.js'
            />
            <InputWithEventTarget />

            <h2 className='margin-top-m'>isMounted, useRedcerOnMounted</h2>
            <CodeBlockButton
                fileName='hooks/useIsMounted.js'
                text='useIsMounted.js'
            />

            <CodeBlockButton
                fileName='hooks/useReducerOnMounted.js'
                text='useReducerOnMounted.js'
            />

            <h3>More examples</h3>
            <Link href='https://usehooks.com/'>useHooks.com</Link>
        </>
    );
};

export default CustomHookExamplesView;
