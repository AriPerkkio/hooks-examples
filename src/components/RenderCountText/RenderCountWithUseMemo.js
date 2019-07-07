import React, { useMemo } from 'react';

import Stringify from 'components/Stringify';
import { generateText, generateTextCallCounts } from 'utils';

/**
 * Parent is updating every 2s
 */
const RenderCountWithUseMemo = ({ text }) => {
    // Generate on every render
    const calculatedText = generateText(text, 'inline');

    // Generate only when text changes
    const memoizedText = useMemo(() => generateText(text, 'useMemo'), [text]);

    return (
        <Stringify className='block small' indent={2}>
            {{ generateTextCallCounts, calculatedText, memoizedText }}
        </Stringify>
    );
};

export default RenderCountWithUseMemo;
