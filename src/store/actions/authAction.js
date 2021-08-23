import { createAction } from '@reduxjs/toolkit';

export const authSetUser = createAction('auth/setUser', (user) => {
  return {
    payload: user,
  };
});
