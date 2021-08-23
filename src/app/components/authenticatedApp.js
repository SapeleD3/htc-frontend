import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { PROTECTED_PATHS } from '../constants';
import SideBar from '../../components/sideBar';

const { DASHBOARD } = PROTECTED_PATHS;

export function AuthenticatedUserApp() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'}>
          <SideBar />
        </Route>
        <Redirect from='/*' to={DASHBOARD} />
      </Switch>
    </BrowserRouter>
  );
}
