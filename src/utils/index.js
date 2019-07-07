const generateTextCallCounts = {};

const generateText = (text, id) => {
    generateTextCallCounts[id] = (generateTextCallCounts[id] || 0) + 1;
    return `Generated: ${text} - ${id}`;
};

const compose = (...fns) =>
    fns.reduce((prevFn, nextFn) => (...args) => nextFn(prevFn(...args)));

// Mock function for examples "business context"
const doImportantBusinessLogic = () => {};

export {
    generateText,
    generateTextCallCounts,
    compose,
    doImportantBusinessLogic,
};
