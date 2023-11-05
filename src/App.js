import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Sidenav from './Sidenav'
import UserProfile from './Pages/UserProfile'
import Settings from './Pages/Settings'
import Help from './Pages/Help'
import Workspace from './Pages/Workspace'

export default function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<UserProfile/>}/>
      <Route path="/setting" element={<Settings/>}/>
      <Route path="/help" element={<Help/>}/>
      <Route path="/workspace" element={<Workspace/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  )
}

