import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

export default function Signin() {

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    
  }

  return (
    <div>
      sign in
      <button onClick={logGoogleUser} >Sign-in with google pop</button>
    </div>
  )
}
