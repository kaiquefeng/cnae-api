import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main'
import Cnaes from './pages/cnaes'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/classes/:id" component={Cnaes} />
        </Switch>
    </BrowserRouter>
);

export default Routes;