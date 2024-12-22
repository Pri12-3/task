import React from 'react'
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'
import Auth from "./pages/auth/index"
import Chat from "./pages/chat/index"
import Profile from "./pages/profile/index"

export default function Home() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/auth' element={<Auth/>}></Route>
    <Route path='/chat' element={<Chat/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>

    <Route path="*" element={<Navigate to='/auth'/>}/>
    </Routes>
    </BrowserRouter>
  )
}



