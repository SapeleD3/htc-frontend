import { PROTECTED_PATHS } from '../app/constants';

const { DASHBOARD, REFERRAL, TRANSACTION, PROFILE, HTSACADEMY, HTSTV } = PROTECTED_PATHS;
export const NAV = [
  {
    name: 'Dashboard',
    to: DASHBOARD,
  },
  {
    name: 'My Network',
    to: REFERRAL,
  },
  {
    name: 'HTS TV',
    to: HTSTV,
  },
  {
    name: 'HTS ACADEMY',
    to: HTSACADEMY,
  },
  {
    name: 'My Transaction',
    to: TRANSACTION,
  },
  {
    name: 'My Profile',
    to: PROFILE,
  },
];
