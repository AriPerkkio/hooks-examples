import React from 'react';

import Stringify from 'components/Stringify';
import Button from 'components/common/Button';
import { useStore } from 'hooks';

// Update only when state.three updates
const shouldComponentUpdate = (prevState, newState) =>
    prevState.three !== newState.three;

const InputWithShouldUpdate = ({ id }) => {
    const [state, setState] = useStore({ shouldComponentUpdate });
    const onClick = () => setState(prevState => ({ [id]: !prevState[id] }));

    return (
        <>
            <Button onClick={onClick}>setState</Button>
            <Stringify>{state}</Stringify>
        </>
    );
};

export default InputWithShouldUpdate;
