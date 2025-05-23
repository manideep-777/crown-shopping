import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import SignUpForm from '../sign-up-form/sign-up-form.component'
import SignInForm from '../sign-in-form/sign-in-form.component'

import { AuthenticationContainer } from './authentication.styles'

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
    <AuthenticationContainer>
      {/* sign in
      <button onClick={logGoogleUser} >Sign-in with google pop</button> */}
      {/* <button onClick={signInWithGoogleRedirect} >Sign-in with google redirect</button> */}
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}
