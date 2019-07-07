import React, { useState } from 'react';

import Stringify from 'components/Stringify';
import Button from 'components/common/Button';

const initialState = { left: false, right: false };

const ButtonGroupWithHooks = () => {
    const [state, setState] = useState(initialState);

    const onLeftClick = () => setState(({ left }) => ({ left: !left }));
    const onRightClick = () => setState(({ right }) => ({ right: !right }));

    return (
        <>
            <h3>Without merge</h3>
            <Button onClick={onLeftClick}>Left</Button>
            <Button onClick={onRightClick}>Right</Button>

            <Stringify>{state}</Stringify>
        </>
    );
};

export default ButtonGroupWithHooks;
