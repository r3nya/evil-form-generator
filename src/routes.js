import React from 'react';
import { Route, Redirect } from 'react-router';

import { App } from 'containers/layout';
import Home from 'containers/Home';

import { NotFoundPage } from 'containers/NotFoundPage';

export default (
  <Route>
    <Redirect from="/" to="/home" />

    <Route path="/" component={App}>
      <Route path="home" component={Home} />
    </Route>

    <Route path="*" component={NotFoundPage} />
  </Route>
);
