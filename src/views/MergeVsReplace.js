import React from 'react';

import {
    ButtonGroupWithComponents,
    ButtonGroupWithHooks,
    ButtonGroupWithHooksMerge,
} from 'components/ButtonGroup';
import { CodeBlockButton } from 'components/CodeBlock';

const MergeVsReplaceView = () => {
    return (
        <>
            <h1>Merge VS Replace</h1>

            <h2>ButtonGroupWithComponents</h2>
            <ButtonGroupWithComponents />
            <CodeBlockButton fileName='components/ButtonGroup/ButtonGroupWithComponents.js' />

            <h2>ButtonGroupWithHooks</h2>
            <ButtonGroupWithHooks />
            <CodeBlockButton fileName='components/ButtonGroup/ButtonGroupWithHooks.js' />

            <h2>ButtonGroupWithHooksMerge</h2>
            <ButtonGroupWithHooksMerge />
            <CodeBlockButton fileName='components/ButtonGroup/ButtonGroupWithHooksMerge.js' />
        </>
    );
};

export default MergeVsReplaceView;
