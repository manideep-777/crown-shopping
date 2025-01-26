import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './components/authentication/authentication.component'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="/shop" element={<div>shop</div>} />
        <Route path='/auth' element={<Authentication />} />
      </Route>
    </Routes>

  )
}

export default App
