import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../components/HomePage/HomePage'
import NotFound from '../components/NotFound/NotFound';

const AppRouter = () => (
    <BrowserRouter>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route component={NotFound} />
            </Switch>
    </BrowserRouter>
)

export default AppRouter