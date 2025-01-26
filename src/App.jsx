import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Signin from './components/sign-in/signin.component'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="/shop" element={<div>shop</div>} />
        <Route path='/sign-in' element={<Signin />} />
      </Route>
    </Routes>

  )
}

export default App
