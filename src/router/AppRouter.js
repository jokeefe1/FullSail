import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';
import NotFound from '../components/NotFound/NotFound';
import Student from '../components/Student/Student';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/login" component={Student} exact />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;
