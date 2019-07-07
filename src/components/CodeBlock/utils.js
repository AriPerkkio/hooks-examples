const REGEX_STRINGIFY_IMPORT = /\nimport Stringify from 'components\/Stringify';/g;
const REGEX_CODEBLOCKBUTTON_IMPORT = /\nimport { CodeBlockButton } from 'components\/CodeBlock';/g;
const REGEX_STRINGIFY = /\n\s*<Stringify(\s|\S)*>(\s|\S)*<\/Stringify>/g;
const REGEX_CODEBLOCKBUTTON = /\n\s*<CodeBlockButton(\s|\w|[='/.])*>/g;
const REGEX_FRAGMENT = /(\s*) (<>|<\/>)/g;
const REGEX_EMPTY_DIV = /\n\s*<div>\s*<\/div>/g;
const REGEX_RETURN = /(return \(\n)(\s\S*)+(\))/gs;
const REGEX_INDENT = /( ){4}/g;
const REGEX_NEWLINE_INDENT = /\n( ){4}/g;
const REGEX_CLOSING_BRACKET = /\)/g;
const REGEX_PRETTIER_IGNORE = /\n\s*\/\/ prettier-ignore/g;
const REGEX_DOUBLE_NEWLINES = /\n\n\n/g;

const removePrettierIgnoreComments = code =>
    code.replace(REGEX_PRETTIER_IGNORE, '\n');

const decreaseIndent = indent => code =>
    code.replace(REGEX_INDENT, ' '.repeat(indent));

const decreaseNewlineIndent = code =>
    code
        .replace(REGEX_NEWLINE_INDENT, '\n')
        .replace(REGEX_CLOSING_BRACKET, '    )');

const removeStringify = code =>
    code.replace(REGEX_STRINGIFY, '').replace(REGEX_STRINGIFY_IMPORT, '');

const removeFragment = code =>
    code
        .replace(REGEX_FRAGMENT, '')
        .replace(REGEX_RETURN, decreaseNewlineIndent);

const removeCodeBlockButton = code =>
    code
        .replace(REGEX_CODEBLOCKBUTTON, '')
        .replace(REGEX_CODEBLOCKBUTTON_IMPORT, '');

const removeEmptyDivs = code => code.replace(REGEX_EMPTY_DIV, '');

const removeDoubleNewlines = code =>
    code.replace(REGEX_DOUBLE_NEWLINES, '\n\n');

const formatCodes = (codes, options) => {
    const formatters = [
        options.hideStringify && removeStringify,
        options.hideFragment && removeFragment,
        options.hideCodeBlockBtn && removeCodeBlockButton,
        decreaseIndent(options.indent),
        removePrettierIgnoreComments,
        removeEmptyDivs,
        removeDoubleNewlines,
    ].filter(Boolean);

    const format = code =>
        formatters.reduce((c, formatter) => formatter(c), code);

    return codes.map(format);
};

export { formatCodes };
