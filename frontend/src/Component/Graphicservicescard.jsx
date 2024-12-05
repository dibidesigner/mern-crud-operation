import React from 'react'
import '../assets/fonts/starif.css'



function Graphicservicescard({headcontent, pcontent}

) {
  return (
    <>
     <div className="w-[340.33px] h-[441.88px] border p-[2px] rounded-md flex justify-center items-center">
        <div className="w-full h-full bg-transparent rounded-md flex flex-col justify-start items-center px-5 pt-16">
            <div className='w-24 h-24 border border-[#D65AFF] rounded-full mb-5'></div>
            <label className='text-[#D65AFF] trochhi w-64 text-center mb-4'>{headcontent}<br/>
            & Branding</label>
            <p className='text-center text-white'>{pcontent}</p>
        </div>
        
    </div>


    </>
  )
}

export default Graphicservicescard