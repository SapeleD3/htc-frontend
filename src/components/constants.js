import { PROTECTED_PATHS, ADMIN_PATHS } from '../app/constants';
import { RiDashboardLine } from 'react-icons/ri';
import { FaNetworkWired } from 'react-icons/fa';
import { CgScreen, CgProfile } from 'react-icons/cg';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { IoCreateOutline  } from 'react-icons/io5'
import { IoIosPeople } from 'react-icons/io'

const { DASHBOARD, REFERRAL, TRANSACTION, PROFILE, HTSACADEMY, HTSTV } =
  PROTECTED_PATHS;

const { DASHBOARD: ADMIN_DASH, POST: ADMIN_POST, PEOPLE } = ADMIN_PATHS;
export const NAV = [
  {
    name: 'Dashboard',
    to: DASHBOARD,
    icon: <RiDashboardLine size={25} color='white' />,
  },
  {
    name: 'My Network',
    to: REFERRAL,
    icon: <FaNetworkWired size={25} color='white' />,
  },
  {
    name: 'HTS TV',
    to: HTSTV,
    icon: <CgScreen size={25} color='white' />,
  },
  {
    name: 'HTS ACADEMY',
    to: HTSACADEMY,
    icon: <HiOutlineAcademicCap size={25} color='white' />,
  },
  {
    name: 'My Transaction',
    to: TRANSACTION,
    icon: <RiMoneyDollarCircleLine size={25} color='white' />,
  },
  {
    name: 'My Profile',
    to: PROFILE,
    icon: <CgProfile size={25} color='white' />,
  },
];

export const FREE_NAV = [
  {
    name: 'Dashboard',
    to: DASHBOARD,
    icon: <RiDashboardLine size={25} color='white' />,
  },
  {
    name: 'My Profile',
    to: PROFILE,
    icon: <CgProfile size={25} color='white' />,
  },
];

export const ADMIN_NAV = [
  {
    name: 'Dashboard',
    to: ADMIN_DASH,
    icon: <RiDashboardLine size={25} color='white' />,
  },
  {
    name: 'Create',
    to: ADMIN_POST,
    icon: <IoCreateOutline size={25} color='white' />,
  },
  {
    name: 'People',
    to: PEOPLE,
    icon: <IoIosPeople size={25} color='white' />,
  },
];
