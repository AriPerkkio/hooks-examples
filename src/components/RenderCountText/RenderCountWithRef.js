import React, { useCallback, useRef, useEffect } from 'react';

import RenderCountText from './RenderCountText';

const RenderCountWithUseRef = ({ text }) => {
    const latestText = useRef(text);
    const memoizedCallback = useCallback(() => alert(latestText.current), []);

    // Update ref when text prop changes
    useEffect(() => {
        latestText.current = text;
    }, [text]);

    return (
        <RenderCountText onClick={memoizedCallback} text='useCallback+useRef' />
    );
};

export default RenderCountWithUseRef;
