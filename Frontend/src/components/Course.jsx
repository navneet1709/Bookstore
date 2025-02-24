import React from 'react'
import Cards from "./Cards";
import list from "../../public/list.json"
import {Link} from "react-router-dom"

const Course = () => {
  return (
  <>
    <div className='' >
       <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>We are delighted to have you {""}
            <span className='text-pink-500'>Here ! </span>
            </h1>
            <p className='mt-12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque hic ut, excepturi facere maiores, exercitationem dolorem aspernatur iste distinctio libero repellendus odit fugiat omnis, esse eius quis quae vel sunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque hic ut, excepturi facere maiores, exercitationem dolorem aspernatur iste distinctio libero repellendus odit fugiat omnis, esse eius quis quae vel sunt.
            </p>
            <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-3000'>Back</button>
            </Link>
          
       </div>
       <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
                 list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                 ))
          }
       </div>
    </div>

    </>
  )
}

export default Course