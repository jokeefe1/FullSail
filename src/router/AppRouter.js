import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import NotFound from '../components/NotFound/NotFound';

const AppRouter = () => (
    <BrowserRouter>
            <Switch>
                <Route path="/" component={Header} exact />
                <Route path="/request-info" component={Header} exact />
                <Route path="/chat-live" component={Header} exact />
                <Route path="/Apply" component={Header} exact />
                <Route component={NotFound} />
            </Switch>
    </BrowserRouter>
)

export default AppRouter