import React from 'react';
import { AuthenticatedUserApp } from './app/components/authenticatedApp';
import { UnAuthenticatedUserApp } from './app/components/unAuthenticatedApp';
import Loading from './components/full-page-loader';
import firebase from 'firebase';

const { useState, useEffect } = React;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      user && setIsLoggedIn(true);
      if (checkingStatus) setCheckingStatus(false);
    }

    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [checkingStatus]);

  if (checkingStatus) {
    return <Loading />;
  }

  if (isLoggedIn) {
    return <AuthenticatedUserApp />;
  }

  return <UnAuthenticatedUserApp />;
}

export default App;
