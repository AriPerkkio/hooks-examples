import React, { useState } from 'react';

import Stringify from 'components/Stringify';

const InputWithHooksLazyInitialState = () => {
    const [value, setValue] = useState(() => 2 * 10);
    const onChange = ({ target: { value } }) => setValue(value);

    return (
        <>
            <input type='text' value={value} onChange={onChange} />
            <Stringify>{{ value }}</Stringify>
        </>
    );
};

export default InputWithHooksLazyInitialState;
