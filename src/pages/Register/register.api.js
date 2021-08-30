import { NotifyHandler } from '../constants';
import http, { AUTH_ROUTES } from '../../services/api';

export const signupUser = async (setloading, userDetails, toast) => {
  try {
    setloading(true);
    const {
      data: { data },
    } = await http.post(AUTH_ROUTES.REGISTER, userDetails);
    localStorage.setItem('11#221#', data.token);
    setloading(false);
    NotifyHandler(toast, 'success', 'Registration Successful!');
    return (window.location.href = '/dashboard');
  } catch (error) {
    setloading(false);
    const message = error.response.data.message || 'something went wrong';
    return NotifyHandler(toast, 'error', message);
  }
};
