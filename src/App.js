import React from 'react';
import { AuthenticatedUserApp } from './app/components/authenticatedApp';
import { UnAuthenticatedUserApp } from './app/components/unAuthenticatedApp';
import Loading from './components/full-page-loader';
import { useDispatch } from 'react-redux';
import { authSetUser } from './store/actions/authAction';
import jwtDecode from 'jwt-decode';
import http, { AUTH_ROUTES } from './services/api';

const { useState, useEffect } = React;

function App() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    // Handle user state changes
    const getAuthData = async () => {
      const {
        data: { data },
      } = await http.get(AUTH_ROUTES.USER);
      const userInfo = data.userData;
      dispatch(authSetUser(userInfo));
      userInfo && setIsLoggedIn(true);
      if (checkingStatus) setCheckingStatus(false);
    };

    const deleteTokenAndKickUserOut = async () => {
      localStorage.removeItem('11#221#');
      if (checkingStatus) setCheckingStatus(false);
    };
    const token = localStorage.getItem('11#221#');
    if (token) {
      const decoded = jwtDecode(token);
      const expiryDate = new Date(decoded.exp * 1000);
      return new Date() > expiryDate
        ? deleteTokenAndKickUserOut()
        : getAuthData();
    }
    return deleteTokenAndKickUserOut();
  }, [checkingStatus, dispatch]);

  if (checkingStatus) {
    return <Loading />;
  }

  if (isLoggedIn) {
    return <AuthenticatedUserApp />;
  }

  return <UnAuthenticatedUserApp />;
}

export default App;
