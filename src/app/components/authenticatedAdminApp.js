import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { ADMIN_PATHS } from '../constants';
import SideBar from '../../components/sideBar';

const { DASHBOARD } = ADMIN_PATHS;

export function AuthenticatedAdminApp() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/admin'}>
          <SideBar />
        </Route>
        <Redirect from='/*' to={DASHBOARD} />
      </Switch>
    </BrowserRouter>
  );
}
