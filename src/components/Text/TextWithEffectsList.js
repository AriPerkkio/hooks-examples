import React, { useReducer, useEffect, useLayoutEffect } from 'react';

const TextWithEffectsList = ({ id }) => {
    const [list, add] = useReducer((s, next) => [...s, next], []);

    useEffect(() => add('useEffect onMount'), []);
    useLayoutEffect(() => add('useLayoutEffect onMount'), []);

    useEffect(() => {
        add(`useEffect onIdChange ID:${id}`);
        add('----------------------'); // hide-line
        return () => add(`cleanup of useEffect onIdChange #1 ID:${id}`);
    }, [id]);

    useLayoutEffect(() => {
        add(`useLayoutEffect onIdChange ID:${id}`);
        return () => add(`cleanup of useLayoutEffect onIdChange ID:${id}`);
    }, [id]);

    return (
        <ul className='text-effects-list'>
            {list.map((text, key) => (
                <li key={key}>{text}</li>
            ))}
        </ul>
    );
};

export default TextWithEffectsList;
