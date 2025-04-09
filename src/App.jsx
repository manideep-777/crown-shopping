import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './components/authentication/authentication.component'
import ShopComponent from './components/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'

import { useEffect } from 'react';

import { setCurrentUser } from './store/user/user.action';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<ShopComponent />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/checkout' element={<Checkout />} />
      </Route>
    </Routes>

  )
}

export default App
