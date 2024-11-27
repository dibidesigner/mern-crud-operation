import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <>
       <section className='w-screen h-20 bg-black flex justify-center items-center text-white text-[20px]'>
               <div>
                  <Link to="/" >Home</Link>
               </div>
              
       </section>

    </>
  )
}

export default Header