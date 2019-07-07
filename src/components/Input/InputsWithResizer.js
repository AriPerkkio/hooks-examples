import React, { useState } from 'react';

import { useWindowResize } from 'hooks';

const InputsWithResizer = () => {
    const [displayMode, setDisplayMode] = useState('medium');

    useWindowResize(width => setDisplayMode(width > 1400 ? 'large' : 'medium'));

    return (
        <nav className='sidebar-navigation'>
            <a href='#front-page' className='sidebar-navigation-link'>
                Company ABC
            </a>

            {/* Prevent forwarding mobile users to dashboard */}
            {displayMode === 'large' && (
                <a href='#dashboard' className='sidebar-navigation-link'>
                    Dashboard
                </a>
            )}

            <a href='#contact' className='sidebar-navigation-link'>
                Contact us
            </a>
            <a href='#about' className='sidebar-navigation-link'>
                About us
            </a>
        </nav>
    );
};

export default InputsWithResizer;
