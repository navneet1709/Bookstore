import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course.jsx'
import Footer from '../components/Footer'

const Courses = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Course/>
    </div>
    <Footer/>
    </>
  )
}

export default Courses