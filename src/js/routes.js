import React from 'react'
import { Route, Redirect } from 'react-router'

import { App } from 'containers/layout'
import { NotFoundPage } from 'containers/NotFoundPage'

export default (
  <Route>
    <Redirect from="/" to="/all" />

    <Route path="/" component={App} backUrlType="all">
      <Route
        path="all"
        getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('containers/AllForms').default)
          })
        }}
      />
      <Route
        path="view/:id"
        getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('containers/Browser').default)
          })
        }}
      />
    </Route>

    <Route
      path="/new"
      backUrlType="all"
      getComponent={(location, cb) => {
        require.ensure([], require => {
          cb(null, require('containers/NewForm').default)
        })
      }}
    />

    <Route
      path="/edit/:id"
      backUrlType="all"
      getComponent={(location, cb) => {
        require.ensure([], require => {
          cb(null, require('containers/NewForm').default)
        })
      }}
    />

    <Route path="*" component={NotFoundPage} />
  </Route>
)
