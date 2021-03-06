

/**
 * Paths available to users who are not logged in
 * @constant
 */
export const PUBLIC_PATHS = {
  LANDING: '/',
  LOGIN: '/auth/login',
  ADMIN_LOGIN: '/admin/auth/login',
  REGISTER: '/auth/register',
  FORGOT_PASS: '/auth/forgot-password',
  ABOUT: '/about',
  BENEFITS: '/benefit',
  TEAM: '/team',
  REFERRAL_REGISTER: '/network/:username',
};

/**
 * Paths available to users who are not logged in
 * @constant
 */
export const PROTECTED_PATHS = {
  DASHBOARD: '/dashboard',
  REFERRAL: '/network',
  TRANSACTION: '/transactions',
  PROFILE: '/profile',
  HTSTV: '/hts-tv',
  HTSACADEMY: '/hts-academy',
  WATCH: '/watch/:id'
};

/**
 * Paths available to users who are not logged in
 * @constant
 */
export const ADMIN_PATHS = {
  DASHBOARD: '/admin/dashboard',
  POST:'/admin/create',
  PEOPLE: '/admin/people',
  AWATCH: '/admin/watch/:id',
  EDIT:'/admin/edit/:id',
  CONTENT:'/admin/content'
};
