import React from 'react';

import {
    ButtonGroupWithComponents,
    ButtonGroupWithHooks,
    ButtonGroupWithHooksMerge,
} from 'components/ButtonGroup';
import { CodeBlockButton } from 'components/CodeBlock';
import Link from 'components/Link';

const MergeVsReplaceView = () => (
    <>
        <h1>Merge VS Replace</h1>

        <ButtonGroupWithComponents />
        <CodeBlockButton fileName='components/ButtonGroup/ButtonGroupWithComponents.js' />

        <h3>Without merge</h3>
        <ButtonGroupWithHooks />
        <CodeBlockButton fileName='components/ButtonGroup/ButtonGroupWithHooks.js' />

        <h3>With merge</h3>
        <ButtonGroupWithHooksMerge />
        <CodeBlockButton fileName='components/ButtonGroup/ButtonGroupWithHooksMerge.js' />

        <Link href='https://github.com/facebook/react/blob/v16.9.0/packages/react-reconciler/src/ReactFiberHooks.js#L626'>
            React.useState's reducer implementation
        </Link>
    </>
);

export default MergeVsReplaceView;
