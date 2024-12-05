import React from 'react'
import facebook from '../assets/socialicons/facebook.png'
import instagram from '../assets/socialicons/instagram.png'
import twitter from '../assets/socialicons/twitter.png'
import linkedin from '../assets/socialicons/linkedin.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className='w-screen h-[556.26px] bg-[#222222] flex flex-col justify-center items-center gap-5'>
           <label className='bg-gradient-to-b  bg-clip-text  from-[#36FF83] to-[#C92EC6] text-[40px] text-transparent'>D I B I  H E M B R A M</label>
           <p className='text-white w-[60%] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
           <div className='flex flew-row gap-4 mt-4'>
            <Link to='https://www.facebook.com/prince.dibi.9/'>
              <img src={facebook} /> 
            </Link> 
            <a href='https://www.instagram.com/db_hembram/'>
              <img src={instagram} /> 
            </a>
               
              <img src={twitter} />  
              <img src={linkedin} />          
           </div>
        </div>
    </>
  )
}

export default Footer