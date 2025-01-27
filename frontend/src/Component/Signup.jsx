import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { Link } from 'react-router-dom'



function Signup() {
  return (
    <>
     <div className='w-screen flex justify-center items-center lg:flex-row flex-col bg-[#2C2638]'>
        <div className='lg:w-1/2 w-full lg:order-1 order-2 h-screen  p-10'>

          <div className='w-full  h-full  rounded-lg bg-red-500 overflow-hidden'>
                  <img src='https://plus.unsplash.com/premium_photo-1707353401335-cdf2ad4abc4e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full  h-full object-cover'></img>
          </div>
        
        </div>
        <div className='lg:w-1/2 w-full lg:order-2 order-1 h-screen p-10'>
            <div className='w-full  h-full flex flex-col justify-center items-start text-white gap-5 pl-10'>
                     <h1 className='text-4xl'>Create an account</h1>
                     <h1 className='mb-20'>Already have an account? <Link to='/login' className='text-green-300'>Login</Link></h1>
                     <div className='flex flex-col justify-center items-start gap-5'>
                        <div className='flex lg:flex-row flex-col justify-center items-center gap-3'>
                          <input type='text' placeholder='Enter firstname' className='w-72 h-12 rounded-lg pl-5 bg-[#3C364C]' />
                          <input type='text' placeholder='Enter lastname' className='w-72 h-12 rounded-lg pl-5 bg-[#3C364C]' />
                        </div>
                        <input type='text' placeholder='Enter emaill id' className='lg:w-[37rem] w-72 h-12 rounded-lg pl-5 bg-[#3C364C]' />
                        <div className='relative'>
                            <input type='password' placeholder='Enter password' className='lg:w-[37rem] w-72 h-12 rounded-lg pl-5 bg-[#3C364C]' />
                            <div className='flex justify-center items-center absolute top-3 right-5 cursor-pointer'>
                               <IoIosEye size={20}/>
                            </div>
                            
                        </div>

                        <div className='relative'>
                            <input type='password' placeholder='Enter confirm password' className='lg:w-[37rem] w-72 h-12 rounded-lg pl-5 bg-[#3C364C]' />
                            <div className='flex justify-center items-center absolute top-3 right-5 cursor-pointer'>
                               <IoIosEye size={20}/>
                            </div>
                            
                        </div>
                        
                        <div className='flex flex-row justify-start items-center gap-3'>
                          <input type='checkbox' />
                          <h1>I am agree to the <span>Term & Conditions</span></h1>
                        </div>
                        <div className='lg:w-full flex justify-center items-center'>
                          <button className='lg:w-[37rem] w-72 h-12 bg-[#6D54B5] rounded-lg'>Create account</button>
                        </div>


                        <div className='w-full flex flex-row justify-center items-center mt-5'>
                          <div></div>
                          <div>Or register with</div>
                          <div></div>
                        </div>
                        <div className='w-full flex justify-center lg:flex-row flex-col items-center gap-5'>
                          <button className='w-40 h-10 rounded-lg border border-white inline-flex justify-center items-center gap-3'><FaGoogle />Google</button>
                          <button className='w-40 h-10 rounded-lg border border-white  inline-flex justify-center items-center gap-3'><FaApple />Apple</button>
                        </div>
                     </div>
                     
            </div>
        </div>
     </div>
    </>
  )
}

export default Signup