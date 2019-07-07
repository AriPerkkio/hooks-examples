import { useState, useCallback } from 'react';

const useEventTargetValue = initialValue => {
    const [state, setState] = useState(initialValue);

    const setValue = useCallback(event => {
        const { target } = event || {};
        const { value } = target || {};

        setState(value);
    }, []);

    return [state, setValue];
};

export default useEventTargetValue;
