import ComingSoon from '../components/comingSoon';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { PUBLIC_PATHS, PROTECTED_PATHS } from './constants';

const {
  LOGIN,
  REGISTER,
  FORGOT_PASS,
  //  LANDING
} = PUBLIC_PATHS;
const { HOME } = PROTECTED_PATHS;
export const PUBLIC_ROUTES = [
  // {
  //   path: LANDING,
  //   page: ComingSoon,
  //   exact: true,
  // },
  {
    path: LOGIN,
    page: Login,
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
    path: HOME,
    page: ComingSoon,
  },
];
