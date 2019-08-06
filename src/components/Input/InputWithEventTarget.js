import React from 'react';

import Stringify from 'components/Stringify';
import { useEventTargetValue } from 'hooks';

const InputWithEventTarget = () => {
    const [value, onChange] = useEventTargetValue('Initial value');

    return (
        <>
            <input
                type='text'
                className='common-input block'
                value={value}
                onChange={onChange}
            />
            <Stringify>{value}</Stringify>
        </>
    );
};

export default InputWithEventTarget;
