import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { PROTECTED_PATHS } from '../constants';
import { PROTECTED_ROUTES } from '../routes';

const { HOME } = PROTECTED_PATHS;

export function AuthenticatedUserApp() {
  return (
    <BrowserRouter>
      <Switch>
        {PROTECTED_ROUTES.map(({ page, path, exact }) => (
          <Route key={path} component={page} path={path} exact={exact} />
        ))}
        <Redirect from='/*' to={HOME} />
      </Switch>
    </BrowserRouter>
  );
}
