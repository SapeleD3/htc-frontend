import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { PUBLIC_PATHS } from '../constants';
import { PUBLIC_ROUTES } from '../routes';
import { Flex, Stack } from '@chakra-ui/react';

const { LOGIN } = PUBLIC_PATHS;

export function UnAuthenticatedUserApp() {
  return (
    <BrowserRouter>
      <Flex direction='column' height='100vh'>
        <Stack flex='1'>
          <Switch>
            {PUBLIC_ROUTES.map(({ page, path, exact }) => (
              <Route key={path} component={page} path={path} exact={exact} />
            ))}
            <Redirect from='/*' to={LOGIN} />
          </Switch>
        </Stack>
      </Flex>
    </BrowserRouter>
  );
}
