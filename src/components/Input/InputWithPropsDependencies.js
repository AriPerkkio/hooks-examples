import React, { memo, useReducer, useEffect } from 'react';

import Button from 'components/common/Button';
import { doImportantBusinessLogic } from 'utils';

const Parent = () => {
    const [count, increase] = useReducer(s => s + 1, 0);

    // Callback not memoized -> re-created on each render
    const onChange = (...args) => {
        doImportantBusinessLogic(args);
        increase();
    };

    return (
        <div>
            <h2>Rendered {count} times</h2>
            <Input onChange={onChange} count={count} />
        </div>
    );
};

const Input = ({ onChange }) => {
    const [enabled, toggle] = useReducer(s => !s, false);

    // Dependency onChange not memoized -> infinite loop
    useEffect(() => {
        enabled && onChange('Some message from Input');
    }, [enabled, onChange]);

    return <Button onClick={toggle}>Toggle</Button>;
};

export default memo(Parent);
