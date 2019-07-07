import 'core-js/features/promise';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.scss';

ReactDOM.render(<App />, document.getElementById('app-root'));

if (module.hot) {
    module.hot.accept('./App', () => {
        const UpdatedApp = require('./App').default;

        ReactDOM.render(<UpdatedApp />, document.getElementById('app-root'));
    });
}
