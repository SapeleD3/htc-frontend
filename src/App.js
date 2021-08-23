import React from 'react';
import { AuthenticatedUserApp } from './app/components/authenticatedApp';
import { UnAuthenticatedUserApp } from './app/components/unAuthenticatedApp';
import Loading from './components/full-page-loader';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import { authSetUser } from './store/actions/authAction';

const { useState, useEffect } = React;

function App() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    // Handle user state changes
    const onAuthStateChanged = async (user) => {
      const userDoc = firebase.auth().currentUser;
      if (userDoc) {
        const userData = await firebase
          .firestore()
          .collection('users')
          .doc(userDoc.uid)
          .get();
        const userInfo = userData.data();
        dispatch(authSetUser(userInfo));
        userInfo && setIsLoggedIn(true);
      }
      if (checkingStatus) setCheckingStatus(false);
    };

    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
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
