import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home/Home'
import Course from './components/Course'
import { Route,Routes } from "react-router-dom"
import Courses from './courses/Courses.jsx'
import Signup from './components/Signup.jsx'
import ContactUs from './components/ContactUs.jsx'


function App() {
 

  return (
    <>
    {/* <Home/>
    <Course/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<ContactUs/>}/>

      

      
    </Routes>
    </>
  )
}

export default App
