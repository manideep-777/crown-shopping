import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils'

import SignUpForm from '../sign-up-form/sign-up-form.component'
import SignInForm from '../sign-in-form/sign-in-form.component'

import './authentication.styles.scss'

export default function Authentication() {

  // useEffect(() => {
  //   const res = await getRedirectResult(auth);
  //   console.log(res);
  // }, [])
  

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div className="authentication-container">
      {/* sign in
      <button onClick={logGoogleUser} >Sign-in with google pop</button> */}
      {/* <button onClick={signInWithGoogleRedirect} >Sign-in with google redirect</button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  )
}
