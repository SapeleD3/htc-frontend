import ComingSoon from '../components/comingSoon';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Landing from '../pages/Landing';
import { PUBLIC_PATHS, PROTECTED_PATHS, ADMIN_PATHS } from './constants';
import About from '../pages/About/About';
import Benefits from '../pages/Benefits/Benefits';
import Team from '../pages/Team/Team';
import Dashboard from '../pages/Dashboard/Dashboard';
import FreeDashboard from '../pages/FreeDashboard';
import Referral from '../pages/Referral/Referral';
import Transaction from '../pages/Transactions/Transaction';
import Index from '../pages/Profile/index';
import HtsTv from '../pages/HtsTv/HtsTv';
import AdminLogin from '../adminPages/login';
import Post from '../adminPages/Post/Post';
import People from '../adminPages/People/People';
import Watch from '../pages/HtsTv/Watch';
import Awatch from '../adminPages/Post/AWatch'
import Content from '../adminPages/Content/Content';
import EditContent from '../adminPages/Post/EditContent';
import AdminDashboard from '../adminPages/Dashboard/Dashboard';

const {
  LOGIN,
  REGISTER,
  FORGOT_PASS,
  LANDING,
  ABOUT,
  BENEFITS,
  TEAM,
  ADMIN_LOGIN,
  REFERRAL_REGISTER,
} = PUBLIC_PATHS;
const { DASHBOARD: ADMIN_DASHBOARD, POST: ADMIN_POST, PEOPLE, AWATCH, EDIT, CONTENT } = ADMIN_PATHS;
const { DASHBOARD, REFERRAL, TRANSACTION, PROFILE, HTSTV, WATCH } = PROTECTED_PATHS;
export const PUBLIC_ROUTES = [
  {
    path: LANDING,
    page: Landing,
    exact: true,
  },
  {
    path: REFERRAL_REGISTER,
    page: Register,
    exact: true,
  },

  {
    path: ADMIN_LOGIN,
    page: AdminLogin,
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
    path: HTSTV,
    page: HtsTv,
  },
  {
    path: TRANSACTION,
    page: Transaction,
  },
  {
    path: PROFILE,
    page: Index,
  },
  {
    path: WATCH,
    page: Watch,
  },
  
];

export const FREE_ROUTES = [
  {
    path: DASHBOARD,
    page: FreeDashboard,
  },
  {
    path: PROFILE,
    page: Index,
  },
];

export const ADMIN_ROUTES = [
  {
    path: ADMIN_DASHBOARD,
    page: AdminDashboard,
  },
  {
    path: ADMIN_POST,
    page: Post,
  },
  {
    path: PEOPLE,
    page: People,
  },
  {
    path: AWATCH,
    page: Awatch,
  },
  {
    path: EDIT,
    page: EditContent,
  },
  {
    path: CONTENT,
    page: Content,
  },
];
