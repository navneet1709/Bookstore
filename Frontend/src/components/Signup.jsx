import React from 'react'
import {Link} from "react-router-dom"
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
const Signup = () => {
   const { register, handleSubmit,  formState: { errors } } = useForm();
  
    const onSubmit = async (data) => {
      const userInfo = {
        fullname : data.fullname,
        email : data.email,
        password : data.password
      }
      
      await axios.post("http://localhost:8000/user/signup",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
          toast.success('Successfully created!');
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      }).catch((error)=>{
         if(error.response){
          console.log(error)
          toast.error("Error: " + error.response.data.message);
         }
      })
    };
  
  return (
    <>
   <div className='flex h-screen items-center justify-center'>
   <div id="my_modal_3" className="border-[2px] shadow-md p-5 rounded-md">
  <div className="">
    <form   onSubmit={handleSubmit(onSubmit)} method="div">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
    <h3 className="font-bold text-lg">Signup</h3>

    <div className='mt-4 space-y-2'>
        <span>Fullname</span>
        <br/>
        <input type='text' placeholder='Enter your fullname' className='w-80 px-3 py-1 border rounded-md outline-none' 
         {...register("fullname", { required: true })} 
        />
         {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}

    </div>


    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type='email' placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'
         {...register("email", { required: true })} 
        />
             {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>

    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input type='text' placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none'
         {...register("password", { required: true })} 
        />
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>

        <div className='flex justify-around mt-4'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
                <p>Have account?{" "} 
                <Link to="/" className='underline text-blue-500 cursor-pointer'>Login</Link>{" "}</p>
        </div>
        </form>
  </div>

</div>
   </div>

    </>

  )
}

export default Signup