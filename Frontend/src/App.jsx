import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home/Home.jsx'
import Course from './components/Course'
import { Navigate, Route,Routes } from "react-router-dom"
import Courses from './courses/Courses.jsx'
import Signup from './components/Signup.jsx'
import ContactUs from './components/ContactUs.jsx'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx'


function App() {

 const [authUser,setAuthUser] = useAuth();
     console.log(authUser)

  return (
    <>
    {/* <Home/>
    <Course/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser ? <Courses/> : <Navigate to ="/signup"/> }/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<ContactUs/>}/>

      
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
