import React, { useReducer, useEffect, useLayoutEffect } from 'react';

const arrayReducer = (state, next) => [...state, next];

const TextWithEffectsList = ({ id }) => {
    const [list, add] = useReducer(arrayReducer, []);

    useEffect(() => add('useEffect onMount #1'), []);
    useLayoutEffect(() => add('useLayoutEffect onMount'), []);
    useEffect(() => add('useEffect onMount #2'), []);

    useEffect(() => {
        add(`useEffect onIdChange #1 ID:${id}`);
        return () => add(`cleanup of useEffect onIdChange #1 ID:${id}`);
    }, [id]);

    useLayoutEffect(() => {
        add(`useLayoutEffect onIdChange ID:${id}`);
        return () => add(`cleanup of useLayoutEffect onIdChange ID:${id}`);
    }, [id]);

    useEffect(() => {
        add(`useEffect onIdChange #2 ID: ${id}`);
        add('----------------------');
        return () => add(`cleanup of useEffect onIdChange #2 ID:${id}`);
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
