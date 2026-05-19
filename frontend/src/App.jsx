import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='signUp' element={<SignUp/>}></Route>
    </Routes>
  )
}

export default App
