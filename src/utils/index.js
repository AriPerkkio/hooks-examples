const generateTextCallCounts = {};

const generateText = (text, id) => {
    generateTextCallCounts[id] = (generateTextCallCounts[id] || 0) + 1;
    return `Generated: ${text} - ${id}`;
};

const compose = (...fns) =>
    fns.reduce((prevFn, nextFn) => (...args) => nextFn(prevFn(...args)));

// Mock function for examples "business context"
const doImportantBusinessLogic = () => {};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export {
    generateText,
    generateTextCallCounts,
    compose,
    delay,
    doImportantBusinessLogic,
};
