import firebase from '../../firebase';
import { NotifyHandler } from '../constants';

export const signupUser = async (setloading, userDetails, toast) => {
  try {
    setloading(true);
    //deconstruct the users details we will need these later
    const {
      phoneNumber,
      email,
      password,
      userName,
      fullName,
      myLink,
      referralLink,
    } = userDetails;
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    await firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .set({
        phoneNumber,
        email,
        fullName,
        userName,
        referralLink,
        myLink,
        createdAt: new Date(),
        amount: 0,
        membersCount: 0,
      });
    setloading(false);
    return NotifyHandler(toast, 'success', 'Registration Successful!');
  } catch (error) {
    console.log('ERROR', error);
    setloading(false);
    if (error.code === 'auth/email-already-in-use') {
      return NotifyHandler(toast, 'error', 'email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      return NotifyHandler(toast, 'error', 'invalid email address!');
    }
    if (error.code === 'auth/weak-password') {
      return NotifyHandler(toast, 'error', 'weak password!');
    }

    return NotifyHandler(toast, 'error', 'something went wrong');
  }
};
