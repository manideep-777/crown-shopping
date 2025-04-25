import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './components/authentication/authentication.component'
import ShopComponent from './components/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'

import { useEffect } from 'react';

import { checkUserSession } from './store/user/user.action';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    
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
