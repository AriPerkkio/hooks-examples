import React, { memo } from 'react';

const BASE_CLASS = 'render-count-text';
const renderCounts = {};

const RenderCountText = memo(({ text, onClick }) => {
    renderCounts[text] = (renderCounts[text] || 0) + 1;

    return (
        <div>
            <span onClick={onClick} className={BASE_CLASS}>
                {text}, rendered {renderCounts[text]} times
            </span>
        </div>
    );
});

export default RenderCountText;
