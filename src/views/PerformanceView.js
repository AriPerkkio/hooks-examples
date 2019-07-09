import React, { useState, useReducer } from 'react';

import {
    RenderCountWithUseCallback,
    RenderCountWithUseMemo,
    RenderCountWithUseRef,
    RenderCountWithClass,
} from 'components/RenderCountText';
import { InputWithPropsDependencies } from 'components/Input';
import Button from 'components/common/Button';
import { CodeBlockButton } from 'components/CodeBlock';
import { useForceRender } from 'hooks';

const PerformanceView = () => {
    const [classText, setClassText] = useState('Class text');
    const [cbText, setCbText] = useState('useCallback text');
    const [cbRefText, setCbRefText] = useState('useCallback+useRef text');
    const [memoText, setMemoText] = useState('initial text');
    const [memoCbMounted, toggleMemoCbMount] = useReducer(s => !s, false);

    useForceRender(2000);

    return (
        <>
            <h1>Performance optimization hooks</h1>

            <h3>Class</h3>
            <input
                type='text'
                value={classText}
                onChange={({ target: { value } }) => setClassText(value)}
            />
            <CodeBlockButton fileName='components/RenderCountText/RenderCountWithClass.js' />
            <RenderCountWithClass text={classText} />

            <h3>useCallback</h3>
            <input
                type='text'
                value={cbText}
                onChange={({ target: { value } }) => setCbText(value)}
            />
            <CodeBlockButton fileName='components/RenderCountText/RenderCountWithUseCallback.js' />
            <RenderCountWithUseCallback text={cbText} />

            <h3>useCallback + useRef</h3>
            <input
                type='text'
                value={cbRefText}
                onChange={({ target: { value } }) => setCbRefText(value)}
            />
            <CodeBlockButton fileName='components/RenderCountText/RenderCountWithRef.js' />
            <RenderCountWithUseRef text={cbRefText} />

            <h3>useMemo</h3>
            <input
                type='text'
                value={memoText}
                onChange={({ target: { value } }) => setMemoText(value)}
            />
            <CodeBlockButton fileName='components/RenderCountText/RenderCountWithUseMemo.js' />
            <RenderCountWithUseMemo text={memoText} />

            <h3>Dependency memoizing</h3>
            <Button onClick={toggleMemoCbMount}>
                {memoCbMounted ? 'Unmount' : 'Mount'}
            </Button>
            <CodeBlockButton fileName='components/Input/InputWithPropsDependencies.js' />
            {memoCbMounted && <InputWithPropsDependencies />}
        </>
    );
};

export default PerformanceView;
