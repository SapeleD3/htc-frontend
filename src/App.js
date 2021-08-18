import React from 'react';
import { AuthenticatedUserApp } from './app/components/authenticatedApp';
import { UnAuthenticatedUserApp } from './app/components/unAuthenticatedApp';
import Loading from './components/full-page-loader';

const { useState, useEffect } = React;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const status = false;
        if (status) {
          setIsLoggedIn(true);
        }
        setCheckingStatus(false);
      } catch (error) {
        setCheckingStatus(false);
      }
    };
    checkStatus();
  }, []);

  if (checkingStatus) {
    return <Loading />;
  }

  if (isLoggedIn) {
    return <AuthenticatedUserApp />;
  }

  return <UnAuthenticatedUserApp />;
}

export default App;
