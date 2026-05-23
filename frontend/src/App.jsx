import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='signUp' element={<SignUp/>}></Route>
      <Route path='jobs' element={<Jobs/>}></Route>
      <Route path='browse' element={<Browse/>}></Route>
      <Route path='profile' element={<Profile/>}></Route>
      <Route path='/description/:id' element={<JobDescription/>}></Route>
    </Routes>
  )
}

export default App
