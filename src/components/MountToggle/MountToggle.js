import React, { useReducer } from 'react';

import Button from 'components/common/Button';

const MountToggle = ({ initialMounted, children }) => {
    const [mounted, toggleMounted] = useReducer(s => !s, !!initialMounted);

    return (
        <>
            <Button onClick={toggleMounted}>
                {mounted ? 'Unmount' : 'Mount'}
            </Button>

            {mounted && children}
        </>
    );
};

export default MountToggle;
