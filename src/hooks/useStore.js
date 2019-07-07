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

    const useStore = (options = {}) => {
        const [, render] = useReducer(s => s + 1, 0);

        // Add listener once
        useEffect(() => {
            const listener = {
                render,
                shouldComponentUpdate: options.shouldComponentUpdate,
            };

            listeners.push(listener);

            // Remove when unmounted
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
