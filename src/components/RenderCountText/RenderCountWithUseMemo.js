import React, { useMemo } from 'react';

import Stringify from 'components/Stringify';
import { generateText, generateTextCallCounts } from 'utils';

const RenderCountWithUseMemo = ({ text }) => {
    // Run on every render
    // eslint-disable-next-line
    const calculatedText = generateText(text, 'inline');

    // Run only when text changes
    // eslint-disable-next-line
    const memoizedText = useMemo(() => generateText(text, 'useMemo'), [text]);

    return (
        <Stringify className='block small' indent={2}>
            {{ generateTextCallCounts }}
        </Stringify>
    );
};

export default RenderCountWithUseMemo;
