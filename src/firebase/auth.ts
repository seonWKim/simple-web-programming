import { auth } from '@site/src/firebase/config';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    return await signInWithPopup(auth, provider);
  } catch (error) {
    console.error('Error during sign-in: ', error);
  }
};

const getUser = (): Promise<User | null> => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });
};

export { signInWithGoogle, getUser };
