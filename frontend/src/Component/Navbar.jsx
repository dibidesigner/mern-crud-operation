import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/weblogo.png'
import '../assets/CSS/font.css'

function Header() {

  return (
    <>
       <section className='w-screen h-20 bg-[#090B27] flex justify-center items-center text-white text-[20px] login'>
               <Link to='/' className='lg:w-[20%] w-[40%] h-full flex justify-center items-center'>
                <img src={logo} className='w-40 h-auto cursor-pointer'/>
               </Link>
               <div className='lg:w-[50%] w-[0%] h-full flex flex-row justify-center items-center xl:gap-24 lg:gap-16 lg:visible invisible'>
                  <Link to='/' className='cursor-pointer hover:text-[#A8E629]'>Home</Link>
                  <Link to='/portfolio' className='cursor-pointer hover:text-[#A8E629]'>Portfolio</Link>
                  <div className='flex flex-row gap-2 group'>
                    <h1 className='text-white cursor-pointer group-hover'>Work</h1>
                        <select className='text-white bg-transparent w-5 flex justify-center items-center group-hover:text-[#A8E629]'>
                          
                          <option value="" className='text-black'>Graphic Design</option>
                          <option value="" className='text-black'>Website Design</option>
                        </select>
                  </div>
                  <Link to='/aboutus' className='cursor-pointer hover:text-[#A8E629]'>About Us</Link>
               </div>
               <div className='lg:w-[30%] w-[60%] h-full flex justify-center items-center'>
                   <div className='w-60 h-10 border border-white rounded-full flex flex-row justify-end items-center'>
                         <div className='mr-3'>
                           <h1 className='cursor-pointer login text-[#A8E629]'>Sign Up</h1>
                         </div>
                         <div className='w-32 h-10 bg-[#A8E629] hover:bg-[#96c733] rounded-full flex justify-center items-center cursor-pointer'>
                          <h1 className='text-black login'>Login</h1>
                         </div>
                   </div>
               </div>
              
       </section>

    </>
  )
}

export default Header