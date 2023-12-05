import React from 'react'
import UserPost from './API/End-points/Endpoints'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import { UserStorage } from './UseContext'
import User from './Components/User/User'
import ProtectedRoute from './ProtectedRoute'
import UserProf from './Components/User/UserProf'
import styles from '../../Animore/src/Components/User/UserStats.module.css'



const App = () => {
  return (
    <div className={styles.ajustes}>
      <BrowserRouter>
      <UserStorage>
      <Header></Header>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/login/*" element={<Login/>}/>
        <Route path ="/conta/*" element={<ProtectedRoute><User></User></ProtectedRoute>}/>
        <Route path ="perfil/:user*" element={<UserProf/>}/>
      </Routes>
      </UserStorage>
     
      </BrowserRouter>
  
    </div>
  )
}

export default App
