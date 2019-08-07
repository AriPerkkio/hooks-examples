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

            <ButtonGroupWithComponents />
            <CodeBlockButton fileName='components/ButtonGroup/ButtonGroupWithComponents.js' />

            <ButtonGroupWithHooks />
            <CodeBlockButton fileName='components/ButtonGroup/ButtonGroupWithHooks.js' />

            <ButtonGroupWithHooksMerge />
            <CodeBlockButton fileName='components/ButtonGroup/ButtonGroupWithHooksMerge.js' />
        </>
    );
};

export default MergeVsReplaceView;
