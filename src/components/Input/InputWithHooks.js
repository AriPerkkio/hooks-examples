import React, { useState } from 'react';

import Stringify from 'components/Stringify';

const InputWithHook = () => {
    const [value, setValue] = useState('Initial Value');
    const onChange = ({ target: { value } }) => setValue(value);

    return (
        <>
            <input type='text' value={value} onChange={onChange} />
            <Stringify>{{ value }}</Stringify>
        </>
    );
};

export default InputWithHook;
