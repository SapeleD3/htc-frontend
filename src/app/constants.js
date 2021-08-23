/**
 * Paths available to users who are not logged in
 * @constant
 */
export const PUBLIC_PATHS = {
  LANDING: '/',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  FORGOT_PASS: '/auth/forgot-password',
  ABOUT:'/about',
  BENEFITS:'/benefit'
};

/**
 * Paths available to users who are not logged in
 * @constant
 */
export const PROTECTED_PATHS = {
  HOME: '/user',
};
