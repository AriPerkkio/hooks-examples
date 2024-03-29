import { useReducer, useEffect } from 'react';

const createStore = () => {
    let store = {};
    const listeners = [];

    const setStore = value => {
        const updatedPart = typeof value === 'function' ? value(store) : value;

        // Update store
        const prevStore = { ...store };
        store = { ...store, ...updatedPart };

        // Re-render listening components
        listeners.forEach(updateListener(prevStore, store));
    };

    const useStore = options => {
        const [, render] = useReducer(s => !s, true);

        useEffect(() => {
            const { shouldComponentUpdate } = options || {};
            const listener = { render, shouldComponentUpdate };

            listeners.push(listener);

            return () => listeners.splice(listeners.indexOf(listener), 1);
        }, [options]);

        return [store, setStore];
    };

    return { useStore, listeners };
};

const defaultCompare = () => true;
const updateListener = (prevStore, store) => listener => {
    const { render, shouldComponentUpdate } = listener;

    if ((shouldComponentUpdate || defaultCompare)(prevStore, store)) {
        render();
    }
};

const { useStore, listeners } = createStore(); // Singleton usage for easier demo
export { useStore, listeners };
