import React, { memo } from 'react';

import Stringify from 'components/Stringify';
import Button from 'components/common/Button';
import { useStore } from 'hooks';

const InputWithStore = ({ id }) => {
    const [state, setState] = useStore();
    const onClick = () => setState(prevState => ({ [id]: !prevState[id] }));

    return (
        <>
            <Button onClick={onClick}>setState</Button>
            <Stringify>{state}</Stringify>
        </>
    );
};

export default memo(InputWithStore);
