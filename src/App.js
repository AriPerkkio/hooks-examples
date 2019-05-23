import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

const App = () => (
    <HashRouter>
        <Switch>
            <Route path='/*' component={<div>asd</div>} />
        </Switch>
    </HashRouter>
);

export default App;
