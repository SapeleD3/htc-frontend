import ComingSoon from '../components/comingSoon';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Landing from '../pages/Landing';
import { PUBLIC_PATHS, PROTECTED_PATHS } from './constants';
import About from '../pages/About/About';
import Benefits from '../pages/Benefits/Benefits';
import Team from '../pages/Team/Team';
import Dashboard from '../pages/Dashboard/Dashboard';
import Referral from '../pages/Referral/Referral';
import Transaction from '../pages/Transactions/Transaction';
import Index from '../pages/Profile/index'

const { LOGIN, REGISTER, FORGOT_PASS, LANDING, ABOUT, BENEFITS, TEAM } =
  PUBLIC_PATHS;
const { DASHBOARD, REFERRAL, TRANSACTION, PROFILE } = PROTECTED_PATHS;
export const PUBLIC_ROUTES = [
  {
    path: LANDING,
    page: Landing,
    exact: true,
  },
  {
    path: LOGIN,
    page: Login,
    exact: true,
  },
  {
    path: ABOUT,
    page: About,
    exact: true,
  },
  {
    path: BENEFITS,
    page: Benefits,
    exact: true,
  },
  {
    path: TEAM,
    page: Team,
    exact: true,
  },
  {
    path: REGISTER,
    page: Register,
  },
  {
    path: FORGOT_PASS,
    page: ComingSoon,
  },
];

export const PROTECTED_ROUTES = [
  {
    path: DASHBOARD,
    page: Dashboard,
  },
  {
    path: REFERRAL,
    page: Referral,
  },
  {
    path: TRANSACTION,
    page: Transaction,
  },
  {
    path: PROFILE,
    page: Index,
  },
];
