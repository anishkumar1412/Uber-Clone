import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Start/>}/>
        <Route path='/home' element = {
          <UserProtectedWrapper>
            <Home/>
          </UserProtectedWrapper>

          }/>
        <Route path='/login' element = {<UserLogin/>}/>
        <Route path='/riding' element = {<Riding/>}/>
        <Route path='/signup' element = {<UserSignup/>}/>
        <Route path='/captain-login' element = {<CaptainLogin/>}/>
        <Route path='/captain-signup' element = {<CaptainSignup/>}/>
      <Route path='/logout' element={
        <UserProtectedWrapper>
          <UserLogout/>
        </UserProtectedWrapper>
      }></Route>
      <Route path='/captain-logout' element={
        <CaptainProtectedWrapper>

          <CaptainLogout/>
        </CaptainProtectedWrapper>
        
      }></Route>

      <Route path='/captain-home' element = {
        <CaptainProtectedWrapper>

          <CaptainHome/>
        </CaptainProtectedWrapper>
      }/>

      <Route path='/captain-riding' element = {
       <CaptainRiding/>
      }/>
      </Routes>
   
    </div>
  )
}

export default App
