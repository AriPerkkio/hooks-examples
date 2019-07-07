import React, { useCallback } from 'react';

import RenderCountText from './RenderCountText';

/**
 * Parent is updating every 2s
 */
const RenderCountWithUseCallback = ({ text }) => {
    // Crete new function on every render
    const inlineCallback = () => alert(text);

    // Generate new method only when text changes
    const memoizedCallback = useCallback(() => alert(text), [text]);

    return (
        <>
            <RenderCountText onClick={inlineCallback} text='inlineCallback' />
            <RenderCountText onClick={memoizedCallback} text='useCallback' />
        </>
    );
};

export default RenderCountWithUseCallback;
