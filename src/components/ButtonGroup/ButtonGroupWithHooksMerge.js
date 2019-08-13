import React, { useReducer } from 'react';

import Stringify from 'components/Stringify';
import Button from 'components/common/Button';

const initialState = { left: false, right: false };

const ButtonGroupWithHooksMerge = () => {
    const [state, setState] = useReducer(
        (prev, cb) => ({ ...prev, ...cb(prev) }),
        initialState
    );

    const onLeftClick = () => setState(({ left }) => ({ left: !left }));
    const onRightClick = () => setState(({ right }) => ({ right: !right }));

    return (
        <>
            <Button onClick={onLeftClick}>Left</Button>
            <Button onClick={onRightClick}>Right</Button>

            <Stringify>{state}</Stringify>
        </>
    );
};

export default ButtonGroupWithHooksMerge;
