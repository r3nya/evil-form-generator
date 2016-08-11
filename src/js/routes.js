import React from 'react'
import { Route, Redirect } from 'react-router'

import { App } from 'containers/layout'

import AllForms from 'containers/AllForms'
import NewForm from 'containers/NewForm'
import Browser from 'containers/Browser'

import { NotFoundPage } from 'containers/NotFoundPage'

export default (
  <Route>
    <Redirect from="/" to="/all" />

    <Route path="/" component={App}>
      <Route path="all" component={AllForms} />
      <Route path="new" backUrlType="all" component={NewForm} />
      <Route path="view/:id" component={Browser} />
    </Route>

    <Route path="*" component={NotFoundPage} />
  </Route>
)
