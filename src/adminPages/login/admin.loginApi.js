import { NotifyHandler } from '../constants';
import http, { AUTH_ROUTES } from '../../services/api';

export const adminLogin = async (setloading, userDetails, toast) => {
  try {
    const {
      data: { data },
    } = await http.post(AUTH_ROUTES.ADMIN_LOGIN, userDetails);
    localStorage.setItem('11#221#', data.token);
    setloading(false);
    return (window.location.href = '/admin/dashboard');
  } catch (error) {
    setloading(false);
    return NotifyHandler(toast, 'error', 'invalid credentials');
  }
};

export const logoutAdmin = async () => {
  localStorage.removeItem('11#221#');
  window.location.href = '/auth/login';
};
