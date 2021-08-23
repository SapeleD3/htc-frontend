import firebase from '../../firebase';
import { NotifyHandler } from '../constants';

export const userLogin = async (setloading, userDetails, toast) => {
  try {
    const { email, password } = userDetails;
    await firebase.auth().signInWithEmailAndPassword(email, password);
    setloading(false);
  } catch (error) {
    setloading(false);
    return NotifyHandler(toast, 'error', 'invalid credentials');
  }
};

export const logoutUser = async () => {
  await firebase.auth().signOut();
};
